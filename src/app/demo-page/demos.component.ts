import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RespInformation } from '../models/Info.models';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { title } from 'process';
@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrl: './demos.component.css'
})


export class DemosComponent {

  banners: any[] = [];

  ngOnInit(): void {
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
  constructor(private infoService: ApiService) { }
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


