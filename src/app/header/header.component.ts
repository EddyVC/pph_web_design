import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {

  domain: string = '';
  isOpaque: boolean = false;
  isSidebarOpen: boolean = false;
  isMoreInfoOpen: boolean = false;
  isFeaturesOpen: boolean = false;

  readonly FEATURES = [
    { name: 'Pay Per Head Software', path: 'pay-per-head-software' },
    { name: 'Best Pay Per Head Software', path: 'best-pay-per-head-software' },
    { name: 'Pph Software For Bookies', path: 'pph-software-for-bookies' },
    { name: 'Payperhead', path: 'payperhead' },
    { name: 'Pph Software For Sportsbooks', path: 'pph-software-for-sportsbooks' },
    { name: 'Pph Sportsbook Software', path: 'pph-sportsbook-software' },
    { name: 'Best Pph Sportsbook & Bookie Software Premiere Pay Per Head', path: 'best-pph-sportsbook-&-bookie-software-premiere-pay-per-head' },
    { name: 'Software For Sportsbook', path: 'software-for-sportsbook' },
    // { name: 'Sportsbook Software', , path: '' },
  ];

  constructor(public appComponent: AppComponent, private router: Router, public location: Location) {
  }

  ngOnInit(): void {
    this.domain = window.location.hostname;
    console.log(this.FEATURES);

  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.isMoreInfoOpen = false;
    this.isFeaturesOpen = false;
    this.isFeaturePath();
    this.toggleIsOpaque();
  }

  toggleMoreInfo() {
    this.isMoreInfoOpen = !this.isMoreInfoOpen;
    this.isSidebarOpen = false;
    this.toggleIsOpaque();
  }

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

  navigateSubMenu(path: string) {
    this.scrollToTop();
    this.router.navigateByUrl(path);
  }

  getMenuActive(subMenuItems: { name: string; path: string; }[]) {
    const locationPath = this.location.path().replace(/\//g, '');
    return subMenuItems.filter(feature => feature.path === locationPath);
  }

  // features and blog
  isSubMenuSelected(path: string) {
    if (this.location.path().replaceAll('/', '') === path)
      return true;

    return false;
  }

  // feature
  isFeatureMenuActive() {
    const menuActive = this.getMenuActive(this.FEATURES);
    if (menuActive.length > 0)
      return true;

    return false;
  }

  isFeaturePath() {
    const featurePath = this.getMenuActive(this.FEATURES);
    if (featurePath.length > 0 && window.innerWidth < 769)
      this.isFeaturesOpen = true;
  }

  openFeatureMenu() {
    this.isFeaturesOpen = true;
  }

  closeFeatureMenu() {
    this.isFeaturesOpen = false;
  }
  // feature

}
