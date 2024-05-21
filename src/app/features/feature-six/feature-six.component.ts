import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-feature-six',
  templateUrl: './feature-six.component.html',
  styleUrl: './feature-six.component.css'
})
export class FeatureSixComponent {

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
