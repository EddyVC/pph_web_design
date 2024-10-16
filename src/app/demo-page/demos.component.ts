import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RespInformation } from '../models/Info.models';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { title } from 'process';
import { AuthenticationDto, LoginUserDto, PlayerDto, RequestPlayerInfo } from '../models/Login.models';
@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrl: './demos.component.css'
})


export class DemosComponent {

  banners: any[] = [];
  encryptPlayer: string = '';
  currentUser: PlayerDto = new PlayerDto();

  ngOnInit(): void {
    //this.login();
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

  base64Encode(plainText: string): string {
    const plainTextBytes = new TextEncoder().encode(plainText);
    return btoa(String.fromCharCode(...plainTextBytes));
  }

  login(): void {
    const userlogin: LoginUserDto = new LoginUserDto();
    userlogin.IpAddress = "10.0.0.0";
    userlogin.Domain = 'payperhead';
    const f: AuthenticationDto = new AuthenticationDto();
    f.AccountName = 'ug1';
    f.Password = '123';

    this.infoService.Login(userlogin, f).subscribe({
      next: (data) => {
        const playerdata: PlayerDto = data;
        this.encryptPlayer = this.base64Encode(playerdata.IdPlayer + "|" + playerdata.IdCall);
        console.log('playerData',playerdata);
        console.log('encryptPlayer',this.encryptPlayer);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
      },
    });
  } // end login
  
}


