import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from '../../services/api.service';
import { RespInformation } from '../../models/Info.models';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  domain :string=''

  ngOnInit(): void {

    this.loadInformation()
    this.domain = window.location.hostname;
    
  }

  constructor(private infoService: ApiService) {}

  InformationResp : RespInformation[] = [];

  async loadInformation() {
    const data = await this.infoService.getInformation('cards').toPromise();
  
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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      },
      1024: {
        items: 4
      }
    },
    nav: false
  }

}
