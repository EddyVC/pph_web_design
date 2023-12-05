import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  email = 'cs@redfigures.ag';

  serviceList: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadDataAll();
  }

  async loadDataAll(): Promise<any> {
    this.serviceList = await this.apiService.getContact().toPromise();

    console.log(this.serviceList);
  }
}
