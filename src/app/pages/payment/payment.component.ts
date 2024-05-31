import { Component, OnInit } from '@angular/core';

// services
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private loaderService: LoaderService) {
    this.loaderService.showLoader(true);
  }

  ngOnInit() {
    this.loaderService.showLoader(false);
  }

}
