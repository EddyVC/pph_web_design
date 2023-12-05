import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

    slides = [
    {
      id: '1',
      icon: 'fas fa-basketball',
      title: 'Knowledgeable Staff',
      content: 'At payperhead.net our customer service is handled by knowledgeable staff who have taken action before and know.'
    },
    {
      id: '2',
      icon: 'fas fa-basketball',
      title: 'PayPerHead Bookie Software',
      content: 'Our software is easy to use, customizable (agent & player), and is the same used by big firms. We have all the tools and work with the best software & feeds provider.'
    },
    {
      id: '3',
      icon: 'fas fa-basketball',
      title: 'Live Betting Offering',
      content: 'Live betting around the clock for all major and no major sports. We offer 2 different live betting solutions.'
    },
    {
      id: '4',
      icon: 'fas fa-basketball',
      title: 'Sharp Monitoring',
      content: 'As a pay per head agent, you need a sportsbook solution that will give you the knowledge and warning signs. We offer lines manager sharp check, free live steams & injuries reports, bet email notifications, bet tickers, max money lines and tight casino profiles.'
    },
    {
      id: '5',
      icon: 'fas fa-basketball',
      title: 'Lines and Change',
      content: 'Choose, grab and offer the SAME lines from your favorite book (limited list). Or let our specialized lines team monitored/move your lines 24/7 with our master line profile. Your choice!'
    },
    {
      id: '6',
      icon: 'fas fa-basketball',
      title: 'Multiple Casinos',
      content: 'Our $5 per head package include unlimited action in both casinos: Digital & Live Casino. Every hand is recorded and accessible for the agent to review and monitored these great features.'
    },
    {
      id: '7',
      icon: 'fas fa-basketball',
      title: 'Lines Control',
      content: 'As an agent, you control your lines from the agent master account. You can move/move & follow or hide any line, league or entire sport. If you call our call center, we can also move your lines instantly! Just let us know what you need!'
    },
    {
      id: '8',
      icon: 'fas fa-basketball',
      title: 'More Payment Methods',
      content: 'Our preferred method is Bitcoin but if that is not your choice then we can offer, Person to Person Transfers, Visa or MasterCard or Checks. For bigger and older clients, we can offer specialized solutions.'
    },
    {
      id: '9',
      icon: 'fas fa-basketball',
      title: 'Agent Private Live Chat',
      content: 'For our agents, we have included a private and accessible live chat to contact us internally from their agent accounts to handle any request need. Off course you can also call us anytime or email us'
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

}
