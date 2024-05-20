import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RespInformation } from '../../models/Info.models';
import { ApiService } from '../../services/api.service';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-feature-two',
  templateUrl: './feature-two.component.html',
  styleUrl: './feature-two.component.css'
})
export class FeatureTwoComponent {

  constructor(
    private appComponent: AppComponent
  ) { }

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
  }

}
