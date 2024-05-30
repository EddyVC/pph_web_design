import { Component, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SITES_AVALIABLES } from '../global/sites-avaliables.global';
import { Site } from '../models/pages-data.model';

@Component({
  selector: 'app-sites-avaliables-page',
  templateUrl: './sites-avaliables-page.component.html',
  styleUrl: './sites-avaliables-page.component.css'
})
export class SitesAvaliablesPageComponent {

  sites: Site[] = [];
  sortSites: Site[] = [];

  searchSite: string = '';
  siteSelected: string = '';
  showDropdown: boolean = false;

  urlZanitazer: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {
    this.sortSites = [...SITES_AVALIABLES].sort(this.orderSites); //sitios ordenados de 0-9 y a-z
    this.sites = this.sortSites;

    this.siteSelected = this.sites[0].name;
    this.urlZanitazer = this.sanitizer.bypassSecurityTrustResourceUrl(this.sites[0].path);
  }

  getSite(site: Site) {
    this.sites = this.sortSites;
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
    var objetosEncontrados = this.sortSites.filter(function (objeto) {
      return objeto.name.includes(term);
    });

    this.sites = objetosEncontrados;

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

  orderSites(a: Site, b: Site): number {

    let ibetName = 'ibet.ag';

    if (a.name === ibetName && b.name !== ibetName) {
      return -1; // 'ibet.ag' va primero que b
    } else if (a.name !== ibetName && b.name === ibetName) {
      return 1; // 'ibet.ag' va después que a
    }

    // Extraer los primeros caracteres de name
    let charA: string = a.name.charAt(0);
    let charB: string = b.name.charAt(0);

    // Comprobar si son números
    let isNumA: boolean = !isNaN(parseInt(charA));
    let isNumB: boolean = !isNaN(parseInt(charB));

    // Si ambos son números o ambos no lo son, comparar alfabéticamente
    if ((isNumA && isNumB) || (!isNumA && !isNumB)) {
      return charA.localeCompare(charB);
    }

    // Si uno es número y el otro no, el número va primero
    else if (isNumA && !isNumB) {
      return -1;
    } else {
      return 1;
    }

  }


}
