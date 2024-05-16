import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RespInformation } from '../models/Info.models';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  // email = 'cs@redfigures.ag';
  InformationResp : RespInformation[] = [];
  InformatioFooterResp : RespInformation[] = [];
  phoneNumber : string = ''
  email : string = ''
  available : string = ''
  location : string = ''
  InformationPrice : string= '';
  DesignResp: RespInformation[] = [];
  logo: string = '';
  domain: string='';
  
  constructor(private infoService: ApiService, public appComponent: AppComponent) {}

  ngOnInit(): void {
    this.loadPageDesign();
    this.loadInformation();
    this.loadInformationPrice();
    this.loadInformationFooter();
    this.domain = window.location.hostname;
  }

  loadPageDesign() {
    this.infoService.getPphDesign(this.domain, 'design').subscribe({
      next: data => {
        if (Array.isArray(data)) {
          this.DesignResp = data;
        }
      },
      error: (err: any) => { },
      complete: () => {
        if (this.DesignResp.length == 0) {
          this.logo = "";
        } else {
          this.logo = this.DesignResp[0].Logo;
        }
      },
    });
  }

  async loadInformation() {
    const data = await this.infoService.getInformation('GENERAL','contact').toPromise();
  
    if (Array.isArray(data)) {
      this.InformationResp = data;

      this.phoneNumber = data[0].Value;
      this.email = data[1].Value;
      this.available = data[2].Value;
      this.location = data[3].Value;
    } else {
      // Manejar el caso en el que data no es un array
    }
  }

  async loadInformationPrice() {
    const data = await this.infoService.getInformation('GENERAL','price').toPromise();
  
    if (Array.isArray(data)) {
      this.InformationPrice = data[0].Value;
    } else {
      // Manejar el caso en el que data no es un array
    }
  }



  async loadInformationFooter() {
    const data = await this.infoService.getInformation('GENERAL','footer').toPromise();
  
    if (Array.isArray(data)) {
      this.InformatioFooterResp = data;
      this.replaceTextInInformation();
    } else {
      // Manejar el caso en el que data no es un array
    }
  }


  replaceTextInInformation() {
    this.InformatioFooterResp.forEach(item => {
      if (item && item.Value) {
        item.Value = item.Value.replace(/\[ddd\]/g, this.domain);
      }
    });}

    openModal() {
      this.appComponent.showModal = true;
      this.appComponent.activeScroll(true);
    }

}
