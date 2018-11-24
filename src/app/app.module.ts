import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import {NavigationDetailsPage} from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { SignaturePage } from '../pages/signature/signature';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SiteInfoPage } from '../pages/site-info/site-info';
import {CreateNewLogPage} from '../pages/create-new-log/create-new-log';
import { UserProfilePage} from '../pages/user-profile/user-profile';
import { ChartsModule } from 'ng2-charts';
import {CreateLogPage_2Page} from '../pages/create-log-page-2/create-log-page-2'
@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    NavigationDetailsPage,
    SignaturePage,
    CreateNewLogPage,
    SiteInfoPage,
    UserProfilePage,
    CreateLogPage_2Page
  ],
  imports: [
    BrowserModule,
    SignaturePadModule,
    ChartsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    SignaturePage,
    NavigationDetailsPage,
    CreateNewLogPage,
    SiteInfoPage,
    UserProfilePage,
    CreateLogPage_2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
