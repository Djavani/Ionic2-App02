import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // forma 1: decora @ViewChield, cria um tipo Nav e importa ViewChild e Nav
  //@ViewChild(Nav) nav: Nav;

  // forma 2: Decora "ViewChield e usa a variavel local 'myNav' definida no elemento HTML app.html
  //@ViewChild('myNav') nav: Nav;

  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      // no fim do carregamento da pagina chama a navegação para a proxima pagina escolhida por push
     // this.nav.push(ContactPage)
    });
  }
}

