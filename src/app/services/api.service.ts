import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { environment } from '../../environments/environment';
import { RespInformation } from '../models/Info.models';
import { AuthenticationDto, LoginUserDto, PlayerDto, ResponseSignupDto, SignUpDto } from '../models/Login.models';
import { LoaderComponent } from '../loader/loader.component';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private httpClient: HttpClient, private loaderService: LoaderService) { }

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

    const apiUrl = environment.ApiUrl + 'Player/PlayerLogin';

    return this.httpClient.post<PlayerDto>(apiUrl, t, options)
  }

  SignUp(agentInfo: SignUpDto): Observable<ResponseSignupDto> {
    const apiUrl = 'https://apiofficetools.bridgehost.net/api/AgentOptions/CreateSignUpAgentVerification';
    return this.httpClient.post<ResponseSignupDto>(apiUrl, agentInfo);
  }


}
