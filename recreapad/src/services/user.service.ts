import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserModel } from 'src/model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.apiURL;

  userToken:string;
  userName:string;
  userId:string;
  profileImage:string;
  createdAt:Date;
  rememberMe:boolean;
  response;
  //Just for mocking
  public isFakeUserLogged = false;

  constructor(private http: HttpClient) {
    this.readToken();
    this.readOtherData();
  }

    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('expiration');
      localStorage.removeItem('username')
      localStorage.removeItem('id');
      localStorage.removeItem('profileImage');
    }
    logoutremembering() {
      localStorage.removeItem('token');
      localStorage.removeItem('expiration');
      localStorage.removeItem('id');
      localStorage.removeItem('profileImage');
    }

    login(userData: UserModel){
      const authData = {
        login: userData.username,
        password: userData.password
      };

      return this.http.post(
        `${this.url}/login`,
        authData,
      ).pipe(
          map( resp =>{
            this.saveToken(resp['jwt']);
            this.saveOtherData(resp);
            return resp;
          })
      );
    }

    newUser(userData:UserModel){
      const authDataStrapi = {
        lastname: userData.lastname,
        username: userData.username,
        name: userData.myname,
        password: userData.password,
        email: userData.email,
        confirmed: false,
        blocked: true
      };

      return this.http.post(
        `${this.url}/singup`,
        authDataStrapi
      ).pipe(
        map( resp =>{
          return resp;
        })
    );
   }

   private saveToken(idtoken:string){
      this.userToken = idtoken;
      localStorage.setItem('token', idtoken);

      const today = new Date();
      today.setSeconds(3600);

      localStorage.setItem('expiration', today.getTime().toString());
   }

   private saveOtherData(resp:any){
      this.userName = resp['login'];
      localStorage.setItem('username', this.userName);
      this.userId = resp['id'];
      localStorage.setItem('id', this.userId);/*
      if (resp['user'].profilePicture != null){
        this.profileImage = resp['user'].profilePicture.formats.thumbnail.url;
        localStorage.setItem('profileImage', this.profileImage);
      }
      else{
        this.profileImage = undefined;
      }
      this.createdAt = resp['user'].created_at;*/
   }

   private readToken(){
     if (localStorage.getItem('token')){
       this.userToken = localStorage.getItem('token');
     }
     else{
       this.userToken = '';
     }

     return this.userToken;
   }

   private readOtherData(){
    if (localStorage.getItem('username')){
      this.userName = localStorage.getItem('username');
    }
    else{
      this.userName = '';
    }

    if (localStorage.getItem('id')){
      this.userId = localStorage.getItem('id');
    }
    else{
      this.userId = '';
    }

    if (localStorage.getItem('profileImage')){
      this.profileImage = localStorage.getItem('profileImage');
    }
    else{
      this.profileImage = '';
    }

    if (localStorage.getItem('created_at')){
      this.createdAt = new Date(localStorage.getItem('created_at'));
    }
    else{
      this.createdAt = null;
    }
  }

   userIsAuthenticated() : boolean{
      if (environment.mockUserForTesting) return this.isFakeUserLogged;

      if (this.userToken.length < 2){
        return false;
      }

      const expiration = new Date();
      expiration.setTime(Number(localStorage.getItem('expiration')));

      if (expiration > new Date() && localStorage.getItem('token')){
        return true;
      }
      else{
        return false;
      }
   }

   getTokenHeader():HttpHeaders{
    const headerDict = {
      Authorization: 'Bearer ' + this.userToken,
    };

    return new HttpHeaders(headerDict);
   }
   deleteUser(){
    this.readOtherData();
    return this.http.delete(
      `${this.url}/users/${this.userId}`
    ).pipe(
        map( resp =>{
          return resp;
        })
    );
   }
   updateUser(userData:UserModel):any{
    this.readOtherData();
    const authDataStrapi = {
      id: this.userId,
      lastname: userData.lastname,
      username: userData.username,
      name: userData.myname,
      password: userData.password,
      email: userData.email,
      confirmed: false,
      blocked: true
    };
    return this.http.put(
      `${this.url}/users/${this.userId}`,
      authDataStrapi
    ).pipe(
      map( resp =>{
        return resp;
      })
  );
   }
   getUser():any{
    this.readOtherData();
    return this.http.get(
      `${this.url}/users/${this.userId}`
    ).pipe(
        map( resp =>{
          return resp;
        })
    );
   }
  
}
