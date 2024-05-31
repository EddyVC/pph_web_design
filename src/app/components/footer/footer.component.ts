import { Component, OnInit } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';

//services
import { ApiService } from '../../services/api.service';

//components
import { AppComponent } from '../../app.component';
import { FooterPageData } from '../../models/pages-data.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})

export class FooterComponent implements OnInit {

  pageData: FooterPageData  = new FooterPageData();

  DesignResp: RespInformation[] = [];
  InformatioFooterResp: RespInformation = new RespInformation();

  constructor(private infoService: ApiService, public appComponent: AppComponent) { }

  ngOnInit(): void {
    this.loadPageDesign();
    this.loadInformation();
    this.loadInformationPrice();
    this.loadInformationFooter();
  }

  loadPageDesign() {
    this.infoService.getPphDesign(this.pageData.domain, 'design').subscribe({
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

  async loadInformationPrice() {
    await this.infoService.getInformation('GENERAL', 'price')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0)
          this.pageData.price = response[0].Value;

      })
  }

  async loadInformationFooter() {
    await this.infoService.getInformation('GENERAL', 'footer')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0) {
          this.InformatioFooterResp = response[0];
          this.InformatioFooterResp.Value = this.InformatioFooterResp.Value.replace(/\[ddd\]/g, this.pageData.domain);
        }

      })
  }

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
