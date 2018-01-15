import { MyRegistrationsPage } from './../my-registrations/my-registrations';
import { AddGroupPhotoPage } from './../add-group-photo/add-group-photo';
import { AccountPage } from './../account/account';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { GlobalAPI} from '../../pages/global';
import { TaxPaymentPage } from '../tax-payment/tax-payment';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username :any;
  password:any
  check_username:any

  public menu_status: boolean = false;
  public login_form : FormGroup;

  constructor(public navCtrl: NavController,
              public LoadingController: LoadingController,
              public alertCtrl: AlertController,
              public http: Http,
              public formBuilder: FormBuilder,
              public global: GlobalAPI
              ) {

                this.login_form = this.formBuilder.group({
                  username: ['', Validators.required],
                  password: ['', Validators.required],
                });
                this.check_username=localStorage.getItem('username');
                this.menu_status=false;
                ;

      }
  ionViewDidLoad(){
   //this.navCtrl.push(AddGroupPhotoPage)

if(this.check_username!=undefined){
  this.global.menu_status=true;
  this.global.group_id = localStorage.getItem('group_id')
  this.navCtrl.push(AccountPage);
  this.navCtrl.setRoot(AccountPage);
}

 }

login(){
  let loader = this.LoadingController.create({
    content: 'Signing In...'
    });
    loader.present().then(()=>{
      this.http.post("http://51.140.49.106:8012/tra/app_scripts/login.php", 
      {'username': this.username, 
      'password': this.password}).map(res => res.json()).subscribe(data => {
          console.log(JSON.stringify(data));
          loader.dismiss();
          if(data.message!="Incorrect Username or Password"){
            localStorage.setItem('user_id',data[0].id);
            localStorage.setItem('first_name',data[0].first_name);
            localStorage.setItem('last_name',data[0].last_name);
            localStorage.setItem('username',data[0].username);
            localStorage.setItem('phone_number',data[0].phone_number);
            localStorage.setItem('group_id',data[0].user_group_id);
            localStorage.setItem('credit_balance',data[0].credit_balance);
            localStorage.setItem('region_id',data[0].region_id);
            localStorage.setItem('district_id',data[0].district_id);
            localStorage.setItem('district',data[0].district);
            localStorage.setItem('region',data[0].region);
            this.global.menu_status= true;
            this.global.group_id = data[0].user_group_id;
            this.navCtrl.push(AccountPage);
            this.navCtrl.setRoot(AccountPage);

          }else{
            if(data.message=="Incorrect Username or Password"){
              let alert = this.alertCtrl.create({
                title: 'Error!',
                subTitle: 'Wrong Username or Password',
                buttons: ['Try Again']
              });
              alert.present();
            }
          }
              },err=>{
                loader.dismiss();
                let alert = this.alertCtrl.create({
                  title: 'Error!',
                  subTitle: 'Failed to contact server.',
                  buttons: ['OK']
                });
                alert.present();
          })
   
    });
}

}
