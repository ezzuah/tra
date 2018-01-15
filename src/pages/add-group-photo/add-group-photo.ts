import { AccountPage } from './../account/account';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileTransferObject} from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-add-group-photo',
  templateUrl: 'add-group-photo.html',
})
export class AddGroupPhotoPage {

  tin:any;
  photos:any;
  base64Image:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public camera: Camera,
              public Transfer: FileTransfer,
              public file: File,
              public http: Http,
              public toastcontroller: ToastController,
              public LoadingController: LoadingController,
              public viewCtrl: ViewController) {
              this.tin = localStorage.getItem('tin');

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddGroupPhotoPage');
  }

  ngOnInit() {
    this.photos = [];
  }

  takePhoto()
  {
     let options = {
         quality: 90,
         allowEdit: true,
         targetWidth: 800,
         targetHeight: 800,
    };
        this.camera.getPicture(options).then((imageData) => {
        const fileTransfer: FileTransferObject = this.Transfer.create();

        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);

          var options1 = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {}
          
          }

          let loader = this.LoadingController.create({
            content: 'Uploading Photo...'
            });
            loader.present().then(()=>{

        fileTransfer.upload(imageData, 'http://51.140.49.106:8012/tra/app_scripts/get_regis/upload_photo.php', options1)
        .then((data) => {
         
          this.http.post('http://51.140.49.106:8012/tra/app_scripts/get_regis/update_group_photo.php',
          {'photo':data.response,'tin':this.tin}).map(res => res.json()).subscribe(data => {
            loader.dismiss();
            let toast = this.toastcontroller.create({
              message:'Customer registration was successful',
              duration:3000,
              position:'bottom'
            });
            toast.present();
            this.navCtrl.push(AccountPage).then(() => {
              // first we find the index of the current view controller:
              const index = this.viewCtrl.index;
              // then we remove it from the navigation stack
              this.navCtrl.remove(index);
            });
            }, (err) => {
          alert("error"+JSON.stringify(err));
            })
             })
          })
        });

        }
    
        skip(){
          this.navCtrl.push(AccountPage).then(() => {
            // first we find the index of the current view controller:
            const index = this.viewCtrl.index;
            // then we remove it from the navigation stack
            this.navCtrl.remove(index);
          });

        }


        }
