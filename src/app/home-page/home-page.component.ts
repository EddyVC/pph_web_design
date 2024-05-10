import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RespInformation } from '../models/Info.models';
import { AppComponent } from '../app.component';
import { subscribe } from 'diagnostics_channel';
import { error } from 'console';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  domain: string = '';
  video: string = '';
  InformationResp: RespInformation[] = [];
  DesignResp: RespInformation[] = [];



  constructor(private infoService: ApiService, public appComponent: AppComponent, public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.domain = window.location.hostname;
    this.loadInformation();
    this.loadPageDesign();
  }


  loadPageDesign() {
    this.infoService.getPphDesign(this.domain, 'design').subscribe({
      next: data => {
        if (Array.isArray(data)) {
          this.DesignResp = data;
          console.log('this.DesignResp', this.DesignResp)
        }
      },
      error: (err: any) => {},
      complete: () => {
        if (this.DesignResp.length == 0 ) {
          this.video = "https://scores.bridgehost.net/video/bg-video-go.mp4";
          console.log('this.Video', this.video);
        } else {
            this.video = this.DesignResp[0].Video;
        }
      },
    });
  }

  getVideo() { 

    return this.sanitizer.bypassSecurityTrustResourceUrl(this.video);
  }
  async loadInformation() {
    const data = await this.infoService.getInformation('GENERAL', 'home').toPromise();
    if (Array.isArray(data)) {
      this.InformationResp = data;
      this.replaceTextInInformation();
    }

  }

  replaceTextInInformation() {
    this.InformationResp.forEach(item => {
      if (item && item.Value) {
        item.Value = item.Value.replace(/\[ddd\]/g, this.domain);
      }
    });
  }
}
