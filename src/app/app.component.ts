import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { RespInformation } from './models/Info.models';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ppg-design';

  domain: string = '';
  showModal: boolean = false;
  showLoader: boolean = false;

  ngOnInit(): void {
    this.domain = window.location.hostname;
    this.loadPageDesign();
  }

  constructor(private infoService: ApiService, private loaderService: LoaderService) {
    this.getLoader();
  }

  DesignResp: RespInformation[] = [];

  loadPageDesign() {
    this.infoService.getPphDesign(this.domain, 'design').subscribe({
      next: data => {
        if (Array.isArray(data)) {
          this.DesignResp = data;
          console.log('this.DesignResp', this.DesignResp)
        }
      },
      error: (err: any) => { },
      complete: () => {
        if (this.DesignResp.length == 0) {
          this.loadCss("https://scores.bridgehost.net/templates/TemplateGreenOrange/styles.css");
        } else {
          this.loadCss(this.DesignResp[0].Style);
        }
      },
    });
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
      console.log('show',show);

      this.showLoader = show;
    });
  }

}
