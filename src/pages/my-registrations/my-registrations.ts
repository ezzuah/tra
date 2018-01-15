import { CustomerDetailPage } from './../customer-detail/customer-detail';
import { EditCustomerPage } from './../edit-customer/edit-customer';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Component({
  selector: 'page-my-registrations',
  templateUrl: 'my-registrations.html',
})
export class MyRegistrationsPage {

user_id:any;
registrations:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http) {

                this.user_id = localStorage.getItem("user_id");
     

  }

  ionViewDidLoad() {
   this.http.get('http://51.140.49.106:8012/tra/app_scripts/user/my_registrations.php?field_agent_id='+ this.user_id).map(res => res.json()).subscribe(data => {
    console.log(JSON.stringify(data))
    this.registrations= data;
   })
  }

  edit_user($event,item){
    this.navCtrl.push(EditCustomerPage,item)
  }

  view_user($event, item){
    this.navCtrl.push(CustomerDetailPage, item)

  }

}
