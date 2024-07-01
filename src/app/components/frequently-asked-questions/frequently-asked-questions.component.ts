import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';
import { FrequentlyQuestions } from '../../models/data.model';

// services
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-frequently-asked-questions',
  templateUrl: './frequently-asked-questions.component.html',
  styleUrl: './frequently-asked-questions.component.css'
})
export class FrequentlyAskedQuestionsComponent {

  frequentlyQuestions: FrequentlyQuestions = new FrequentlyQuestions();

  constructor(private infoService: ApiService){}

  ngOnInit(): void {
    this.loadFrequentlyQuestions();
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
