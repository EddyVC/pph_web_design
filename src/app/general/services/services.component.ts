import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RespInformation } from '../../models/Info.models';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  ngOnInit(): void {

    this.loadInformation()
    this.loadInformationPrice()
    
  }

  constructor(private infoService: ApiService) {}

  InformationResp : RespInformation[] = [];

  async loadInformation() {
    const data = await this.infoService.getInformation('GENERAL','service').toPromise();
  
    if (Array.isArray(data)) {
      this.InformationResp = data;
    } else {
      // Manejar el caso en el que data no es un array
    }
  }


  InformationPrice : string= '';

  async loadInformationPrice() {
    const data = await this.infoService.getInformation('GENERAL','price').toPromise();
  
    if (Array.isArray(data)) {
      this.InformationPrice = data[0].Value;
    } else {
      // Manejar el caso en el que data no es un array
    }
  }

}
