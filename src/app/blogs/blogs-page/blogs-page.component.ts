import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { SUBMENUBLOG } from '../../global/header.global';

//models
import { RespInformation } from '../../models/Info.models';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrl: './blogs-page.component.css'
})
export class BlogsPageComponent  {

  pathBlog: string = '';
  titleBlog: string = '';
  isDataExtraBlogs: boolean = false;
  InformationResp: RespInformation[] = [];

  constructor(
    public location: Location,
    private infoService: ApiService,
    private loaderService: LoaderService
  ) {
    this.loaderService.showLoader(true);
  }

  ngOnInit(): void {

    this.loadInformation();

    const locationPath = this.location.path().replace(/\//g, '');
    const blog =  SUBMENUBLOG.filter(blog => blog.path === locationPath)[0];
    this.pathBlog = blog.path;
    this.titleBlog = blog.name;
    this.isDataExtraBlogs = blog.dataExtra;
    window.scrollTo(0, 0);

    this.loaderService.showLoader(false);
  }

  isLongTitle(){
    if (this.titleBlog.length > 66 && window.innerWidth < 545) {
      return true;
    }
    return false;
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'blog-description')
      .subscribe((response: RespInformation[]) => {
console.log(response);

        if (response.length > 0)
          this.InformationResp = response;

      })
  }

}
