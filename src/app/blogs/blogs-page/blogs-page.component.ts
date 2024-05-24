import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { SUBMENUBLOG } from '../../global/header.global';

@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrl: './blogs-page.component.css'
})
export class BlogsPageComponent  {

  titleBlog: string = '';
  isDataExtraBlogs: boolean = false;
  pathBlog: string = '';

  constructor(public location: Location) {}

  ngOnInit(): void {
    const locationPath = this.location.path().replace(/\//g, '');
    const blog =  SUBMENUBLOG.filter(blog => blog.path === locationPath)[0];
    this.pathBlog = blog.path;
    this.titleBlog = blog.name;
    this.isDataExtraBlogs = blog.dataExtra;
    window.scrollTo(0, 0);
  }

  isLongTitle(){
    if (this.titleBlog.length > 66 && window.innerWidth < 545) {
      return true;
    }
    return false;
  }

}
