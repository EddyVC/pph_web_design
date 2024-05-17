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
      { id: 1, url: '../../assets/img/softwares/sportbook.jpg', name: 'Sportbook'},
      { id: 2, url: '../../assets/img/softwares/horseRacing.jpg', name: 'Horsebook'},
      { id: 3, url: '../../assets/img/softwares/vegasLive.png', name: 'Vegas Live'},
      { id: 3, url: '../../assets/img/softwares/poker.jpg', name: 'Poker'},
      { id: 2, url: '../../assets/img/softwares/liveCasino.jpg', name: 'Live Casino'},
      { id: 3, url: '../../assets/img/softwares/casino.jpg', name: 'Digital Casino'},
      { id: 4, url: '../../assets/img/softwares/bossCasino.png', name: 'Boss Casino'},
      // { id: 4, url: '../../assets/img/demo-banners/LIVE.png', name: 'In-House Live Betting'},
      { id: 4, url: '../../assets/img/softwares/horseTV.jpg', name: 'Horses TV'},
      { id: 4, url: '../../assets/img/softwares/proHorses.png', name: 'Pro Horses'},
      { id: 4, url: '../../assets/img/softwares/propBuilder.png', name: 'Prop Builder'}


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
