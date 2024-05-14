export class RequestPlayerInfo {
    IdSport: string = "";
    IdPlayer: number = 0;
    IdCall: number = 0;
}

export class AuthenticationDto {
    AccountName: string = "";
    Password: string = "";
    Token: string = "";
}

export class PlayerDto {
    IdAgent: number = 0;
    IdBook: number = 0;
    IdCall: number = 0;
    IdPlayer: number = 0;
    Player: string = "";
    Agent: string = "";
}

export class LoginUserDto {
    UserName: string = "";
    Password: string = "";
    IdSite: string = "";
    IpAddress: string = "";
    Domain: string = "";
}
