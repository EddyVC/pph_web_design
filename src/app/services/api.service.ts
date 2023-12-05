import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  // sendAgent(idAgent:any):  Observable<any>{
  //   const body = {
  //         idAgent
  //       }
  //   const apiUrl = 'https://liveadmin.bridgehost.net/api/Admin/GetAgentHierarchy';

  //   return this.httpClient.post<AgentHierarchy[]>(apiUrl ,body)
  // }

  getServices(): Observable<any> {
    const dataservice = {
      page: null,
      type: 'service',
    };

    const apiUrl = environment.ApiUrl + 'PphOptions/GetOptionsPph';

    return this.httpClient.post<any>(apiUrl, dataservice);
  }

  getCards(): Observable<any> {
    const dataservice = {
      page: null,
      type: 'cards',
    };

    const apiUrl = environment.ApiUrl + 'PphOptions/GetOptionsPph';

    return this.httpClient.post<any>(apiUrl, dataservice);
  }
  getFeatures(): Observable<any> {
    const dataservice = {
      page: null,
      type: 'features',
    };

    const apiUrl = environment.ApiUrl + 'PphOptions/GetOptionsPph';

    return this.httpClient.post<any>(apiUrl, dataservice);
  }

  getPrice(): Observable<any> {
    const dataservice = {
      page: null,
      type: 'price',
    };

    const apiUrl = environment.ApiUrl + 'PphOptions/GetOptionsPph';

    return this.httpClient.post<any>(apiUrl, dataservice);
  }

  getContact(): Observable<any> {
    const dataservice = {
      page: null,
      type: 'contact',
    };

    const apiUrl = environment.ApiUrl + 'PphOptions/GetOptionsPph';

    return this.httpClient.post<any>(apiUrl, dataservice);
  }
}
