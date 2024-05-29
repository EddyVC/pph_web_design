import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';
import { FrequentlyQuestions, FeatureEightPageData } from './../../models/pages-data.model';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-feature-eight',
  templateUrl: './feature-eight.component.html',
  styleUrl: './feature-eight.component.css'
})
export class FeatureEightComponent {

  frequentlyQuestions: FrequentlyQuestions = new FrequentlyQuestions();
  featureEightPageData: FeatureEightPageData = new FeatureEightPageData();

  constructor(
    private infoService: ApiService,
    private loaderService: LoaderService
  ) {
    this.loaderService.showLoader(true);
  }

  ngOnInit(): void {
    this.loadInformation();
    this.loadFrequentlyQuestions();
    this.loaderService.showLoader(false);
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'software-for-sportsbook')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0){
          this.featureEightPageData.title_1 = response[0].Value;
          this.featureEightPageData.title_2 = response[2].Value;
          this.featureEightPageData.description_0 = response[1].Value;
          this.featureEightPageData.description_1 = response[3].Value;
        }

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

}
