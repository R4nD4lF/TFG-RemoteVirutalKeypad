import { Component, OnInit, Query } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TemplateModel } from 'src/model/template.model';
import { TemplateService } from 'src/services/template.service';
import Swal from 'sweetalert2';

import * as QRCode from 'qrcode';


@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {
  qrcodeimage;
  token:string;
  tokengenerated:boolean;
  keypadName:string;
  templateData:TemplateModel;
  constructor(private route: ActivatedRoute,
    private templateService:TemplateService,
    private router:Router){
    this.templateData = new TemplateModel();
    this.tokengenerated = false;
   }

  ngOnInit(): void {
    this.templateService.getTemplate(parseInt(this.route.snapshot.paramMap.get("id")))
      .subscribe(resp => {
        console.log(resp);
        this.templateData.name = resp["name"];
        this.templateData.backgroundimage = resp["backgroundimage"];
        this.templateData.image = resp["image"];
        this.templateData.token = resp["token"];
        this.templateData.creationdate = resp["creationdate"];
        this.templateData.button = resp["buttons"];
        this.templateData.text = resp["texts"];
        this.keypadName = resp["name"];
      },(err => {
        console.log(err);
        this.errorLoadModal("Error","Template could not be loaded"); 
      }));
      
      this.templateService.getToken(parseInt(this.route.snapshot.paramMap.get("id")))
      .subscribe(resp => {
        this.templateData.token = resp["token"];
        if(this.templateData.token != null){
          (<HTMLInputElement>document.getElementById("Tokenurl")).value = this.templateData.token;
          this.tokengenerated = true;
          this.qrcodeimage = this.generateQR(this.templateData.token);
        }
      },(err => {
        console.log(err);
        this.errorLoadModal("Error","Token could not be loaded"); 
      }));
  }
  async generateToken(){
    this.templateService.createToken(parseInt(this.route.snapshot.paramMap.get("id")))
      .subscribe(resp => {
        this.tokengenerated = true;
        console.log(resp);
      }, (err => {
        console.log(err);
        this.errorLoadModal("Error", "Template could not be loaded");
      }));
    await this.delay(300);

    this.templateService.getToken(parseInt(this.route.snapshot.paramMap.get("id")))
      .subscribe(async resp => {
        console.log(resp);
        this.templateData.token = resp["token"];
        (<HTMLInputElement>document.getElementById("Tokenurl")).value = this.templateData.token;
        this.qrcodeimage = this.generateQR("localhost:4200/controller/"+this.templateData.token);
      }, (err => {
        console.log(err);
        this.errorLoadModal("Error", "Token could not be loaded");
      }));

  }
  deleteToken(){
    this.templateService.deleteToken(parseInt(this.route.snapshot.paramMap.get("id")))
    .subscribe(resp => {
      (<HTMLInputElement>document.getElementById("Tokenurl")).value = "Token";
      this.tokengenerated = false;
      console.log(resp);
    },(err => {
      console.log(err);
      this.errorLoadModal("Error","Template could not be loaded"); 
    }));
  }
  errorLoadModal(msg1:string,msg2:string){
    Swal.fire(
      msg1,
      msg2,
      'error'
    )
  }

  private delay(ms: number)
    {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
  generateQR(token:string){
    var result;
    QRCode.toDataURL(token, (err, url) =>  { 
      result = url;
    });
    return result;
  }
  try(){
    this.router.navigateByUrl('controller/'+(<HTMLInputElement>document.getElementById("Tokenurl")).value);
  }
}
