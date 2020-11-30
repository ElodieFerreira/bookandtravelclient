import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalBoardComponent} from './components/principal-board/principal-board.component';
import {UserBoardComponent} from './components/principal-board/user-board/user-board.component';
import {UserInscriptionComponent} from './components/user-inscription/user-inscription.component';
import {LoginComponent} from './components/login/login.component';
import {ResultsComponent} from './components/results/results.component';
import {UserPageComponent} from './components/user-card/user-page.component';
import {AjoutBienComponent} from './ajoutsBien/ajout-bien.component';




export const routes: Routes = [
  {
    path: '',
    component: UserBoardComponent,
  },
  {
    path: 'ajoutsBien',
    component: AjoutBienComponent,
  },
  {
    path: 'user',
    component: UserPageComponent,
  },
  {
    path: 'inscription',
    component: UserInscriptionComponent,
  },
  {
    path: 'connexion',
    component: LoginComponent,
  },
  {
    path: 'results',
    component: ResultsComponent,
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
