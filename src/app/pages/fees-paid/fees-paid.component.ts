import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

//components
import { AppComponent } from '../../app.component';
import { FeesPaidPageData } from '../../models/data.model';

@Component({
  selector: 'app-fees-paid',
  templateUrl: './fees-paid.component.html',
  styleUrl: './fees-paid.component.css'
})

export class FeesPaidComponent {

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
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'fees-paid')
      .subscribe(async(response: RespInformation[]) => {

        if (response.length > 0) {
          this.pageData.title = response[0].Value;
          this.pageData.sub_title = response[1].Value;
          this.pageData.description_0 = response[2].Value;
          this.pageData.description_1 = response[3].Value;
          this.pageData.description_2 = response[4].Value;

          this.pageData.phone_number = await this.loadInformationContact();
          this.loaderService.showLoader(false);
        }

      });
  }

  async loadInformationContact() {
    let phone_number = '';
    await this.infoService.getInformation('GENERAL', 'contact').toPromise()
      .then((response: any) => {

        if (response.length > 0)
          phone_number = response[0].Value;

      })
    return phone_number;
  }

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
  }

}
