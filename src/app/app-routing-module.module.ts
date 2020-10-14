import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {PrincipalBoardComponent} from './components/principal-board/principal-board.component';
import {UserBoardComponent} from './components/principal-board/user-board/user-board.component';




export const routes: Routes = [
  {
    path: '',
    component: PrincipalBoardComponent,
    //children: [
    //  {
    //    path: 'user',
    //    component: UserBoardComponent,
    //  }
    // ]
  },
  {
    path: 'user',
    component: UserBoardComponent,
  }
]


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
