import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-edit-customer',
  templateUrl: 'edit-customer.html',
})
export class EditCustomerPage {

  user:any;

  first_name:any;
  last_name:any;
  other_names:any;
  gender:any;
  region:any; 
  district:any;
  mode_biz:any;
  id_type:any;
  id_number:any;
  tin:any;
  primary_sale:any;
  customer_photo:any;
  loc_address:any;
  user_id:any;

  region_list:any;
  id_list:any;
  districts_list:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http) {
  }

  ionViewDidLoad() {
    this.http.get('http://51.140.49.106:8012/tra/app_scripts/user/customer_detail.php?id='+ this.navParams.data.id).map(res => res.json()).subscribe(data => {
     console.log(JSON.stringify(data))
     this.first_name = data[0].first_name;
     this.last_name = data[0].lastname;
     this.other_names = data[0].other_names;
     this.gender = data[0].gender;
     this.region = data[0].region;
     this.district = data[0].district;
     this.mode_biz = data[0].mode_business;
     this.id_type = data[0].id_type;
     this.id_number = data[0].id_number;
     this.tin = data[0].tin;
     this.primary_sale = data[0].primary_item_sale;
     this.customer_photo = data[0].photo;
     this.user_id = data[0].id;

     this.http.get('http://51.140.49.106:8012/tra/app_scripts/get_regis/regions.php').map(res => res.json()).subscribe(data =>{
      //console.log(JSON.stringify(data));
      this.region_list= data;

      this.http.get('http://51.140.49.106:8012/tra/app_scripts/get_regis/id_types.php').map(res => res.json()).subscribe(data =>{
        console.log(JSON.stringify(data));
        this.id_list= data;

        this.http.post("http://51.140.49.106:8012/tra/app_scripts/get_regis/districts.php", {'region_id': this.region}).map(res => res.json()) .subscribe(data => {
          console.log(JSON.stringify(data));
          this.districts_list=(data);
        })
        
        })
      })
    })
   }

   get_districts(){
     alert(this.region)
    this.http.post("http://51.140.49.106:8012/tra/app_scripts/get_regis/districts.php", {'region_id': '3'}).map(res => res.json()) .subscribe(data => {
      console.log(JSON.stringify(data));
      this.districts_list.push(data);
    });

}

}
