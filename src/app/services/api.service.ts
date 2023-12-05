import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environment/environment';
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

  getInformation(data: string): Observable<RespInformation> {
    const body = {
      page: null,
      type: data,
    };

    const apiUrl = environment.ApiUrl + 'PphOptions/GetOptionsPph';

    return this.httpClient.post<RespInformation>(apiUrl, body);
  }

}
