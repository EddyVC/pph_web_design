import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RespInformation } from '../../models/Info.models';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-feature-four',
  templateUrl: './feature-four.component.html',
  styleUrl: './feature-four.component.css'
})
export class FeatureFourComponent {

  InformationResp: RespInformation[] = [];

  constructor(
    private infoService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadInformation();
  }

  async loadInformation() {
    const featureRoute = this.router.url.replace('/', '');

    const data = await this.infoService.getInformation('GENERAL', featureRoute).toPromise();

    if (Array.isArray(data)) {
      this.InformationResp = data;
    } else {
      // Manejar el caso en el que data no es un array
    }
  }

}
