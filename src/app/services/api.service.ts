import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { RespInformation } from '../models/Info.models';

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

  getInformation(page: string, type: string): Observable<RespInformation> {
    const body = {
      page: page,
      type: type,
    };

    const apiUrl = environment.ApiUrl + 'PphOptions/getPphOptions';

    return this.httpClient.post<RespInformation>(apiUrl, body);
  }

  getPphDesign(page: string, type: string): Observable<RespInformation> {
    const body = {
      page: page,
      type: type,
    };

    const apiUrl = environment.ApiUrl + 'PphOptions/getPphDesign';

    return this.httpClient.post<RespInformation>(apiUrl, body);
  }

}
