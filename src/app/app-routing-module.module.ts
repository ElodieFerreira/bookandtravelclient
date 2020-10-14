import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {PrincipalBoardComponent} from './components/principal-board/principal-board.component';




export const routes: Routes = [
  {
    path: '',
    component: PrincipalBoardComponent,
    // children: [
    //   {
    //     path: 'research',
    //     component: PrincipalBoardComponent
    //   }
    // ]
  },
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
