import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { RespInformation } from '../../models/Info.models';

@Component({
  selector: 'app-feature-six',
  templateUrl: './feature-six.component.html',
  styleUrl: './feature-six.component.css'
})
export class FeatureSixComponent {

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
