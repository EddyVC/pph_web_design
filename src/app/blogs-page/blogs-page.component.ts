import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrl: './blogs-page.component.css'
})
export class BlogsPageComponent implements OnInit {

  title: string = '';

  constructor(

    public location: Location,
    private activatedRoute: ActivatedRoute
  ) {
  }
  readonly BLOGS = [
    { name: 'How to Become a Bookie', path: 'how-to-become-a-bookie' },
    { name: 'How to Revolutionize Your Sportsbook Book Making Business', path: 'how-to-revolutionize-your-sportsbook-book-making-business' },
    { name: 'How to stay ahead of the game in bookmaking', path: 'how-to-stay-ahead-of-the-game-in-bookmaking' },
    { name: 'Pay Per Head', path: 'pay-per-head' },
    { name: 'Pay Per Head Sportsbook Services for Local Bookies', path: 'pay-per-head-sportsbook-services-for-local-bookies' },
    { name: 'Take your bookmaking services at a slow but steady pace', path: 'take-your-bookmaking-services-at-a-slow-but-steady-pace' },
    { name: 'Sportsbook', path: 'sportsbook' },
    { name: 'Real Reason Why The Best Pay Per Head gives you and your customers an exceptional edge in online games wagering!', path: 'real-reason-why-the-best-pay-per-head-gives-you-and-your-customers-an-exceptional-edge-in-online-games-wagering' },
    { name: 'Reason Why The Best Pay Per Head gives you and your customers an exceptional edge in online games wagering!', path: 'reason-why-the-best-pay-per-head-gives-you-and-your-customers-an-exceptional-edge-in-online-games-wagering' },
    { name: 'Why The Best Pay Per Head gives you and your customers a special edge in online games book wagering', path: 'why-the-best-pay-per-head-gives-you-and-your-customers-a-special-edge-in-online-games-book-wagering' },
    { name: 'Why Your Online Bookie Business Needs Pay Per Head', path: 'why-your-online-bookie-business-needs-pay-per-head' },
    { name: 'Pay Per Head Knowledge Base', path: 'pay-per-head-knowledge-base' },
    { name: 'The Reason Why Are The Best Pay Per Head Software', path: 'the-reason-why-are-the-best-pay-per-head-software' },
  ]
  ngOnInit(): void {
    const locationPath = this.location.path().replace(/\//g, '');

    this.BLOGS.forEach( element => {
      if(element.path == locationPath)
      {
        this.title = element.name
      }
    })

  }
}
