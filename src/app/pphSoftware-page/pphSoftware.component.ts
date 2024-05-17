import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-pphSoftware',
  templateUrl: './pphSoftware.component.html',
  styleUrls: ['./pphSoftware.component.css']
})
export class PphSoftwareComponent implements OnInit {

  softwares: any[] = [];

  constructor() { }

  ngOnInit() {

    this.softwares = [
      { id: 1, url: '../../assets/img/demo-banners/AGENT.png', name: 'Sportbook'},
      { id: 2, url: '../../assets/img/demo-banners/PLAYER.png', name: 'Horsebook'},
      { id: 3, url: '../../assets/img/demo-banners/EPOS.png', name: 'Vegas Live'},
      { id: 4, url: '../../assets/img/demo-banners/LIVE.png', name: 'In-House Live Betting'},
      { id: 3, url: '../../assets/img/demo-banners/AGENT_MOBILE.png', name: 'Digital Casino'},
      { id: 2, url: '../../assets/img/demo-banners/PLAYER_MOBILE.png', name: 'Live Casino'},
      { id: 3, url: '../../assets/img/demo-banners/LIVE_MOBILE.png', name: 'Poker'},
      { id: 4, url: '../../assets/img/demo-banners/EPOS_MOBILE.png', name: 'Boss Casino'},
      { id: 4, url: '../../assets/img/demo-banners/EPOS_MOBILE.png', name: 'Horses TV'},
      { id: 4, url: '../../assets/img/demo-banners/EPOS_MOBILE.png', name: 'Pro Horses'},
      { id: 4, url: '../../assets/img/demo-banners/EPOS_MOBILE.png', name: 'Prop Builder'}


    ];
  }

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
        items: 2
      },
      940: {
        items: 3
      },
      1024: {
        items: 3
      }
    },
    nav: false
  }

}
