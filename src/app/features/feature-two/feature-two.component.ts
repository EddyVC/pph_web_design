import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-feature-two',
  templateUrl: './feature-two.component.html',
  styleUrl: './feature-two.component.css'
})
export class FeatureTwoComponent {

  InformationPrice: string = '';

  constructor(
    private appComponent: AppComponent,
    private infoService: ApiService
  ) { }

  ngOnInit(): void {
    this.loadInformationPrice();
  }

  async loadInformationPrice() {
    const data = await this.infoService.getInformation('GENERAL', 'price').toPromise();

    if (Array.isArray(data)) {
      this.InformationPrice = data[0].Value;
    } else {
      // Manejar el caso en el que data no es un array
    }
  }

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
  }

}
