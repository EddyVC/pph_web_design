import { Component, HostListener } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {

  isSidebarOpen = true;
  domain: string = '';
  isFeaturesOpen: boolean = false;

  readonly FEATURES = [
    { name: 'Pay Per Head Software' },
    { name: 'Best Pay Per Head Software' },
    { name: 'Pph Software For Bookies' },
    { name: 'Payperhead' },
    { name: 'Pph Software For Sportsbooks' },
    { name: 'Pph Sportsbook Software' },
    { name: 'Best Pph Sportsbook & Bookie Software Premiere Pay Per Head' },
    { name: 'Software For Sportsbook' },
    // { name: 'Sportsbook Software' },
  ];

  ngOnInit(): void {
    this.domain = window.location.hostname;
  }

  constructor(public appComponent: AppComponent, private _router: Router) {
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.isMoreInfoOpen = false;
    this.isFeaturesOpen = false;
    this.toggleIsOpaque();
  }

  isMoreInfoOpen = false;

  toggleMoreInfo() {
    this.isMoreInfoOpen = !this.isMoreInfoOpen;
    this.isSidebarOpen = false;
    this.toggleIsOpaque();
  }

  isOpaque: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    this.isOpaque = window.scrollY > 50;
    if (this.isMoreInfoOpen || this.isSidebarOpen) {
      this.isOpaque = true;
    }
  }
  toggleIsOpaque() {
    this.isOpaque = true;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
    this.isSidebarOpen = false;
  }

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
    this.isSidebarOpen = false;
  }

  getFeature(feature: string) {
    feature = feature.replaceAll(' ', '-').toLowerCase();

    // if (this.isSidebarOpen)
    //   this.isSidebarOpen = !this.isSidebarOpen;

    window.scrollTo(0, 0);
    this._router.navigateByUrl(feature);
  }

  openFeatures() {
    this.isFeaturesOpen = true;
  }

  closeFeatures() {
    this.isFeaturesOpen = false;
  }

}
