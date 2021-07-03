import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AuthGuard } from 'src/guards/auth.guard';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { KeypadsComponent } from './keypads/keypads.component';
import { EditorComponent } from './editor/editor.component';
import { UserformComponent } from './userform/userform.component';
import { TokensComponent } from './tokens/tokens.component';
import { ControllerComponent } from './controller/controller.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'team',          component: TeamComponent },
    { path: 'contact',          component: ContactComponent },
    { path: 'tutorial',          component: TutorialComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'userhome', component: UserHomeComponent, canActivate: [AuthGuard]},
    { path: 'keypads', component: KeypadsComponent, canActivate: [AuthGuard]},
    { path: 'updateform', component: UserformComponent, canActivate: [AuthGuard]},
    { path: ':id/editor', component: EditorComponent, canActivate: [AuthGuard]},
    { path: ':id/token', component: TokensComponent, canActivate: [AuthGuard]},
    { path: 'editor', component: EditorComponent, canActivate: [AuthGuard]},
    { path: 'controller/:token', component: ControllerComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
