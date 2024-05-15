import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RespInformation } from '../models/Info.models';
import { AppComponent } from '../app.component';
import { subscribe } from 'diagnostics_channel';
import { error } from 'console';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  @ViewChild('videoContainer') videoContainer!: ElementRef;
  @ViewChild('videoContainerMobile') videoContainerMobile!: ElementRef;
  @ViewChild('desktopVideo') desktopVideo!: ElementRef;
  @ViewChild('movileVideo') movileVideo!: ElementRef;

  domain: string = '';
  video: string = '';
  InformationResp: RespInformation[] = [];
  DesignResp: RespInformation[] = [];



  constructor(private infoService: ApiService, public appComponent: AppComponent, public sanitizer: DomSanitizer, public appModule: AppModule) {
  }

  ngOnInit(): void {

    this.domain = window.location.hostname;
    this.loadInformation();
    this.loadPageDesign();
    this.loadInformationPrice();

    this.banners = [
      { id: 1, url: '../../assets/img/demo-banners/AGENT.png', desktop: true },
      { id: 2, url: '../../assets/img/demo-banners/PLAYER.png', desktop: true },
      { id: 3, url: '../../assets/img/demo-banners/EPOS.png', desktop: true},
      { id: 4, url: '../../assets/img/demo-banners/LIVE.png', desktop: true},
      { id: 3, url: '../../assets/img/demo-banners/AGENT_MOBILE.png', desktop: false},
      { id: 2, url: '../../assets/img/demo-banners/PLAYER_MOBILE.png', desktop: false},
      { id: 3, url: '../../assets/img/demo-banners/LIVE_MOBILE.png', desktop: false},
      { id: 4, url: '../../assets/img/demo-banners/EPOS_MOBILE.png', desktop: false}
    ];
  }

  ngAfterViewInit() {
    const videoPromotionalDektop = `<video id="bg-video" loop muted autoplay playsinline><source src="https://scores.bridgehost.net/video/PromotionVideoDesktop.mp4" type="video/mp4">Your browser does not support the video tag.</video>`;
    this.desktopVideo.nativeElement.innerHTML = videoPromotionalDektop;
    const videoPromotionalMobile = `<video id="bg-video" loop muted autoplay playsinline><source src="https://scores.bridgehost.net/video/PromotionVideoMobile.mp4" type="video/mp4">Your browser does not support the video tag.</video>`;
    this.movileVideo.nativeElement.innerHTML = videoPromotionalMobile;
    setTimeout(() => {
      if (this.video) {
        const videoElement = `<video loop muted autoplay playsinline class='video'><source src="${this.video}" type="video/mp4">Your browser does not support the video tag.</video>`;
        this.videoContainer.nativeElement.innerHTML = videoElement;
        this.videoContainerMobile.nativeElement.innerHTML = videoElement;
      }
    }, 1000); // Retraso de 1 segundo (1000 milisegundos)
  }

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
          this.video = "https://scores.bridgehost.net/video/bg-video-go.mp4";
        } else {
          this.video = this.DesignResp[0].Video;
        }
      },
    });
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

  InformationPrice : string= '';

  async loadInformationPrice() {
    const data = await this.infoService.getInformation('GENERAL','price').toPromise();
  
    if (Array.isArray(data)) {
      this.InformationPrice = data[0].Value;
    } else {
      // Manejar el caso en el que data no es un array
    }
  }

  banners: any[] = [];

  customOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      1024: {
        items: 1
      }
    },
    nav: false
  }

}
