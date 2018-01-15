import { AddGroupPhotoPage } from './../add-group-photo/add-group-photo';
import { Component } from '@angular/core';
import { Platform, NavController, LoadingController, AlertController, ToastController, MenuController, ViewController} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Camera} from '@ionic-native/camera';
import { FileTransfer, FileTransferObject} from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { SMS } from '@ionic-native/sms';



@Component({
  selector: 'page-add-farmer',
  templateUrl: 'register.html',
})
export class RegisterPage {

  
region_list:any;
districts_list:any;
id_list:any;

lat:any
lng:any;
photos : any;


first_name:any;
last_name:any;
other_names:any;
phone_number:any;
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
date_register:any;
ref_id:any;


public regis_form : FormGroup;


    constructor(
        public navCtrl: NavController, 
        public http: Http, 
        public geolocation: Geolocation,
        public LoadingController:LoadingController,
        public platform: Platform,
        public alertCtrl: AlertController,
        public network: Network,
        public locationAccuracy: LocationAccuracy,
        public camera: Camera,
        public toast: ToastController,
        public Transfer: FileTransfer,
        public file: File,
        public formBuilder: FormBuilder,
        public toastcontroller: ToastController,
        public menuCtrl: MenuController,
        public sms: SMS,
        public viewCtrl: ViewController
        
      ) 
      
            {
        
            this.regis_form = this.formBuilder.group({
              first_name: ['', Validators.required],
              last_name: ['', Validators.required],
              other_names: ['', Validators.required],
              phone_number: ['', Validators.required],
              gender: ['', Validators.required],
              region: ['', Validators.required],
              district: ['', Validators.required],
              mode_biz: ['', Validators.required],
              id_type: ['', Validators.required],
              id_number: ['', Validators.required],
              tin: ['', Validators.required],
              primary_sale: ['', Validators.required],
           
            });

            this.user_id = localStorage.getItem("user_id");
            this.date_register = new Date().toISOString().slice(0,10);
            this.ref_id=new Date().getTime()+''+this.user_id
          
            
      }
      // ionViewWillEnter() 

    ionViewDidLoad(){
    localStorage.removeItem('user_location');
    
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    this.tin=text;

      this.http.get('http://51.140.49.106:8012/tra/app_scripts/get_regis/regions.php').map(res => res.json()).subscribe(data =>{
        //console.log(JSON.stringify(data));
        this.region_list= data;

        this.http.get('http://51.140.49.106:8012/tra/app_scripts/get_regis/id_types.php').map(res => res.json()).subscribe(data =>{
          console.log(JSON.stringify(data));
          this.id_list= data;
          })
    })

    
      // this.locationAccuracy.canRequest().then((canRequest: boolean) => {
        
      //     if(canRequest) {
      //       // the accuracy option will be ignored by iOS
      //       this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      //         () => console.log('Request successful'),
      //         error => console.log('Error requesting location permissions', error)
      //       );
      //     }
        this.geolocation.getCurrentPosition({
        enableHighAccuracy:true
        }).then((resp) => {
          console.log(resp.coords.latitude)
          console.log(resp.coords.longitude)
          this.lng = resp.coords.longitude;
          this.lat = resp.coords.latitude;


      var geocoder;
      geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(this.lat, this.lng);

          geocoder.geocode(
            {'latLng': latlng}, 
            function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                        this.address= results[0].formatted_address ;
                        //var value=add.split(",");
                        console.log("city name is: " + this.address);
                        //this.storage.set('user_location', this.address);
                        localStorage.setItem('user_location',this.address)
                        //alert(this.address)
                        }
                        else  {
                            //alert("address not found");
                        }
                }
                 else {
                    //alert("Geocoder failed due to: " + status);
                }
            }
        );
        

        } 

        
      )}

      get_districts(){
        this.http.post("http://51.140.49.106:8012/tra/app_scripts/get_regis/districts.php", {'region_id': this.region}).map(res => res.json()) .subscribe(data => {
          console.log(JSON.stringify(data));
          this.districts_list=(data);
        });

    }

      ngOnInit() {
        this.photos = [];
      }

      takePhoto(){
         let options = {
             quality: 90,
             allowEdit: true,
             targetWidth: 800,
             targetHeight: 800,
         };
  
      this.camera.getPicture(options).then((imageData) => {
       const fileTransfer: FileTransferObject = this.Transfer.create();
  
        var options1 = {
           fileKey: 'file',
           fileName: 'name.jpg',
           headers: {}
        }
  
    fileTransfer.upload(imageData, 'http://51.140.49.106:8012/tra/app_scripts/get_regis/upload_photo.php', options1)
     .then((data) => {
       // success
       //alert((data.response));
       localStorage.setItem('customer_photo',data.response) 
     }, (err) => {
       // error
       //alert("error"+JSON.stringify(err));
     });
  
  
      });
  
  }

    register(){
    this.loc_address=localStorage.getItem('user_location');
    this.customer_photo=localStorage.getItem('customer_photo');
          let loader = this.LoadingController.create({
            content: 'Please Wait'
            });
            loader.present().then(()=>{

          this.http.post("http://51.140.49.106:8012/tra/app_scripts/get_regis/register.php", { 
            'first_name': this.first_name, 
            'last_name': this.last_name, 
            'other_names': this.other_names, 
            'gender': this.gender, 
            'phone_number':this.phone_number,
            'region':this.region,
            'district': this.district, 
            'mode_biz': this.mode_biz, 
            'id_type': this.id_type, 
            'id_number': this.id_number, 
            'tin': this.tin, 
            'primary_sale': this.primary_sale,
            'customer_photo':this.customer_photo,
            'agent_id':this.user_id,
            'hawk_area_address':this.loc_address,
            'date_register':this.date_register,
            'ref_id':this.ref_id,
            'latitude':this.lat,
            'longitude':this.lng}).map(res => res.json()).subscribe(data => {
              
              console.log(JSON.stringify(data));
              localStorage.setItem('tin',this.tin)
              loader.dismiss();
              this.navCtrl.push(AddGroupPhotoPage).then(() => {
                // first we find the index of the current view controller:
                const index = this.viewCtrl.index;
                // then we remove it from the navigation stack
                this.navCtrl.remove(index);
              });
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
