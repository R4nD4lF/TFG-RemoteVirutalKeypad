import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { UserService } from 'src/services/user.service';
import { TemplateService } from 'src/services/template.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    constructor(private templateService:TemplateService,
                public location: Location,  
                private router: Router,
                private userService:UserService) {
    }

    ngOnInit() {
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
        if (event instanceof NavigationStart) {
           if (event.url != this.lastPoppedUrl)
               this.yScrollStack.push(window.scrollY);
       } else if (event instanceof NavigationEnd) {
           if (event.url == this.lastPoppedUrl) {
               this.lastPoppedUrl = undefined;
               window.scrollTo(0, this.yScrollStack.pop());
           } else
               window.scrollTo(0, 0);
       }
     });
     this.location.subscribe((ev:PopStateEvent) => {
         this.lastPoppedUrl = ev.url;
     });
    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '#/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '#/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }

    isLogged():string{
        var result:string;
        result = String(this.userService.userIsAuthenticated()).trim();
        return result;
    }

    doLogout(){
        this.userService.isFakeUserLogged = false;
        this.router.navigateByUrl('/home');
        if(this.userService.rememberMe == true){
            this.userService.logoutremembering();
        }else{
            this.userService.logout();
        }
    }
    createNewTemplate(){
        this.templateService.templateId=null;
        this.router.navigateByUrl('/editor');
      }
}

