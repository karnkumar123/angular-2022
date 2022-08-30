import { EventEmitter } from "@angular/core";

export class AuthService{
    loginStatusMessage = new EventEmitter<string>();
    isLogin: boolean = false;
    login(): void{
        this.isLogin = true;
        this.loginStatusMessage.emit('login');
    }
    logout(): void{
        this.isLogin = false;
        this.loginStatusMessage.emit('logout');
    }

    isAuthenticate(): Promise<boolean>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(this.isLogin){
                    resolve(true)
                }else{
                    resolve(false);
                }
            }, 1000)
        })
    }
}