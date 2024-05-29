import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';

//services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';
import { PPHSoftwarePowefulPageData } from '../../models/pages-data.model';


@Component({
  selector: 'app-pph-software-powerful-page',
  templateUrl: './pph-software-powerful-page.component.html',
  styleUrl: './pph-software-powerful-page.component.css'
})
export class PphSoftwarePowerfulPageComponent {

  InformationResp: RespInformation[] = [];
  pageData: PPHSoftwarePowefulPageData = new PPHSoftwarePowefulPageData();

  constructor(
    private infoService: ApiService,
    private loaderService: LoaderService
  ) {
    window.scrollTo(0, 0);
    this.loaderService.showLoader(true);
  }

  ngOnInit(): void {
    this.loadInformation();
    this.loaderService.showLoader(false);
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'pph-software-powerful-tool')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0) {
          this.pageData.title = response[0].Value;
          this.pageData.description_0 = response[1].Value;
          this.pageData.description_1 = response[2].Value;
        }

      })
  }

}
