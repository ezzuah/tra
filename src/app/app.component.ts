import { MyRegistrationsPage } from './../pages/my-registrations/my-registrations';

import { TaxPaymentPage } from './../pages/tax-payment/tax-payment';
import { MyTransfersPage } from './../pages/my-transfers/my-transfers';
import { DefaultersPage } from './../pages/defaulters/defaulters';
import { RegisterPage } from './../pages/register/register';
import { AccountPage } from './../pages/account/account';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Network } from '@ionic-native/network';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { GlobalAPI} from '../pages/global'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public alertCtrl: AlertController,
              public sqlite: SQLite,
              public global: GlobalAPI,
              private Network: Network
              ) {

              this.global.menu_status;
              this.global.group_id;
    this.initializeApp();

    // used for an example of ngFor and navigation

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.sqlite.create({
        name: 'tra.db',
        location: 'default'
})
.then((db: SQLiteObject) => {
db.executeSql('CREATE TABLE IF NOT EXISTS customers(id INTEGER PRIMARY KEY AUTOINCREMENT,first_name,last_name,other_names,phone_number,tin,hawk_area_address,mode_business,amount,primary_item_sale,district,region,user_id)', {})
.then(() => console.log(' customers table Executed SQL'))
.catch(e => console.log(e));

db.executeSql('CREATE TABLE IF NOT EXISTS routes(id INTEGER PRIMARY KEY AUTOINCREMENT,hawk_area_address)', {})
.then(() => console.log(' customers table Executed SQL'))
.catch(e => console.log(e));
})

let disconnectSubscription = this.Network.onDisconnect().subscribe(() => {
  let alert = this.alertCtrl.create({
    title: 'Alert!',
    subTitle: 'Your Device is currently offline',
    buttons: ['Ok']
  });
  alert.present();
});
  let connectSub = this.Network.onConnect().subscribe(() => {
  console.log('you are online');
});
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goto_my_account(){
    this.nav.push(AccountPage)
  }

  my_registrations(){
    this.nav.push(MyRegistrationsPage)
  }

  goto_new_customer(){
    this.nav.push(RegisterPage)
  }

  goto_defaulters(){
    this.nav.push(DefaultersPage)
  }

  goto_mytransfers(){
    this.nav.push(MyTransfersPage)
  }

  goto_new_payment(){
    this.nav.push(TaxPaymentPage)
  }

  goto_logout(){
    
      let confirm = this.alertCtrl.create({
        title: 'Logout',
        message: 'Are you sure you want to logout?',
        buttons: [
          {
            text: 'No',
            handler: () => {
              //console.log('Disagree clicked');
            }
          },
          {
            text: 'Yes',
            handler: () => {
              localStorage.removeItem('username');
              localStorage.removeItem('credit_balance');
              localStorage.removeItem('group_id');
              localStorage.removeItem('user_id');
              this.nav.push(HomePage);
              this.nav.setRoot(HomePage);
            }
          }
        ]
      });
      confirm.present();
  }

  goto_about_tra(){
    
  }
}
