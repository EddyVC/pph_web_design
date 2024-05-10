import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

  ngOnInit(): void {

    this.loadInformationPrice()
    
  }

  constructor(private infoService: ApiService) {}

  InformationPrice : string= '';

  async loadInformationPrice() {
    const data = await this.infoService.getInformation('GENERAL','price').toPromise();
  
    if (Array.isArray(data)) {
      this.InformationPrice = data[0].Value;
    } else {
      // Manejar el caso en el que data no es un array
    }
  }
}
