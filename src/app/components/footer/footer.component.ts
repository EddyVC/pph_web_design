import { Component, OnInit } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';

//services
import { ApiService } from '../../services/api.service';

//components
import { AppComponent } from '../../app.component';
import { FooterPageData } from '../../models/data.model';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})

export class FooterComponent implements OnInit {

  DesignResp: RespInformation[] = [];
  pageData: FooterPageData = new FooterPageData();

  constructor(
    private infoService: ApiService,
    public appComponent: AppComponent,
    private loaderService: LoaderService
  ) {
    this.loaderService.showLoader(true);
    this.pageData.domain = window.location.hostname;
  }

  ngOnInit() {
    this.loadPageDesign();
    this.loadInformation();
    this.loadInformationFooter();
  }

  async loadPageDesign() {
    await this.infoService.getPphDesign(this.pageData.domain, 'design').subscribe({
      next: data => {
        if (Array.isArray(data)) {
          this.DesignResp = data;
        }
      },
      error: (err: any) => { },
      complete: () => {
        if (this.DesignResp.length == 0) {
          this.pageData.logo = "";
        } else {
          this.pageData.logo = this.DesignResp[0].Logo;
        }
      },
    });
  }

  async loadInformation() {
    await this.infoService.getPphDesign('GENERAL', 'contact')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0) {
          this.pageData.phone_number = response[0].Value;
          this.pageData.email = response[1].Value;
          this.pageData.available = response[2].Value;
          this.pageData.location = response[3].Value;
        }

      })
  }

  async loadInformationFooter() {
    await this.infoService.getInformation('GENERAL', 'footer')
      .subscribe(async (response: RespInformation[]) => {

        if (response.length > 0) {
          this.pageData.description = response[0].Value;
          this.pageData.price = await this.loadInformationPrice();
          this.pageData.description = this.pageData.description.replace(/\[ddd\]/g, this.pageData.domain);
          this.pageData.description = this.pageData.description.replace(/\$5/g, this.pageData.price);
        }

      })

    this.loaderService.showLoader(true);
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

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
