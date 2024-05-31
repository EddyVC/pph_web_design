import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { SUBMENUBLOG } from '../../global/header.global';

//models
import { RespInformation } from '../../models/Info.models';
import { BlogsPageData } from '../../models/pages-data.model';

// services
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})

export class BlogsPageComponent {

  pageData: BlogsPageData = new BlogsPageData();

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
    const blog = SUBMENUBLOG.filter(blog => blog.path === locationPath)[0];
    this.pageData.path = blog.path;
    this.pageData.title = blog.name;
    this.pageData.dataExtra = blog.dataExtra;
    window.scrollTo(0, 0);

    this.loaderService.showLoader(false);
  }

  isLongTitle() {
    if (this.pageData.title.length > 66 && window.innerWidth < 545) {
      return true;
    }
    return false;
  }

  async loadInformation() {
    await this.infoService.getInformation('GENERAL', 'blog-description')
      .subscribe((response: RespInformation[]) => {

        if (response.length > 0) {
          this.pageData.description_0 = response[0].Value;
          this.pageData.description_1 = response[1].Value;
          this.pageData.description_2 = response[2].Value;
          this.pageData.description_3 = response[3].Value;
          this.pageData.description_4 = response[4].Value;
          this.pageData.description_5 = response[5].Value;
          this.pageData.description_6 = response[6].Value;
          this.pageData.description_7 = response[7].Value;
          this.pageData.description_8 = response[8].Value;
          this.pageData.description_9 = response[9].Value;
          this.pageData.description_10 = response[10].Value;
          this.pageData.description_11 = response[11].Value;
          this.pageData.description_11 = response[12].Value;
        }


      })
  }

}
