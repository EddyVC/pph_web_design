import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RespInformation } from '../../models/Info.models';
import { ApiService } from '../../services/api.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-feature-five',
  templateUrl: './feature-five.component.html',
  styleUrl: './feature-five.component.css'
})
export class FeatureFiveComponent {

  constructor(
    private appComponent: AppComponent
  ) { }

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
  }

}
