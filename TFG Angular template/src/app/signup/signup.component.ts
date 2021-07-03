import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/model/user.model';
import { UserService } from 'src/services/user.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    userData:UserModel;
    constructor(private userService:UserService,
              private router:Router) { }

    ngOnInit() {
        this.userData = new UserModel();
    }
    
    async register(form:NgForm){
      console.log(form); 
      if (form.invalid) {
        this.errorCratedModal("Have you completed the form?","Fill all the fields");
        return;}
      
      this.userService.newUser(this.userData)
      .subscribe(resp => {
        this.userCratedModal();
        console.log(resp);
      }, (err => {
        console.log(err);
        this.errorCratedModal("Error","Shomething went wrong creating the user");
      }));
      await this.delay(1500);
      this.userService.login(this.userData)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl('/userhome');
      }, (err => {
        console.log(err);
        this.errorCratedModal("Error","Something went wrong loggin the user"); 
      }));

    }
    private delay(ms: number)
    {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    userCratedModal(){
      Swal.fire(
        'Welcome!',
        'Account created!',
        'success'
      )
    }
    errorCratedModal(msg1:string,msg2:string){
      Swal.fire(
        msg1,
        msg2,
        'question'
      )
    }
}

