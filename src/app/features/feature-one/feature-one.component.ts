import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrl: './feature-one.component.css'
})
export class FeatureOneComponent {

  InformationPrice : string= '';

  constructor(
    private appComponent: AppComponent,
    private infoService: ApiService
  ) { }

  ngOnInit(): void {
    this.loadInformationPrice();
  }

  async loadInformationPrice() {
    const data = await this.infoService.getInformation('GENERAL','price').toPromise();

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
