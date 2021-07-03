import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { TemplateModel } from 'src/model/template.model';
import { UserModel } from 'src/model/user.model';
import { TemplateService } from 'src/services/template.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-keypads',
  templateUrl: './keypads.component.html',
  styleUrls: ['./keypads.component.css']
})
export class KeypadsComponent implements OnInit {
  userData:UserModel;
  username;
  templateId;
  lista:Array<TemplateModel>;
  templateData:TemplateModel;
  constructor(private userService:UserService,
              private templateService:TemplateService,
              private router:Router) { 
              this.lista = new Array<TemplateModel>();
              }

  ngOnInit(): void {
    this.userService.getUser()
    .subscribe(resp => {
      console.log(resp);
      this.username=resp['userName'];
      this.lista = resp['templateModelList'];
    },(err => {
      console.log(err);
      alert('Error, user could not be loaded'); 
    }));
  }
  editKeypad(item:TemplateModel){
    this.templateId = item["templateId"];
    this.templateService.getTemplate(this.templateId)
    .subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl(this.templateId+'/editor');
    }, (err => {
      console.log(err);
      alert('Error, template could not be loaded for edition'); 
    }));
  }
  createNewTemplate(){
    this.router.navigateByUrl('/editor');
  }

  editToken(item:TemplateModel){
    this.templateId = item["templateId"];
    this.templateService.getTemplate(this.templateId)
    .subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl(this.templateId+'/token');
    }, (err => {
      console.log(err);
      alert('Error, template could not be loaded for edition'); 
    }));
  }
}
