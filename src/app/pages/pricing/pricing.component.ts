import { Component } from '@angular/core';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

  InformationPrice : string= '';

  constructor(private infoService: ApiService, private loaderService: LoaderService) {
    this.loaderService.showLoader(true);
  }

  async ngOnInit() {
   await this.loadInformationPrice()
    this.loaderService.showLoader(false);
  }



  async loadInformationPrice() {
    const data = await this.infoService.getInformation('GENERAL','price').toPromise();

    if (Array.isArray(data)) {
      this.InformationPrice = data[0].Value;
    } else {
      // Manejar el caso en el que data no es un array
    }
  }
}
