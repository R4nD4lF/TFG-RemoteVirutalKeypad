import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemplateModel } from 'src/model/template.model';
import { TemplateService } from 'src/services/template.service';
import interact from 'interactjs';
import Swal from 'sweetalert2';
import { ElementModel } from 'src/model/element.model';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

var stompClient= null;

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})

export class ControllerComponent implements OnInit {
  token:string;
  templateData:TemplateModel;
  listaelements:Array<ElementModel>;
  constructor(private route: ActivatedRoute,
    private templateService:TemplateService) {
      this.templateData = new TemplateModel();
      this.listaelements = new Array<ElementModel>();
     }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get("token");
    this.templateService.getAllTemplates(this.token)
      .subscribe(resp => {
        this.templateData.name = resp[0]["name"];
        this.templateData.backgroundimage = resp[0]["backgroundimage"];
        this.templateData.image = resp[0]["image"];
        this.templateData.token = resp[0]["token"];
        this.templateData.creationdate = resp[0]["creationdate"];
        this.templateData.button = resp[0]["buttons"];
        this.templateData.text = resp[0]["texts"];
        this.listaelements = this.templateData.button.concat(this.templateData.text);
        
      },(err => {
        console.log(err);
        this.errorLoadModal("Error","Template could not be loaded"); 
      }));

      interact('.dropzone').unset();
      interact('.drag-drop').unset();
      
      connect();

      function connect() { 
        var socket = new SockJS("http://161.22.45.138:8081/notifications");
        stompClient = Stomp.over(socket);
         var header={
            AccessControlAllowOrigin : "*"
        };
        stompClient.connect(header, function (frame) {
            console.log('Connected: ' + frame);
            
        });
      }
     
  }

  
  errorLoadModal(msg1:string,msg2:string){
    Swal.fire(
      msg1,
      msg2,
      'error'
    ) 
  }
  gettipo(indice){
    return this.listaelements[indice].content;
  }
  
  buttonclicked(item:ElementModel,event){
    sendMessage(this.token,item.commandKey);
  }
  
} 

function sendMessage(token:string, command:String) {
  console.log("sending message");
  stompClient.send("/queue/"+token, {}, command);
}