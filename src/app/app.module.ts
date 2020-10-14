import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { CardComponent } from './components/card/card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import { PrincipalBoardComponent } from './components/principal-board/principal-board.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerResearchComponent } from './components/banner/banner-research/banner-research.component';
import {AppRoutingModule} from './app-routing-module.module';
import {AotCompiler} from '@angular/compiler';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CardComponent,
    PrincipalBoardComponent,
    FooterComponent,
    BannerResearchComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
