import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RespInformation } from '../models/Info.models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  domain: string='';


  ngOnInit(): void {

    this.loadInformation()
    this.domain = window.location.hostname;

    
  }
  constructor(private infoService: ApiService) {
  }

  InformationResp : RespInformation[] = [];

  async loadInformation() {
    const data = await this.infoService.getInformation('home').toPromise();
    if (Array.isArray(data)) {
      this.InformationResp = data;
      this.replaceTextInInformation();

    } else {
      // Manejar el caso en el que data no es un array
    }
  }


  replaceTextInInformation() {
    this.InformationResp.forEach(item => {
      if (item && item.value) {
        item.value = item.value.replace(/\[ddd\]/g, this.domain);
      }
    });}


}
