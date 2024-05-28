import { CAROUSEL_OPTIONS_DEMO } from './../global/banners.global';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

// models
import { Banner } from '../models/Banner.model';
import { AuthenticationDto, LoginUserDto, PlayerDto } from '../models/Login.models';

// services
import { LoaderService } from '../services/loader.service';
import { ApiService } from '../services/api.service';
import { BANNER_DEMOS } from '../global/banners.global';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrl: './demos.component.css'
})

export class DemosComponent {

  banners: Banner[] = [];
  encryptPlayer: string = '';
  customOptions: OwlOptions = CAROUSEL_OPTIONS_DEMO
  currentUser: PlayerDto = new PlayerDto();

  constructor(private infoService: ApiService, private loaderService: LoaderService) {
    this.loaderService.showLoader(true);
  }

  ngOnInit(): void {
    this.login();
    this.banners = BANNER_DEMOS;
    this.loaderService.showLoader(false);
  }

  base64Encode(plainText: string): string {
    const plainTextBytes = new TextEncoder().encode(plainText);
    return btoa(String.fromCharCode(...plainTextBytes));
  }

  async login() {
    const userlogin: LoginUserDto = new LoginUserDto();
    userlogin.IpAddress = "10.0.0.0";
    userlogin.Domain = 'payperhead';

    const f: AuthenticationDto = new AuthenticationDto();
    f.AccountName = 'ug1';
    f.Password = '123';

    await this.infoService.Login(userlogin, f)
      .subscribe((data: PlayerDto) => {
        const playerdata: PlayerDto = data;
        this.encryptPlayer = this.base64Encode(playerdata.IdPlayer + "|" + playerdata.IdCall);
      });
  }

}


