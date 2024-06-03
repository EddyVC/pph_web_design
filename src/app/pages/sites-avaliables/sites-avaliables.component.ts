import { Component, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

//models
import { Site } from '../../models/pages-data.model';
import { RespInformation } from '../../models/Info.models';

//services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-sites-avaliables',
  templateUrl: './sites-avaliables.component.html',
  styleUrl: './sites-avaliables.component.css'
})
export class SitesAvaliablesPageComponent {

  sites: Site[] = [];
  sortSites: Site[] = [];

  searchSite: string = '';
  siteSelected: string = '';

  loader: boolean = false;
  showDropdown: boolean = false;

  urlZanitazer: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer, private infoService: ApiService, private loaderService: LoaderService) {

    this.urlZanitazer = this.sanitizer.bypassSecurityTrustResourceUrl('https://ibet.ag/');
    this.loaderService.showLoader(true);
    this.loadInformation();

  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'sites-avaliables')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0) {

          response.map((response: RespInformation) => {
            const siteTemp = new Site();
            siteTemp.name = response.Title;
            siteTemp.path = response.Value;
            siteTemp.enable = response.detail === 'true';

            this.sites.push(siteTemp);
          })

          // se ordena de 0-9 y a-z y se filtran los sitios activos
          this.sites = this.sites.sort(this.orderSites).filter(site => site.enable === true);

          this.sortSites = this.sites;

          let defaultSite = this.sites[0];
          this.siteSelected = defaultSite.name;
          this.urlZanitazer = this.sanitizer.bypassSecurityTrustResourceUrl(defaultSite.path);

          this.loaderService.showLoader(false);
        }

      })

    this.showLoader();
  }

  getSite(site: Site) {
    this.loader = true;
    this.sites = this.sortSites;
    this.searchSite = '';
    this.toggleDropdown();
    this.siteSelected = site.name;
    this.urlZanitazer = this.sanitizer.bypassSecurityTrustResourceUrl(site.path);
    this.showLoader();
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  // entra al buscar un sitio
  filterSites() {
    this.searchSite = this.searchSite.toLowerCase();
    let term = this.searchSite;
    this.sites = this.sortSites.filter((site: Site) => site.name.includes(term));
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

  showLoader() {
    setTimeout(() => {
      this.loader = false;
    }, 800);
  }


}
