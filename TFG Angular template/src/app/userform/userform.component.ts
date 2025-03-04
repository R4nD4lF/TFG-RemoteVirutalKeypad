import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/model/user.model';
import { UserService } from 'src/services/user.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-userform',
    templateUrl: './userform.component.html',
    styleUrls: ['./userform.component.css'],
    standalone: false
})
export class UserformComponent implements OnInit {
  test : Date = new Date();
    focus;
    focus1;
    focus2;
    userData:UserModel;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userData = new UserModel();
  }
  doUpdate(form:NgForm){
    console.log(form); 
      if (form.invalid) {
        this.errorUpdatedModal("Have you completed the form?","Fill all the fields");
        return;}
        this.saveUserModel();
  }
  saveUserModel(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        this.userService.updateUser(this.userData)
        .subscribe(resp => {
          console.log(resp);
          localStorage.setItem('username', this.userData.username);
          this.router.navigateByUrl('/userhome');
        }, (err => {
          console.log(err);
          this.errorUpdatedModal("ERROR","User could not be updated");
        }));
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  errorUpdatedModal(msg1:string,msg2:string){
    Swal.fire(
      msg1,
      msg2,
      'question'
    )
  }
}
