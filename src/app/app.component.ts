import { Component } from '@angular/core';

// models
import { RespInformation } from './models/Info.models';

// service
import { ApiService } from './services/api.service';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  showModal: boolean = false;
  showLoader: boolean = false;

  DesignResp: RespInformation[] = [];
  domain: string = window.location.hostname;

  constructor(private infoService: ApiService, private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.getLoader();
    this.loadPageDesign();
  }

  async loadPageDesign() {
    await this.infoService.getPphDesign(this.domain, 'design')
      .subscribe((data: RespInformation[]) => {

        if (data.length > 0) {
          this.loadCss(data[0].Style);
          this.DesignResp = data;
        }

        if (this.DesignResp.length == 0)
          this.loadCss("https://scores.bridgehost.net/templates/TemplateGreenOrange/styles.css");

      })
  }

  // Función para cargar CSS dinámicamente
  loadCss(url: string) {
    const link = document.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  activeScroll(switching: boolean = false) {
    if (switching) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  getLoader() {
    this.loaderService.loaderState$.subscribe(show => {
      this.showLoader = show;
    });
  }

}
