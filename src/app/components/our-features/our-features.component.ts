import { Component } from '@angular/core';

// models
import { RespInformation } from '../../models/Info.models';

// services
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-our-features',
  templateUrl: './our-features.component.html',
  styleUrl: './our-features.component.css'
})
export class OurFeaturesComponent {


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
