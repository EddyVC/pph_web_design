import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RespInformation } from '../models/Info.models';

@Component({
  selector: 'app-account-Details',
  templateUrl: './account-Details.component.html',
  styleUrls: ['./account-Details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  domain: string='';


  ngOnInit(): void {

    this.loadInformation()
    this.domain = window.location.hostname;

    
  }
  constructor(private infoService: ApiService) {
  }

  InformationResp : RespInformation[] = [];

  async loadInformation() {
    const data = await this.infoService.getInformation('GENERAL','demo').toPromise();
    if (Array.isArray(data)) {
      this.InformationResp = data;
      this.replaceTextInInformation();

    } else {
      // Manejar el caso en el que data no es un array
    }
  }


  replaceTextInInformation() {
    this.InformationResp.forEach(item => {
      if (item && item.Value) {
        item.Value = item.Value.replace(/\[ddd\]/g, this.domain);
      }
    });}
}
