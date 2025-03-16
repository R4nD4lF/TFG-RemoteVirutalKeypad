import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserService } from 'src/services/user.service';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { KeypadsComponent } from './keypads/keypads.component';
import { EditorComponent } from './editor/editor.component';
import { UserformComponent } from './userform/userform.component';
import { TemplateService } from 'src/services/template.service';
import { InterComponent } from './inter/inter.component';
import { TokensComponent } from './tokens/tokens.component';
import { ControllerComponent } from './controller/controller.component';



@NgModule({ declarations: [
        AppComponent,
        SignupComponent,
        LandingComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        UserHomeComponent,
        TeamComponent,
        ContactComponent,
        TutorialComponent,
        KeypadsComponent,
        EditorComponent,
        UserformComponent,
        InterComponent,
        TokensComponent,
        ControllerComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HomeModule], providers: [UserService, TemplateService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
