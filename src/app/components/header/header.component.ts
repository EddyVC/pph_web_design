import { Component, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SUBMENUBLOG, SUBMENUFEARTUES } from '../../global/header.global';

// components
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {

  isOpaque: boolean = false;
  isBlogsOpen: boolean = false;
  isSidebarOpen: boolean = false;
  isMoreInfoOpen: boolean = false;
  isFeaturesOpen: boolean = false;
  domain: string = window.location.hostname;

  blogsSubMenu: { name: string; path: string; dataExtra: boolean }[] = [];
  featuresSubMenu: { name: string; path: string }[] = [];

  constructor(
    public appComponent: AppComponent,
    private router: Router,
    public location: Location
  ) {
    this.blogsSubMenu = SUBMENUBLOG;
    this.featuresSubMenu = SUBMENUFEARTUES;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.isMoreInfoOpen = false;
    this.isFeaturesOpen = false;
    this.isFeaturePath();
    this.isBlogsPath();
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

  navigationSubMenu(path: string) {
    this.scrollToTop();
    this.router.navigateByUrl(path);
  }

  getMenuActive(subMenuItems: { name: string; path: string; }[]) {
    const locationPath = this.location.path().replace(/\//g, '');
    return subMenuItems.some(item => item.path === locationPath);
  }

  isSubMenuSelected(path: string) {
    if(this.location.path().replaceAll('/', '') === path)
      return true

    return false;
  }

  // start feature
  isFeatureMenuActive() {
    return this.getMenuActive(this.featuresSubMenu);
  }

  isFeaturePath() {
    if (this.getMenuActive(this.featuresSubMenu) && window.innerWidth < 769)
      this.isFeaturesOpen = true;
  }

  openCloseFeatureMenu() {
    this.isFeaturesOpen = !this.isFeaturesOpen
  }
  // end feature

  // start blogs
  isBlogsMenuActive() {
    return this.getMenuActive(SUBMENUBLOG)
  }

  isBlogsPath() {
    if (this.getMenuActive(SUBMENUBLOG) && window.innerWidth < 769)
      this.isBlogsOpen = true;
  }

  openCloseBlogsMenu() {
    this.isBlogsOpen = !this.isBlogsOpen;
  }
  // end blogs
}
