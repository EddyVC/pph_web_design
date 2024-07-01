import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

// models
import { RespInformation } from '../../models/Info.models';

// services
import { ApiService } from '../../services/api.service';
import { CARDS_OPTIONS } from '../../global/banners.global';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  price: string = '';
  domain: string = window.location.hostname;;
  InformationResp: RespInformation[] = [];
  customOptions: OwlOptions = CARDS_OPTIONS;

  constructor(private infoService: ApiService) {}

  ngOnInit(): void {
    this.loadInformation();
  }

  async loadInformation() {
    const data = await this.infoService.getInformation('GENERAL', 'cards').toPromise();

    if (Array.isArray(data)) {
      this.price = await this.loadInformationPrice();
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
        item.Value = item.Value.replace(/\$5/g, this.price);
      }
    });
  }

  async loadInformationPrice() {
    let price: string = '';
    await this.infoService.getInformation('GENERAL', 'price').toPromise()
      .then((response: any) => {

        if (response.length > 0)
          price = response[0].Value;

      })
    return price;
  }


}
