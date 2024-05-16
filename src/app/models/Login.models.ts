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

export class SignUpDto {
    AgentName: string = "";
    PasswordSignUp: string = "";
    EmailSignUp: string = "";
    PhoneSignUp: string = "";
    AnotherRequest: string = "";
    Parlays: string = "";
    Domain: string = "";
    Teasers: string = "";
    AccountsNedded: string = "";
    CarryOver: string = "";
    Support: string = "";
    PlayerWebSite: string = "";
    Important: string = "";
    IP: string = "";
}

export interface ResponseSignupDto {
    Code: number;
    Message: string;
    Pass: string;
    PlayerId: number;
    User: string;
}
