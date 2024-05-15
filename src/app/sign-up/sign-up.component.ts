import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  active: boolean = false;
  private scrollPosition = 0;
  userData: any = {}; // Objeto para almacenar los datos del formulario
  confirmPassword: string = ''; // Variable para confirmar contraseña



  constructor(public appComponent: AppComponent) {
  }
  
  continue(){
    this.active = !this.active;
  }

  hiddeModal(){
    this.appComponent.activeScroll(false);
    this.appComponent.showModal = false;
  }

  onInputChange(event: any) {
    const inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
    this.userData.phone = event.target.value;
  }

  submitForm(form: any) {
    if (form.valid && this.confirmPassword === this.userData.password) {
      this.continue();
      console.log(this.userData);
    } else {
      console.log("Formulario inválido. Por favor, verifica los campos.");
    }
  }
}
