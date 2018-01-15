import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { EditGroupPhotoPage } from '../edit-group-photo/edit-group-photo';


@Component({
  selector: 'page-customer-detail',
  templateUrl: 'customer-detail.html',
})
export class CustomerDetailPage {

  user:any;
  customer_photo:any;
  co_photo:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http
            ) {

              this.co_photo = this.navParams.data.co_workers_photo
  }

  ionViewDidLoad() {
    this.http.get('http://51.140.49.106:8012/tra/app_scripts/user/customer_detail.php?id='+ this.navParams.data.id).map(res => res.json()).subscribe(data => {
     console.log(JSON.stringify(data))
     this.user= data;
     this.customer_photo=data[0].photo;
     //this.co_photo= data[0].co_workers_photo
    })
   }

   edit_group_photo(){
     this.navCtrl.push(EditGroupPhotoPage)
   }

}
