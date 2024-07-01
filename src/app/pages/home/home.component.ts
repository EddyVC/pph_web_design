import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';

// global
import { BANNERS_HOME, CAROUSEL_OPTIONS_HOME } from '../../global/banners.global';

// models
import { Banner } from '../../models/Banner.model';
import { RespInformation } from '../../models/Info.models';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

// components
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  video: string = '';
  price: string = '';
  domain: string = '';

  DesignResp: RespInformation = new RespInformation();
  InformationResp: RespInformation = new RespInformation();
  banners: Banner[] = [];

  customOptions: OwlOptions = CAROUSEL_OPTIONS_HOME;

  @ViewChild('movileVideo') movileVideo!: ElementRef;
  @ViewChild('desktopVideo') desktopVideo!: ElementRef;
  @ViewChild('videoContainer') videoContainer!: ElementRef;
  @ViewChild('videoContainerMobile') videoContainerMobile!: ElementRef;

  constructor(
    private infoService: ApiService,
    public appComponent: AppComponent,
    public sanitizer: DomSanitizer,
    private loaderService: LoaderService
  ) {
    this.domain = window.location.hostname;
    this.loaderService.showLoader(true);
    this.banners = BANNERS_HOME;
  }

  ngOnInit(): void {
    this.loadPageDesign();
    this.loadInformation();
    this.loaderService.showLoader(false);

  }

  ngAfterViewInit() {
    const videoPromotionalDektop = `<video id="bg-video" loop muted autoplay playsinline><source src="https://scores.bridgehost.net/video/PromotionVideoDesktop.mp4" type="video/mp4">Your browser does not support the video tag.</video>`;
    this.desktopVideo.nativeElement.innerHTML = videoPromotionalDektop;
    const videoPromotionalMobile = `<video loop muted autoplay playsinline><source src="https://scores.bridgehost.net/video/PromotionVideoMobile.mp4" type="video/mp4">Your browser does not support the video tag.</video>`;
    this.movileVideo.nativeElement.innerHTML = videoPromotionalMobile;
    setTimeout(() => {
      if (this.video) {
        const videoElement = `<video loop muted autoplay playsinline class='video'><source src="${this.video}" type="video/mp4">Your browser does not support the video tag.</video>`;
        this.videoContainer.nativeElement.innerHTML = videoElement;
        this.videoContainerMobile.nativeElement.innerHTML = videoElement;
      }
    }, 1000); // Retraso de 1 segundo (1000 milisegundos)
  }

  async loadPageDesign() {
    await this.infoService.getPphDesign(this.domain, 'design')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0)
          this.DesignResp = response[0];

        if (!this.DesignResp.Video)
          this.video = "https://scores.bridgehost.net/video/bg-video-go.mp4";
        else
          this.video = this.DesignResp.Video;

      })
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'home')
      .subscribe(async (response: RespInformation[]) => {

        if (response.length > 0) {
          this.InformationResp = response[0];
          this.price = await this.loadInformationPrice();
          this.InformationResp.Value = this.InformationResp.Value.replace(/\$5/g, this.price);
          this.InformationResp.Value = this.InformationResp.Value.replace(/\[ddd\]/g, this.domain);
        }

      })
  }

  async loadInformationPrice() {
    let price: string = '';
    await this.infoService.getInformation('GENERAL', 'price').toPromise()
      .then((response: any) => {

        if (response.length > 0)
          price = response[0].Value;

      })
    return price;
  }

  openModal() {
    this.appComponent.showModal = true;
    this.appComponent.activeScroll(true);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
