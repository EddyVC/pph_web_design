import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';

// services
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {


  ngOnInit(): void {

    this.loadInformation()

  }

  constructor(private infoService: ApiService) {}

  InformationResp : RespInformation[] = [];

  async loadInformation() {
    const data = await this.infoService.getInformation('GENERAL','features').toPromise();

    if (Array.isArray(data)) {
      this.InformationResp = data;
    } else {
      // Manejar el caso en el que data no es un array
    }
  }
}
