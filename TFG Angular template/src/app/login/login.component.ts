import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserModel } from 'src/model/user.model';
import { UserService } from 'src/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  rememberMe;

  userData:UserModel;

  constructor(private userService:UserService,
              private router:Router) { }

  ngOnInit() {
    this.userData = new UserModel();
    if (localStorage.getItem('username')){
      this.userData.username = localStorage.getItem('username');
      this.rememberMe = true;
    }else{
      this.rememberMe = false;
    }
  }


  doTemporaryLoginWithoutUser(){
    this.userService.login(this.userData).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/userhome');
    }, (err => {
      console.log(err);
      alert('error');
      if (environment.mockUserForTesting){
        this.userService.isFakeUserLogged = true;
        this.router.navigateByUrl('/userhome');
      }
    }));
  }

  login(form:NgForm){
    console.log(form); 
    if (form.invalid) {
      this.errorCratedModal("Have you introduced your credentials?","Fill all the fields");
      return;}

    
    //FOR TESTING
    if (environment.mockUserForTesting) this.doTemporaryLoginWithoutUser();

    this.userService.login(this.userData)
    .subscribe(resp => {
      console.log(resp);
     
      if (this.rememberMe){
        this.userService.rememberMe = true;
        localStorage.setItem('username', this.userData.username);
      }else{
        this.userService.rememberMe = false;
      }
      this.router.navigateByUrl('/userhome');
    }, (err => {
      console.log(err);
      this.errorCratedModal("Error!","Email or password incorrect"); 
    }));
  }

  errorCratedModal(msg1:string,msg2:string){
    Swal.fire(
      msg1,
      msg2,
      'question'
    )
  }

}
