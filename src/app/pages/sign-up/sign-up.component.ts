import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ApiService } from '../../services/api.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  active: boolean = false;
  private scrollPosition = 0;
  accountData: any = {
    PhoneSignUp: "",
    AnotherRequest: "",
  };
  configData: any = {
    Parlays: "Default",
    Teasers: "Default",
    AccountsNedded: "Create Manually",
    CarryOver: "",
    Support: "",
    PlayerWebsite: "ibet.ag",
    Important: ""
  };
  confirmPassword: string = ''; // Variable para confirmar contraseña



  constructor(public appComponent: AppComponent, private apiService: ApiService) {
  }

  continue() {
    this.active = !this.active;
  }

  hiddeModal() {
    this.appComponent.activeScroll(false);
    this.appComponent.showModal = false;
  }

  onInputChange(event: any) {
    const inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
    this.accountData.phone = event.target.value;
  }

  // getIPAddress() {
  //   fetch('https://api.ipify.org?format=json')
  //     .then(response => response.json())
  //     .then(data => {
  //       const ipAddress = data.ip;
  //       console.log(ipAddress);
  //       return ipAddress;
  //     })
  //     .catch(error => {
  //       console.error('Error al obtener la IP:', error);
  //       return "";
  //     });
  // }


  continueForm(form: any) {
    if (form.valid && this.confirmPassword === this.accountData.PasswordSignUp) {
      this.continue();
    } else {
      console.error("Formulario inválido. Por favor, verifica los campos.");
    }
  }

  submitForm(form: any) {
    if (form.valid) {
      localStorage.setItem('userData', JSON.stringify(this.configData));
      const allInfo = { ...this.accountData, ...this.configData };
      allInfo.Domain = window.location.hostname;
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          const ipAddress = data.ip;
          console.log("IP Address:", ipAddress);
          allInfo.IP = ipAddress;
          this.apiService.SignUp(allInfo).subscribe({
            next: response => {
              if (response.Code < 0) {
                Swal.fire(
                  "Sign Up Error!",
                  response.Message,
                  "error"
                )
              } else {
                Swal.fire(
                  "Agent Registration Successfully!",
                  "A verification email has been sent to your email address. Please verify your account to complete the process.",
                  "success"
                ).then((result) => {
                  if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
                    this.hiddeModal();
                  }
                });
              }
            },
            error: (err: any) => {
              Swal.fire(
                "Sign Up Error!",
                err,
                "error"
              );
            },
            complete: () => {
              console.log('success');
            },
          });
        })
    } else {
      console.error("Formulario inválido. Por favor, verifica los campos.");
    }
  }
}
