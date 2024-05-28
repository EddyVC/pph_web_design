import { Component, Input } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';

// services
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  @Input() InformationPrice: string = '';
  InformationResp : RespInformation[] = [];

  constructor(private infoService: ApiService) {}

  ngOnInit(): void {
    this.loadInformation();
  }





  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'service')
    .subscribe((response: RespInformation[]) => {

      if (response.length > 0) {
        this.InformationResp = response;
      }

    })
  }

}
