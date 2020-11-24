import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalBoardComponent} from './components/principal-board/principal-board.component';
import {UserBoardComponent} from './components/principal-board/user-board/user-board.component';
import {UserInscriptionComponent} from './components/user-inscription/user-inscription.component';
import {LoginComponent} from './components/login/login.component';




export const routes: Routes = [
  {
    path: '',
    component: PrincipalBoardComponent,
  },
  {
    path: 'user',
    component: UserBoardComponent,
  },
  {
    path: 'inscription',
    component: UserInscriptionComponent,
  },
  {
    path: 'connexion',
    component: LoginComponent,
  }
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
