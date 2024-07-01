import { Component } from '@angular/core';
import { FeatureEightPageData, FeatureFivePageData, FeatureFourPageData, FeatureOnePageData, FeatureSevenPageData, FeatureSixPageData, FeatureThreePageData, FeatureTwoPageData, FrequentlyQuestions } from '../../models/data.model';
import { AppComponent } from '../../app.component';
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';
import { RespInformation } from '../../models/Info.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  path_route: string = '';

  featureOne: FeatureOnePageData = new FeatureOnePageData();
  featureTwo: FeatureTwoPageData = new FeatureTwoPageData();
  featureThree: FeatureThreePageData = new FeatureThreePageData();
  featureFour: FeatureFourPageData = new FeatureFourPageData();
  featureFive: FeatureFivePageData = new FeatureFivePageData();
  featureSix: FeatureSixPageData = new FeatureSixPageData();
  featureSeven: FeatureSevenPageData = new FeatureSevenPageData();
  featureEight: FeatureEightPageData = new FeatureEightPageData();
  frequentlyQuestions: FrequentlyQuestions = new FrequentlyQuestions();

  constructor(
    private appComponent: AppComponent,
    private infoService: ApiService,
    private loaderService: LoaderService,
    private router: Router
  ) {
    this.loaderService.showLoader(true);
    this.path_route = this.router.url.slice(1);
  }

  ngOnInit(): void {
    this.loadInformation();
  }

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
  }

  async loadInformationContact() {
    let phone_number: string = '';
    await this.infoService.getInformation('GENERAL', 'contact').toPromise()
      .then((response: any) => {

        if (response.length > 0)
          phone_number = response[0].Value;

      })
    return phone_number;
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

  async loadInformation() {

    if (this.path_route === 'pay-per-head-software') {
      await this.infoService.getInformation('GENERAL', 'pay-per-head-software')
        .subscribe(async (response: RespInformation[]) => {

          if (response.length > 0) {
            this.featureOne.title = response[0].Value;
            this.featureOne.description_0 = response[1].Value;
            this.featureOne.description_1 = response[2].Value;

            this.featureOne.price = await this.loadInformationPrice();
            this.featureOne.phone_number = await this.loadInformationContact();
          }

        })
    }

    if (this.path_route === 'best-pay-per-head-software') {
      await this.infoService.getInformation('GENERAL', 'best-pay-per-head-software')
        .subscribe(async (response: RespInformation[]) => {

          if (response.length > 0) {
            this.featureTwo.title = response[0].Value;
            this.featureTwo.description_0 = response[1].Value;
            this.featureTwo.description_1 = response[2].Value;

            this.featureTwo.price = await this.loadInformationPrice();
            this.featureTwo.phone_number = await this.loadInformationContact();
          }

        })
    }

    if (this.path_route === 'pph-software-for-bookies') {
      await this.infoService.getInformation('GENERAL', 'pph-software-for-bookies')
        .subscribe(async (response: RespInformation[]) => {

          if (response.length > 0) {
            this.featureThree.title = response[0].Value;
            this.featureThree.description_1 = response[2].Value;
            this.featureThree.phone_number = await this.loadInformationContact();

            this.featureThree.price = await this.loadInformationPrice();
            this.featureThree.description_0 = response[1].Value.replace(/\$5/, this.featureThree.price);
          }

        })
    }

    if (this.path_route === 'payperhead') {
      await this.infoService.getInformation('GENERAL', 'payperhead')
        .subscribe(async (response: RespInformation[]) => {

          if (response.length > 0) {
            let price = await this.loadInformationPrice();
            this.featureFour.title = response[0].Value;
            this.featureFour.sub_title = response[1].Value;
            this.featureFour.description_0 = response[2].Value.replace(/\$5/, price);
            this.featureFour.description_1 = response[3].Value;
            this.featureFour.description_2 = response[4].Value;
          }

        })
    }

    if (this.path_route === 'pph-software-for-sportsbooks') {
      await this.infoService.getInformation('GENERAL', 'pph-software-for-sportsbooks')
        .subscribe(async (response: RespInformation[]) => {

          if (response.length > 0) {
            this.featureFive.title = response[0].Value;
            this.featureFive.description_0 = response[1].Value;
            this.featureFive.description_1 = response[2].Value;

            this.featureFive.price = await this.loadInformationPrice();
            await this.loadFrequentlyQuestions();
          }

        })
    }

    if (this.path_route === 'pph-sportsbook-software') {
      await this.infoService.getInformation('GENERAL', 'pph-software-for-sportsbooks')
        .subscribe(async (response: RespInformation[]) => {

          if (response.length > 0) {
            this.featureSix.title = response[0].Value;
            this.featureSix.description_0 = response[1].Value;
            this.featureSix.description_1 = response[2].Value;

            this.featureSix.price = await this.loadInformationPrice();
            this.featureSix.phone_number = await this.loadInformationContact();
          }

        })
    }

    if (this.path_route === 'best-pph-sportsbook-&-bookie-software-premiere-pay-per-head') {
      await this.infoService.getInformation('GENERAL', 'software-premiere-pay-per-head')
        .subscribe((response: RespInformation[]) => {

          if (response.length > 0) {
            this.featureSeven.title_1 = response[0].Value;
            this.featureSeven.title_2 = response[1].Value;
            this.featureSeven.description_0 = response[2].Value;
            this.featureSeven.description_1 = response[3].Value;
            this.featureSeven.list = response[4].Value.split(',');
            this.featureSeven.description_2 = response[5].Value;
          }

        })
    }

    if (this.path_route === 'software-for-sportsbook') {
      await this.infoService.getInformation('GENERAL', 'software-for-sportsbook')
        .subscribe(async(response: RespInformation[]) => {

          if (response.length > 0) {
            this.featureEight.title_1 = response[0].Value;
            this.featureEight.title_2 = response[2].Value;
            this.featureEight.description_0 = response[1].Value;
            this.featureEight.description_1 = response[3].Value;

            await this.loadFrequentlyQuestions();
          }

        })
    }

    this.loaderService.showLoader(false);

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


}
