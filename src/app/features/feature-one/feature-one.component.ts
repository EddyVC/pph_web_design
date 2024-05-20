import { Component } from '@angular/core';
import { RespInformation } from '../../models/Info.models';
import { ApiService } from '../../services/api.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrl: './feature-one.component.css'
})
export class FeatureOneComponent {

  InformationResp: RespInformation[] = [];

  constructor(
    private appComponent: AppComponent,
    // private infoService: ApiService
  ) { }

  ngOnInit(): void {
    // this.loadInformation();
  }

  // async loadInformation() {
  //   const featureRoute = this.router.url.replace('/', '');

  //   const data = await this.infoService.getInformation('GENERAL', featureRoute).toPromise();

  //   if (Array.isArray(data)) {
  //     this.InformationResp = data;
  //   } else {
  //     // Manejar el caso en el que data no es un array
  //   }
  // }

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
  }

}
