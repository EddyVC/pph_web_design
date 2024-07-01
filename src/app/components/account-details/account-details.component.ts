import { Component, OnInit } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';
// services
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})

export class AccountDetailsComponent implements OnInit {

  price: string = '';
  InformationResp: RespInformation[] = [];
  domain: string = window.location.hostname;

  constructor(private infoService: ApiService) { }

  ngOnInit(): void {
    this.loadInformation()
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'demo')
      .subscribe(async(response: RespInformation[]) => {

        if (response.length > 0) {
          this.InformationResp = response;
          this.price = await this.loadInformationPrice();
          this.InformationResp[0].Value = this.InformationResp[0].Value.replace(/\[ddd\]/g, this.domain);
          this.InformationResp[0].Value = this.InformationResp[0].Value.replace(/\$5/g, this.price);
        }

      })
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
