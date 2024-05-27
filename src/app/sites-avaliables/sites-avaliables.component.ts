import { Component, HostListener } from '@angular/core';
import { SITESAVALIABLES } from '../global/sites-avaliables.global';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sites-avaliables',
  templateUrl: './sites-avaliables.component.html',
  styleUrl: './sites-avaliables.component.css'
})
export class SitesAvaliablesComponent {

  searchSite: string = '';
  siteSelected: string = '';
  showDropdown: boolean = false;
  sites: { name: string, path: string }[] = [];
  urlZanitazer: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {
    this.sites = SITESAVALIABLES;
    this.siteSelected = this.sites[0].name;
    this.urlZanitazer = this.sanitizer.bypassSecurityTrustResourceUrl(this.sites[0].path);
  }

  getSite(site: { name: string, path: string }) {
    this.sites = SITESAVALIABLES;
    this.searchSite = '';
    this.toggleDropdown();
    this.siteSelected = site.name;
    this.urlZanitazer = this.sanitizer.bypassSecurityTrustResourceUrl(site.path);
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  filterSites() {

    let term = this.searchSite;
    var objetosEncontrados = SITESAVALIABLES.filter(function (objeto) {
      return objeto.name.includes(term);
    });

    this.sites = objetosEncontrados

  }
  // Función para manejar el clic fuera del dropdown
  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (!this.isDropdownClicked(event)) {
      this.showDropdown = false;
    }
  }

  // Función para verificar si el clic fue dentro del dropdown
  isDropdownClicked(event: MouseEvent) {
    const dropdownElement = document.getElementById('containerSelect');
    return dropdownElement && dropdownElement.contains(event.target as Node);
  }

}
