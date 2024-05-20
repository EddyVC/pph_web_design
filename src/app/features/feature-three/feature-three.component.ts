import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-feature-three',
  templateUrl: './feature-three.component.html',
  styleUrl: './feature-three.component.css'
})
export class FeatureThreeComponent {

  constructor(
    private appComponent: AppComponent
  ) { }

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
  }

}
