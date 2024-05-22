import { Component, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
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
    { name: 'Software For Sportsbook', path: 'software-for-sportsbook' }
  ];

  readonly BLOGS = [
    { name: 'How to Become a Bookie', path: 'how-to-become-a-bookie' },
    { name: 'How to Revolutionize Your Sportsbook Book Making Business', path: 'how-to-revolutionize-your-sportsbook-book-making-business' },
    { name: 'How to stay ahead of the game in bookmaking', path: 'how-to-stay-ahead-of-the-game-in-bookmaking' },
    { name: 'Pay Per Head', path: 'pay-per-head' },
    { name: 'Pay Per Head Sportsbook Services for Local Bookies', path: 'pay-per-head-sportsbook-services-for-local-bookies' },
    { name: 'Take your bookmaking services at a slow but steady pace', path: 'take-your-bookmaking-services-at-a-slow-but-steady-pace' },
    { name: 'Sportsbook', path: 'sportsbook' },
    { name: 'Real Reason Why The Best Pay Per Head gives you and your customers an exceptional edge in online games wagering!', path: 'real-reason-why-the-best-pay-per-head-gives-you-and-your-customers-an-exceptional-edge-in-online-games-wagering' },
    { name: 'Reason Why The Best Pay Per Head gives you and your customers an exceptional edge in online games wagering!', path: 'reason-why-the-best-pay-per-head-gives-you-and-your-customers-an-exceptional-edge-in-online-games-wagering' },
    { name: 'Why The Best Pay Per Head gives you and your customers a special edge in online games book wagering', path: 'why-the-best-pay-per-head-gives-you-and-your-customers-a-special-edge-in-online-games-book-wagering' },
    { name: 'Why Your Online Bookie Business Needs Pay Per Head', path: 'why-your-online-bookie-business-needs-pay-per-head' },
    { name: 'Pay Per Head Knowledge Base', path: 'pay-per-head-knowledge-base' },
    { name: 'The Reason Why Are The Best Pay Per Head Software', path: 'the-reason-why-are-the-best-pay-per-head-software' },
  ]

  isBlogsOpen: boolean = false;

  constructor(
    public appComponent: AppComponent,
    private router: Router,
    public location: Location
  ) {
  }

  ngOnInit(): void {
    this.domain = window.location.hostname;
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
    return !this.location.path().replaceAll('/', '').search(path)
  }

  // start feature
  isFeatureMenuActive() {
    return this.getMenuActive(this.FEATURES);
  }

  isFeaturePath() {
    if (this.getMenuActive(this.FEATURES) && window.innerWidth < 769)
      this.isFeaturesOpen = true;
  }

  openCloseFeatureMenu() {
    this.isFeaturesOpen = !this.isFeaturesOpen
  }
  // end feature

  // start blogs
  isBlogsMenuActive() {
    return this.getMenuActive(this.BLOGS)
  }

  isBlogsPath() {
    if (this.getMenuActive(this.BLOGS) && window.innerWidth < 769)
      this.isBlogsOpen = true;
  }

  openCloseBlogsMenu() {
    this.isBlogsOpen = !this.isBlogsOpen;
  }
  // end blogs
}
