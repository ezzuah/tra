import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  credit_balance:any;
  user_id:any;
  first_name:any;
  last_name:any;
  phone_number:any;
  user_group:any;
  username:any;
  region:any;
  region_number:any;
  district:any;
  district_id:any;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public LoadingingController: LoadingController,
              public http: Http,
              public LoadingController: LoadingController,
              public toasCtrl: ToastController) {
                
                this.first_name = localStorage.getItem('first_name');
                this.last_name = localStorage.getItem('last_name');
                this.phone_number = localStorage.getItem('phone_number');
                this.username = localStorage.getItem('username');
                this.region = localStorage.getItem('region');
                this.district = localStorage.getItem('district');
                this.user_id = localStorage.getItem('user_id');
  }

  ionViewDidLoad() {
    this.http.get('http://51.140.49.106:8012/tra/app_scripts/user/account.php?username='+this.username).map(res => res.json()).subscribe(data => {
     console.log(JSON.stringify(data))
     this.credit_balance = data[0].credit_balance;
    })
   }

   download(){
    let loader = this.LoadingController.create({
      content: 'Downloading...'
      });
      loader.present().then(()=>{
        this.http.get('http://51.140.49.106:8012/tra/app_scripts/user/downloads.php?user_id='+this.user_id).map(res=> res.json()).subscribe(data=>{
          const result = data
          .map(item => `('${item.user_id}','${item.address})`)
          .join(',');
          //console.log(JSON.stringify(result));

          loader.dismiss();
        })
      });
   }
}

// .map(item => `('${item.first_name}','${item.last_name}','${item.other_names}','${item.phone_number}','${item.tin}','${item.hawk_area_address}','${item.mode_business}','${item.amount}','${item.primary_item_sale}','${item.region}','${item.district}','${item.user_id}')`)
