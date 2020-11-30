import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { CardComponent } from './components/card/card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import { PrincipalBoardComponent } from './components/principal-board/principal-board.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerResearchComponent } from './components/banner/banner-research/banner-research.component';
import {AppRoutingModule} from './app-routing-module.module';
import { UserBoardComponent } from './components/principal-board/user-board/user-board.component';
import {SearchComponent} from './components/search/search.component';
import {IconsModule, MDBBootstrapModule, NavbarModule} from 'angular-bootstrap-md';
import {UserInscriptionComponent} from './components/user-inscription/user-inscription.component';
import {LoginComponent} from './components/login/login.component';
import {AccountStore} from './store/account/account-store.service';
import {UserApiService} from './services/user-api.service';
import {ResultsComponent} from './components/results/results.component';
import {ResultsStoreService} from './store/results/results-store.service';
import {PictureApiService} from './services/picture/picture-api.service';
import {UserPageComponent} from './components/user-card/user-page.component';
import {TokenInterceptorService} from './services/http-interceptor/token-interceptor.service';
import {AjoutBienComponent} from './ajoutsBien/ajout-bien.component';
import {ResultsUserComponent} from './components/ResultsUser/results-user.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CardComponent,
    PrincipalBoardComponent,
    FooterComponent,
    BannerResearchComponent,
    UserBoardComponent,
    SearchComponent,
    UserInscriptionComponent,
    LoginComponent,
    UserPageComponent,
    ResultsComponent,
    AjoutBienComponent,
    ResultsUserComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NavbarModule,
    IconsModule,
  ],
  providers: [
    AccountStore,
    UserApiService,
    ResultsStoreService,
    PictureApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
