import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RespInformation } from '../models/Info.models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  // email = 'cs@redfigures.ag';

  domain: string='';
  
  ngOnInit(): void {

    this.loadInformation()
    this.loadInformationPrice()
    this.loadInformationFooter()
    this.domain = window.location.hostname;

    
  }



  constructor(private infoService: ApiService) {

  }

  InformationResp : RespInformation[] = [];
  InformatioFooterResp : RespInformation[] = [];
  phoneNumber : string = ''
  email : string = ''
  available : string = ''
  location : string = ''
  InformationPrice : string= '';




  async loadInformation() {
    const data = await this.infoService.getInformation('contact').toPromise();
  
    if (Array.isArray(data)) {
      this.InformationResp = data;

      this.phoneNumber = data[0].value;
      this.email = data[1].value;
      this.available = data[2].value;
      this.location = data[3].value;
    } else {
      // Manejar el caso en el que data no es un array
    }
  }

  async loadInformationPrice() {
    const data = await this.infoService.getInformation('price').toPromise();
  
    if (Array.isArray(data)) {
      this.InformationPrice = data[0].value;
    } else {
      // Manejar el caso en el que data no es un array
    }
  }



  async loadInformationFooter() {
    const data = await this.infoService.getInformation('footer').toPromise();
  
    if (Array.isArray(data)) {
      this.InformatioFooterResp = data;
      this.replaceTextInInformation();
    } else {
      // Manejar el caso en el que data no es un array
    }
  }


  replaceTextInInformation() {
    this.InformatioFooterResp.forEach(item => {
      if (item && item.value) {
        item.value = item.value.replace(/\[ddd\]/g, this.domain);
      }
    });}

}
