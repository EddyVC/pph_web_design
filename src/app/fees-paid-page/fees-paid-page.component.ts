import { Component } from '@angular/core';

// models
import { RespInformation } from '../models/Info.models';

// services
import { ApiService } from '../services/api.service';
import { LoaderService } from '../services/loader.service';

//components
import { AppComponent } from '../app.component';
import { FeesPaidPageData } from '../models/pages-data.model';

@Component({
  selector: 'app-fees-paid-page',
  templateUrl: './fees-paid-page.component.html',
  styleUrl: './fees-paid-page.component.css'
})

export class FeesPaidPageComponent {

  pageData: FeesPaidPageData = new FeesPaidPageData();

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
          this.pageData.title = response[0].Value;
          this.pageData.sub_title = response[1].Value;
          this.pageData.description_0 = response[2].Value;
          this.pageData.description_1 = response[3].Value;
          this.pageData.description_2 = response[4].Value;
        }

      });
  }

  async loadInformationContact() {
    await this.infoService.getPphDesign('GENERAL', 'contact')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0) {
          this.pageData.phone_number = response[0].Value;
        }

      })
  }

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
  }

}
