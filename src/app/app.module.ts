

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { AccountPage } from './../pages/account/account';
import { AddGroupPhotoPage } from './../pages/add-group-photo/add-group-photo';
import { CustomerDetailPage } from './../pages/customer-detail/customer-detail';
import { DefaultersPage } from './../pages/defaulters/defaulters';
import { EditCustomerPage } from './../pages/edit-customer/edit-customer';
import { EditGroupPhotoPage } from './../pages/edit-group-photo/edit-group-photo';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MyRegistrationsPage } from './../pages/my-registrations/my-registrations';
import { MyTransfersPage } from './../pages/my-transfers/my-transfers';
import { MyZonePage } from './../pages/my-zone/my-zone';
import { MyZoneCustomersPage } from './../pages/my-zone-customers/my-zone-customers';
import { NewActionPage } from './../pages/new-action/new-action';
import { RegisterPage } from './../pages/register/register';
import { TaxPaymentPage } from './../pages/tax-payment/tax-payment';
import { TransferCreditPage } from './../pages/transfer-credit/transfer-credit';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { SQLite } from '@ionic-native/sqlite';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Network } from '@ionic-native/network';
import { FileTransfer} from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { SMS } from '@ionic-native/sms';

import { GlobalAPI } from '../pages/global';

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    AddGroupPhotoPage,
    CustomerDetailPage,
    DefaultersPage,
    EditCustomerPage,
    EditGroupPhotoPage,
    HomePage,
    ListPage,
    MyRegistrationsPage,
    MyTransfersPage,
    MyZonePage,
    MyZoneCustomersPage,
    NewActionPage,
    RegisterPage,
    TaxPaymentPage,
    TransferCreditPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    AddGroupPhotoPage,
    CustomerDetailPage,
    DefaultersPage,
    EditCustomerPage,
    EditGroupPhotoPage,
    HomePage,
    ListPage,
    MyRegistrationsPage,
    MyTransfersPage,
    MyZonePage,
    MyZoneCustomersPage,
    NewActionPage,
    RegisterPage,
    TaxPaymentPage,
    TransferCreditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Geolocation,SQLite,LocationAccuracy,Network,Camera,FileTransfer,File,SMS,GlobalAPI,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
