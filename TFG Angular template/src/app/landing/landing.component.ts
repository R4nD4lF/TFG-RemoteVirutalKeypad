import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateService } from 'src/services/template.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    standalone: false
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor(private templateService:TemplateService,
              private router:Router) { }

  ngOnInit() {}

  createNewTemplate(){
    this.templateService.templateId=null;
    this.router.navigateByUrl('/editor');
  }
}
