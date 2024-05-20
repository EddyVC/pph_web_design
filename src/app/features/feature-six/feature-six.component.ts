import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-feature-six',
  templateUrl: './feature-six.component.html',
  styleUrl: './feature-six.component.css'
})
export class FeatureSixComponent {

  constructor(
    private appComponent: AppComponent
  ) { }

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
  }

}
