import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateModel } from 'src/model/template.model';
import {UserService} from 'src/services/user.service'
import Swal from 'sweetalert2';

@Component({
    selector: 'app-user-home',
    templateUrl: './user-home.component.html',
    styleUrls: ['./user-home.component.css'],
    standalone: false
})
export class UserHomeComponent implements OnInit {
  @Input() email: string;
  @Input() name: string;
  @Input() lastname: string;
  @Input() username: string;
  @Input() number_templates: number;
  lista:TemplateModel[];
  constructor(private uService: UserService,
              private router:Router) { 
  }
  

  ngOnInit(): void {
    this.uService.getUser()
    .subscribe(resp => {
      console.log(resp);
      this.username = resp['userName']
      this.name = resp['name'];
      this.email = resp['email'];
      this.lastname = resp['lastname'];
      this.lista = resp['templateModelList']
      this.number_templates = this.lista.length;
    },(err => {
      console.log(err);
      alert('Error, user could not be loaded'); 
    }));
  }


  deleteUser(){
    this.uService.deleteUser()
    .subscribe(resp => {
      console.log(resp);
      this.uService.logout();
      this.router.navigateByUrl('/home');
    }, (err => {
      console.log(err);
      alert('Error, user could not be deleted'); 
    }));
  }

  deleteUserModal(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteUser();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}
