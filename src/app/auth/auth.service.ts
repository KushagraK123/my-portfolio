import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "./user.model";


@Injectable({ providedIn: "root" })
export class AuthService {

    constructor(private httpClient: HttpClient) {
    }
    
    //emits data
    private loginRequestUpdated = new Subject<User>();

    public getJwtToken() {
        return localStorage.getItem("token");
    }
    public getUserName() {
      return localStorage.getItem("name");
    }

    //
    public getLoginUpdateListener() {
        return this.loginRequestUpdated.asObservable();
    }

 



    private loginData: User = {id:"", userName: "", jwt: "", name:""};


      login(userName: string, password: string) {
          this.httpClient.post< {message: string, user: User }>("http://localhost:3000/api/users/login", {userName: userName, password})
          .pipe(
            map((result)=> {
                return result.user;
            })
           )
            .subscribe(
              (responseData)=> {
                  console.log("Jwt is " + responseData.jwt);
                  this.loginData.id = responseData.id;
                  this.loginData.jwt = responseData.jwt;
                  this.loginData.userName = responseData.userName;
                  this.loginData.name = responseData.name;
                  this.loginRequestUpdated.next(responseData);
                  this.saveAuthData(responseData);
              }
            );
      }

      saveAuthData(userData: User) {
          localStorage.setItem("token", userData.jwt);
          localStorage.setItem("userId", userData.id);
          console.log("name is saving " + userData.name);
          localStorage.setItem("name", userData.name);
      }
      clearAuthData() {
        localStorage.removeItem("token");
      }
}