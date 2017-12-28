import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from './../pages/contact/contact';
import { LifecycleEventsPage } from './../pages/lifecycle-events/lifecycle-events';
import { AboutPage } from './../pages/about/about';

@NgModule({
  declarations: [
    ContactPage,
    MyApp,
    HomePage,
    LifecycleEventsPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],  
  bootstrap: [IonicApp],
  entryComponents: [
    ContactPage,
    MyApp,
    HomePage,
    AboutPage,
    LifecycleEventsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
