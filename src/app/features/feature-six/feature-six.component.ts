import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

// components
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-feature-six',
  templateUrl: './feature-six.component.html',
  styleUrl: './feature-six.component.css'
})
export class FeatureSixComponent {

  phoneNumber: string = '';
  InformationPrice: string = '';
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
    this.loadInformationPrice();
    this.loadInformationContact();
    this.loaderService.showLoader(false);
  }

  async loadInformationContact() {
    await this.infoService.getPphDesign('GENERAL', 'contact')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0) {
          this.phoneNumber = response[0].Value;
        }

      })
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'pph-software-for-sportsbooks')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0)
          this.InformationResp = response;

      })
  }

  async loadInformationPrice() {
    const data = await this.infoService.getInformation('GENERAL', 'price').toPromise();

    if (Array.isArray(data)) {
      this.InformationPrice = data[0].Value;
    } else {
      // Manejar el caso en el que data no es un array
    }
  }

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
  }

}
