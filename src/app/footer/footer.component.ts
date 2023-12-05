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
    this.domain = window.location.hostname;

    
  }



  constructor(private infoService: ApiService) {

  }

  InformationResp : RespInformation[] = [];
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
}
