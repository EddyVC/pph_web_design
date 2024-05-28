import { Component } from '@angular/core';

// models
import { RespInformation } from '../models/Info.models';

// services
import { ApiService } from '../services/api.service';
import { LoaderService } from '../services/loader.service';

//components
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-fees-paid-page',
  templateUrl: './fees-paid-page.component.html',
  styleUrl: './fees-paid-page.component.css'
})
export class FeesPaidPageComponent {

  phoneNumber: string = '';
  InformationResp: RespInformation[] = [];

  constructor(
    private appComponent: AppComponent,
    private infoService: ApiService,
    private loaderService: LoaderService
  ) {
    this.loaderService.showLoader(true);

  }

  ngOnInit(): void {
    this.loadInformation();
    this.loadInformationContact();
    this.loaderService.showLoader(false);
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'fees-paid')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0) {
          this.InformationResp = response;
        }

      });
  }

  async loadInformationContact() {
    await this.infoService.getPphDesign('GENERAL', 'contact')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0) {
          this.phoneNumber = response[0].Value;
        }

      })
  }

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
  }

}
