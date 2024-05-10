import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isSidebarOpen = false;
  domain: string = '';

  ngOnInit(): void {
    this.domain = window.location.hostname;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.isMoreInfoOpen = false;
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
}
