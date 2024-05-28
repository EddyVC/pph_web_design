import { Component, OnInit } from '@angular/core';

// models
import { RespInformation } from '../models/Info.models';

//services
import { ApiService } from '../services/api.service';

//components
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {

  logo: string = '';
  email: string = ''
  location: string = ''
  available: string = ''
  phoneNumber: string = ''
  InformationPrice: string = '';
  DesignResp: RespInformation[] = [];
  InformatioFooterResp: RespInformation = new RespInformation();

  domain: string = window.location.hostname;

  constructor(private infoService: ApiService, public appComponent: AppComponent) { }

  ngOnInit(): void {
    this.loadPageDesign();
    this.loadInformation();
    this.loadInformationPrice();
    this.loadInformationFooter();
  }

  async loadPageDesign() {
    await this.infoService.getPphDesign(this.domain, 'design')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0){
          this.DesignResp = response;
          this.logo = response[0].Logo;
        }

      })
  }

  async loadInformation() {
    await this.infoService.getPphDesign('GENERAL', 'contact')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0) {
          this.phoneNumber = response[0].Value;
          this.email = response[1].Value;
          this.available = response[2].Value;
          this.location = response[3].Value;
        }

      })
  }

  async loadInformationPrice() {
    await this.infoService.getInformation('GENERAL', 'price')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0)
          this.InformationPrice = response[0].Value;

      })
  }

  async loadInformationFooter() {
    await this.infoService.getInformation('GENERAL', 'footer')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0) {
          this.InformatioFooterResp = response[0];
          this.InformatioFooterResp.Value = this.InformatioFooterResp.Value.replace(/\[ddd\]/g, this.domain);
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
