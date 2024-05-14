import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { RespInformation } from '../models/Info.models';
import { AuthenticationDto, LoginUserDto, PlayerDto } from '../models/Login.models';
import { catchError } from 'rxjs/operators';
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

  Login(t: LoginUserDto, f: AuthenticationDto): Observable<PlayerDto> {
    const a: PlayerDto = new PlayerDto();
    t.IdSite = '1';
    const encode = btoa(f.AccountName + ':' + f.Password);
    const headers = new HttpHeaders({
        Authorization: 'Token ' + encode,
        'Content-Type': 'application/json'
    });
    const options = { headers };
    const apiUrl = 'https://fxapi.bridgehost.net/api/Player/PlayerLogin';
    return this.httpClient.post<PlayerDto>(apiUrl, t, options)

} // end Login

}
