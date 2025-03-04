import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { TemplateModel } from 'src/model/template.model';
import { UserModel } from 'src/model/user.model';
import { TemplateService } from 'src/services/template.service';
import { UserService } from 'src/services/user.service';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css'],
    standalone: false
})
export class EditorComponent implements OnInit {
  userData:UserModel;
  username;
  lista;
  response;
  templatename:string;
  templateData:TemplateModel;
  constructor(
    private userService:UserService,
    private templateService:TemplateService,
    private route: ActivatedRoute) { }

    private destroy$ = new Subject<void>();
    
  ngOnInit(): void {
    this.userData = new UserModel();
    this.response = this.userService.getUser();
    if (localStorage.getItem('username')){
      this.username = localStorage.getItem('username');
    }
    this.userData.template = this.response.templateModelList;
    if(parseInt(this.route.snapshot.paramMap.get("id"))){
      this.templateService.getTemplate(parseInt(this.route.snapshot.paramMap.get("id")))
      .pipe(takeUntil(this.destroy$))
      .subscribe(resp => {
        console.log(resp);
        (<HTMLInputElement>document.getElementById("Name")).value = resp['name'];
      },(err => {
        console.log(err);
        this.errorLoadModal("Error","Template could not be loaded"); 
      }));
      
    }
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  errorLoadModal(msg1:string,msg2:string){
    Swal.fire(
      msg1,
      msg2,
      'error'
    )
  }
}
