import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';
import { FeatureFivePageData, FrequentlyQuestions } from '../../models/pages-data.model';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

// components
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-feature-five',
  templateUrl: './feature-five.component.html',
  styleUrl: './feature-five.component.css'
})
export class FeatureFiveComponent {

  pageData: FeatureFivePageData = new FeatureFivePageData();
  frequentlyQuestions: FrequentlyQuestions = new FrequentlyQuestions();

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
    this.loadFrequentlyQuestions();
    this.loaderService.showLoader(false);
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'pph-software-for-sportsbooks')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0) {
          this.pageData.title = response[0].Value;
          this.pageData.description_0 = response[1].Value
          this.pageData.description_1 = response[2].Value
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

  async loadFrequentlyQuestions() {
    await this.infoService.getInformation('GENERAL', 'frequently-asked-questions')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0) {
          this.frequentlyQuestions.title = response[0].Value;

          response.shift(); // se borra el title(Frequently Asked Questions) del array
          this.frequentlyQuestions.frequently_questions = response.map((item) => {
            return {
              question: item.Title,
              description: item.Value
            }
          })

        }

      })
  }

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
  }

}
