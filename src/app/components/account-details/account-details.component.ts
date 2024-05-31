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

  InformationResp: RespInformation[] = [];
  domain: string = window.location.hostname;

  constructor(private infoService: ApiService) { }

  ngOnInit(): void {
    this.loadInformation()
  }

  async loadInformation() {

    await this.infoService.getInformation('GENERAL', 'demo')
      .subscribe((response: RespInformation[]) => {
        if (response.length > 0) {
          this.InformationResp = response;
          this.InformationResp[0].Value = this.InformationResp[0].Value.replace(/\[ddd\]/g, this.domain);
        }
      })

  }

}
