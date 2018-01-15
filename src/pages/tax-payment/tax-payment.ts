import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SMS } from '@ionic-native/sms';


@Component({
  selector: 'page-tax-payment',
  templateUrl: 'tax-payment.html',
})
export class TaxPaymentPage {
default_date:any;
date_paid:any;
duration_date:any;
tin:any;
duration_number:any;
amount:any;
next_payment_due:any;
field_agent_id:any;
ref_id:any;

  public payment_form : FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public LoadingController: LoadingController,
              public alertCtrl: AlertController,
              public http: Http
            ) {

                this.payment_form = this.formBuilder.group({
                  tin: ['', Validators.required],
                  duration_number: ['', Validators.required],
               
                });

                this.field_agent_id = localStorage.getItem('user_id');
                this.date_paid=new Date().toISOString().slice(0,10);
                this.ref_id=new Date().getTime()+''+this.field_agent_id
                
        
  }

 
  new_payment(){
    this.default_date=new Date();
    this.default_date.setMonth(this.default_date.getMonth()+parseInt(this.duration_number));
    this.duration_date=this.default_date.toISOString().slice(0,10);
    

    let loader = this.LoadingController.create({
      content: 'Please Wait'
      });
      loader.present().then(()=>{
      this.http.post('http://51.140.49.106:8012/tra/app_scripts/payment/check_tin.php',{'tin':this.tin}).map(res=>res.json()).subscribe(data=>{
        console.log(JSON.stringify(data));

        if(data.message=='tin was not found'){
          loader.dismiss()
          let alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: 'Tin number was not found on server.',
            buttons: ['Ok']
          });
          alert.present();
        }else{
          this.amount=data[0].amount * this.duration_number
        this.http.post("http://51.140.49.106:8012/tra/app_scripts/payment/new_payment.php", { 
          'tin': this.tin, 
          'duration': this.duration_number,
          'duration_date': this.duration_date,          
          'amount':this.amount,
          'field_agent_id':this.field_agent_id, 
          'ref_id':this.ref_id,
          'longitude':'8877',
          'latitude':'876667',
          'date_payment':this.date_paid}).subscribe(data => {
            console.log(JSON.stringify(data));
  
            loader.dismiss();
          })
           }
      },err=>{
        loader.dismiss();
        //this.sms.send('416123456', 'Hello world!');
        let alert = this.alertCtrl.create({
          title: 'Error!',
          subTitle: 'Failed to contact server.',
          buttons: ['OK']
        });
        alert.present();
      })

    })

  }

}
