import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lifecycle-events',
  templateUrl: 'lifecycle-events.html',
})
export class LifecycleEventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewCanEnter(): Promise<any> {
    //console.log('01 - ionViewCanEnter() called');
    /* retornando false a pagina não será carregada */
    //return true;

    console.log('01 - ionViewCanEnter() called');

    return new Promise((resolve, reject) => {
      console.log('Aguardando 2 segundos...');
      setTimeout(() => {
        let number = Math.round(Math.random() * 100);
        if (number % 2 == 0) {
          resolve();
          console.log(`${number} - Authorized!`);
        } else {
          reject();
          console.log(`${number} - Not Authorized!`);
        }
      }, 2000);
    });
  }

  ionViewDidLoad() {
    console.log('02 - ionViewDidLoad() called');
  }

  ionViewWillEnter() {
    console.log('03 - ionViewCanEnter() called');
  }

  ionViewDidEnter() {
    console.log('04 - ionViewDidEnter() called');
  }

  ionViewCanLeave(): Promise<any> {
    //console.log('05 - ionViewCanLeave() called');
    // retornando false não irá deixar sair da pagina
    //return true;

    console.log('05 - ionViewCanLeave() called');

    return new Promise((resolve, reject) => {
      console.log('Aguardando 2 segundos...');
      setTimeout(() => {
        let number = Math.round(Math.random() * 100);
        if (number % 2 == 0) {
          resolve();
          console.log(`${number} - Authorized!`);
        } else {
          reject();
          console.log(`${number} - Not Authorized!`);
        }
      }, 2000);
    });
  }

  ionViewWillLeave() {
    console.log('06 - ionViewWillLeave() called');
  }

  ionViewDidLeave() {
    console.log('07 - ionViewDidLeave() called');
  }

  ionViewWillUnload() {
    console.log('08 - ionViewWillUnload() called');
  }

  onPop(): void {
    this.navCtrl.pop()
      .then((exitAuthorized: boolean) => {
        if (exitAuthorized) {
          console.log('Page popped!');
        } else {
          console.log('Saida não autorizada!');
        }
      }).catch(error => {
        console.log('Some error occured', error);
      });
  }

}
