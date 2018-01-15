webpackJsonp([6],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalAPI; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalAPI = (function () {
    function GlobalAPI(toast) {
        this.toast = toast;
    }
    return GlobalAPI;
}());
GlobalAPI = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], GlobalAPI);

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DefaultersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DefaultersPage = (function () {
    function DefaultersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DefaultersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DefaultersPage');
    };
    return DefaultersPage;
}());
DefaultersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-defaulters',template:/*ion-inline-start:"/Users/softtribe/Documents/cordova/tra/src/pages/defaulters/defaulters.html"*/'<ion-header>\n  <ion-navbar color="dark">\n      <ion-title> </ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title></ion-title>\n  </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n  \n  <ion-list>\n      <ion-item text-wrap *ngFor="let item of defaulters" (click)="goto_routes($event,item)" >\n          <ion-icon color="primary" name="locate" item-left large ></ion-icon>\n          <h2>{{item.route}}</h2>\n          <p>{{item.route_total}} Farms</p>\n        <div align="right">\n        </div>\n        </ion-item>\n  </ion-list>\n\n    \n</ion-content>\n'/*ion-inline-end:"/Users/softtribe/Documents/cordova/tra/src/pages/defaulters/defaulters.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], DefaultersPage);

//# sourceMappingURL=defaulters.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTransfersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MyTransfersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyTransfersPage = (function () {
    function MyTransfersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyTransfersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyTransfersPage');
    };
    return MyTransfersPage;
}());
MyTransfersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-transfers',template:/*ion-inline-start:"/Users/softtribe/Documents/cordova/tra/src/pages/my-transfers/my-transfers.html"*/'<!--\n  Generated template for the MyTransfersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>my-transfers</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/softtribe/Documents/cordova/tra/src/pages/my-transfers/my-transfers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], MyTransfersPage);

//# sourceMappingURL=my-transfers.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/defaulters/defaulters.module": [
		289,
		5
	],
	"../pages/my-transfers/my-transfers.module": [
		290,
		4
	],
	"../pages/my-zone-customers/my-zone-customers.module": [
		291,
		3
	],
	"../pages/my-zone/my-zone.module": [
		292,
		2
	],
	"../pages/new-action/new-action.module": [
		293,
		1
	],
	"../pages/transfer-credit/transfer-credit.module": [
		294,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyRegistrationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer_detail_customer_detail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_customer_edit_customer__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyRegistrationsPage = (function () {
    function MyRegistrationsPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.user_id = localStorage.getItem("user_id");
    }
    MyRegistrationsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('http://51.140.49.106:8012/tra/app_scripts/user/my_registrations.php?field_agent_id=' + this.user_id).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.registrations = data;
        });
    };
    MyRegistrationsPage.prototype.edit_user = function ($event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__edit_customer_edit_customer__["a" /* EditCustomerPage */], item);
    };
    MyRegistrationsPage.prototype.view_user = function ($event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__customer_detail_customer_detail__["a" /* CustomerDetailPage */], item);
    };
    return MyRegistrationsPage;
}());
MyRegistrationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-my-registrations',template:/*ion-inline-start:"/Users/softtribe/Documents/cordova/tra/src/pages/my-registrations/my-registrations.html"*/'\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Registered Users</ion-title>\n  </ion-navbar >\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list>\n        <ion-item-sliding *ngFor="let item of registrations" >\n          <ion-item (click)="view_user($event,item)" >\n            <ion-avatar item-start>\n              <img src="http://51.140.49.106:8012/tra/customer_photos/{{item.photo}}">\n            </ion-avatar>\n            <h2>{{item.first_name}} {{item.other_names}} {{item.last_name}}</h2>\n            <p>{{item.tin}}</p>\n            <p> {{item.mode_business}}</p>\n          </ion-item>\n          <ion-item-options side="right">\n            <button ion-button color="primary" (click)="edit_user($event,item)">\n              <ion-icon name="create"></ion-icon>\n              Edit User\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/softtribe/Documents/cordova/tra/src/pages/my-registrations/my-registrations.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
], MyRegistrationsPage);

//# sourceMappingURL=my-registrations.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_group_photo_edit_group_photo__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerDetailPage = (function () {
    function CustomerDetailPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.co_photo = this.navParams.data.co_workers_photo;
    }
    CustomerDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('http://51.140.49.106:8012/tra/app_scripts/user/customer_detail.php?id=' + this.navParams.data.id).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.user = data;
            _this.customer_photo = data[0].photo;
            //this.co_photo= data[0].co_workers_photo
        });
    };
    CustomerDetailPage.prototype.edit_group_photo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_group_photo_edit_group_photo__["a" /* EditGroupPhotoPage */]);
    };
    return CustomerDetailPage;
}());
CustomerDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer-detail',template:/*ion-inline-start:"/Users/softtribe/Documents/cordova/tra/src/pages/customer-detail/customer-detail.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div *ngIf="co_photo==null"  align="center">\n        <img style="border-radius:50%;width:120px" src="http://51.140.49.106:8012/tra/customer_photos/{{customer_photo}}" width=\'120\'>\n      </div>\n\n    <ion-slides *ngIf="co_photo!=null" pager="true" style="height:200px">\n        <ion-slide>\n            <div align="center">\n                <img style="border-radius:50%;width:120px" src="http://51.140.49.106:8012/tra/customer_photos/{{customer_photo}}" width=\'120\'>\n              </div>\n        </ion-slide>\n        <ion-slide>\n            <div align="center">\n                <img style="border-radius:50%;width:120px" src="http://51.140.49.106:8012/tra/customer_photos/{{co_photo}}" width=\'120\'>\n              </div>\n        </ion-slide>\n      </ion-slides>\n\n   \n\n      <button *ngIf="co_photo==null"  icon-left color="primary" ion-button full outline (click)="edit_group_photo()" large>\n          <ion-icon  name="people"></ion-icon>  Add Co-Workers Photo\n        </button>\n        <br>\n    <ion-list *ngFor="let item of user">\n        <ion-list-header>\n          Customer Detail\n        </ion-list-header>\n        <ion-item text-wrap >Fullname <p>{{item.first_name}} {{item.other_names}}  {{item.last_name}}</p></ion-item>\n        <ion-item>Gender <p>{{item.gender}}</p></ion-item>\n        <ion-item>Phone Number <p>{{item.phone_number}}</p></ion-item>\n        <ion-item >Mode of Business <p>{{item.mode_business}}</p></ion-item>\n        <ion-item>Primary Item Sale <p>{{item.primary_item_sale}}</p></ion-item>\n        <ion-item>ID Type <p>{{item.id_type}}</p> </ion-item>\n        <ion-item>ID Number <p>{{item.id_number}}</p></ion-item>\n        <ion-item>TIN <p>{{item.tin}}</p></ion-item>\n        <ion-item>Region<p>{{item.region}}</p></ion-item>\n        <ion-item>District <p>{{item.district}}</p></ion-item>\n        <ion-item>Latitude & Longitude<p>{{item.latitude}},{{item.longitude}}</p></ion-item>\n        <ion-item>Hawking Address<p>{{item.hawk_area_address}}</p></ion-item>\n        \n      </ion-list>\n    </ion-content>\n'/*ion-inline-end:"/Users/softtribe/Documents/cordova/tra/src/pages/customer-detail/customer-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], CustomerDetailPage);

//# sourceMappingURL=customer-detail.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGroupPhotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_account__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditGroupPhotoPage = (function () {
    function EditGroupPhotoPage(navCtrl, navParams, camera, Transfer, file, http, toastcontroller, LoadingController, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.Transfer = Transfer;
        this.file = file;
        this.http = http;
        this.toastcontroller = toastcontroller;
        this.LoadingController = LoadingController;
        this.viewCtrl = viewCtrl;
        this.tin = localStorage.getItem('tin');
    }
    EditGroupPhotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddGroupPhotoPage');
    };
    EditGroupPhotoPage.prototype.ngOnInit = function () {
        this.photos = [];
    };
    EditGroupPhotoPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 90,
            allowEdit: true,
            targetWidth: 800,
            targetHeight: 800,
        };
        this.camera.getPicture(options).then(function (imageData) {
            var fileTransfer = _this.Transfer.create();
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos.push(_this.base64Image);
            var options1 = {
                fileKey: 'file',
                fileName: 'name.jpg',
                headers: {}
            };
            var loader = _this.LoadingController.create({
                content: 'Uploading Photo...'
            });
            loader.present().then(function () {
                fileTransfer.upload(imageData, 'http://51.140.49.106:8012/tra/app_scripts/get_regis/upload_photo.php', options1)
                    .then(function (data) {
                    _this.http.post('http://51.140.49.106:8012/tra/app_scripts/get_regis/update_group_photo.php', { 'photo': data.response, 'tin': _this.tin }).map(function (res) { return res.json(); }).subscribe(function (data) {
                        loader.dismiss();
                        var toast = _this.toastcontroller.create({
                            message: 'Customer registration was successful',
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__account_account__["a" /* AccountPage */]).then(function () {
                            // first we find the index of the current view controller:
                            var index = _this.viewCtrl.index;
                            // then we remove it from the navigation stack
                            _this.navCtrl.remove(index);
                        });
                    }, function (err) {
                        alert("error" + JSON.stringify(err));
                    });
                });
            });
        });
    };
    return EditGroupPhotoPage;
}());
EditGroupPhotoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-edit-group-photo',template:/*ion-inline-start:"/Users/softtribe/Documents/cordova/tra/src/pages/edit-group-photo/edit-group-photo.html"*/'<!--\n  Generated template for the EditGroupPhotoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>edit-group-photo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/softtribe/Documents/cordova/tra/src/pages/edit-group-photo/edit-group-photo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */]])
], EditGroupPhotoPage);

//# sourceMappingURL=edit-group-photo.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditCustomerPage = (function () {
    function EditCustomerPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    EditCustomerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('http://51.140.49.106:8012/tra/app_scripts/user/customer_detail.php?id=' + this.navParams.data.id).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.first_name = data[0].first_name;
            _this.last_name = data[0].lastname;
            _this.other_names = data[0].other_names;
            _this.gender = data[0].gender;
            _this.region = data[0].region;
            _this.district = data[0].district;
            _this.mode_biz = data[0].mode_business;
            _this.id_type = data[0].id_type;
            _this.id_number = data[0].id_number;
            _this.tin = data[0].tin;
            _this.primary_sale = data[0].primary_item_sale;
            _this.customer_photo = data[0].photo;
            _this.user_id = data[0].id;
            _this.http.get('http://51.140.49.106:8012/tra/app_scripts/get_regis/regions.php').map(function (res) { return res.json(); }).subscribe(function (data) {
                //console.log(JSON.stringify(data));
                _this.region_list = data;
                _this.http.get('http://51.140.49.106:8012/tra/app_scripts/get_regis/id_types.php').map(function (res) { return res.json(); }).subscribe(function (data) {
                    console.log(JSON.stringify(data));
                    _this.id_list = data;
                    _this.http.post("http://51.140.49.106:8012/tra/app_scripts/get_regis/districts.php", { 'region_id': _this.region }).map(function (res) { return res.json(); }).subscribe(function (data) {
                        console.log(JSON.stringify(data));
                        _this.districts_list = (data);
                    });
                });
            });
        });
    };
    EditCustomerPage.prototype.get_districts = function () {
        var _this = this;
        alert(this.region);
        this.http.post("http://51.140.49.106:8012/tra/app_scripts/get_regis/districts.php", { 'region_id': '3' }).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.districts_list.push(data);
        });
    };
    return EditCustomerPage;
}());
EditCustomerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-customer',template:/*ion-inline-start:"/Users/softtribe/Documents/cordova/tra/src/pages/edit-customer/edit-customer.html"*/'<ion-header>\n    <ion-navbar color="dark">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Customer Edit</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <div align="center">\n      <img style="border-radius:50%" src="http://51.140.49.106:8012/tra/customer_photos/{{customer_photo}}" width=\'120\'>\n    </div>\n      <ion-list>  \n  \n          <ion-item>\n              <ion-label floating>Firstname</ion-label>\n              <ion-input type="text"  [(ngModel)]="first_name" ></ion-input>\n            </ion-item>\n  \n            <ion-item>\n              <ion-label floating>Lastname</ion-label>\n              <ion-input type="text"  [(ngModel)]="last_name" ></ion-input>\n            </ion-item>\n  \n            <ion-item>\n              <ion-label floating>Othernames</ion-label>\n              <ion-input type="text"   [(ngModel)]="other_names" ></ion-input>\n            </ion-item>\n            <br>\n  \n            \n              <ion-item>\n                <ion-label>Gender</ion-label>\n                <ion-select [(ngModel)]="gender">\n                  <ion-option value="Male">Male</ion-option>\n                  <ion-option value="Female">Female</ion-option>\n                </ion-select>\n              </ion-item>\n              <br>\n\n              <ion-item>\n                  <ion-label>Region</ion-label>\n                  <ion-select (ionChange)="get_districts()" [(ngModel)]="region"  >\n                      <ion-option [value]="item.id" *ngFor="let item of region_list">{{item.region}}</ion-option>\n                  </ion-select>\n                </ion-item>\n  \n                <br>\n  \n                <ion-item>\n                    <ion-label>District</ion-label>\n                    <ion-select  [(ngModel)]="district">\n                    <ion-option [value]="item.id"  *ngFor="let item of districts_list">{{item.district}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n              <br>\n  \n            \n              <ion-item>\n                <ion-label>Mode of Business</ion-label>\n                <ion-select [(ngModel)]="mode_biz">\n                  <ion-option value="hawker">Stationed</ion-option>\n                  <ion-option value="mobile">Mobile</ion-option>\n                </ion-select>\n              </ion-item>\n  \n                  <br>\n  \n                  <ion-item>\n                      <ion-label>ID Type</ion-label>\n                      <ion-select  [(ngModel)]="id_type">\n                      <ion-option [value]="item.id"  *ngFor="let item of id_list">{{item.type}}</ion-option>\n  \n                      </ion-select>\n                    </ion-item>\n  \n                <ion-item>\n                  <ion-label floating>ID Number</ion-label>\n                  <ion-input type="text"  [(ngModel)]="id_number"  ></ion-input>\n                </ion-item>\n  \n                <ion-item>\n                  <ion-label floating>TIN</ion-label>\n                  <ion-input type="text"  [(ngModel)]="tin" readonly></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label floating>Primary Item Sale</ion-label>\n                  <ion-input type="text"  [(ngModel)]="primary_sale"  ></ion-input>\n                </ion-item>\n              \n              \n              </ion-list>\n  \n\n              <div align="center">\n                  <button icon-left ion-button full outline color="primary" (click)="register()" large >\n                      <ion-icon name="contact"></ion-icon>\n                    Save Changes\n                  </button>\n                </div>\n  </ion-content>\n  '/*ion-inline-end:"/Users/softtribe/Documents/cordova/tra/src/pages/edit-customer/edit-customer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], EditCustomerPage);

//# sourceMappingURL=edit-customer.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxPaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaxPaymentPage = (function () {
    function TaxPaymentPage(navCtrl, navParams, formBuilder, LoadingController, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.LoadingController = LoadingController;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.payment_form = this.formBuilder.group({
            tin: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            duration_number: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
        this.field_agent_id = localStorage.getItem('user_id');
        this.date_paid = new Date().toISOString().slice(0, 10);
        this.ref_id = new Date().getTime() + '' + this.field_agent_id;
    }
    TaxPaymentPage.prototype.new_payment = function () {
        var _this = this;
        this.default_date = new Date();
        this.default_date.setMonth(this.default_date.getMonth() + parseInt(this.duration_number));
        this.duration_date = this.default_date.toISOString().slice(0, 10);
        var loader = this.LoadingController.create({
            content: 'Please Wait'
        });
        loader.present().then(function () {
            _this.http.post('http://51.140.49.106:8012/tra/app_scripts/payment/check_tin.php', { 'tin': _this.tin }).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(JSON.stringify(data));
                if (data.message == 'tin was not found') {
                    loader.dismiss();
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: 'Tin number was not found on server.',
                        buttons: ['Ok']
                    });
                    alert_1.present();
                }
                else {
                    _this.amount = data[0].amount * _this.duration_number;
                    _this.http.post("http://51.140.49.106:8012/tra/app_scripts/payment/new_payment.php", {
                        'tin': _this.tin,
                        'duration': _this.duration_number,
                        'duration_date': _this.duration_date,
                        'amount': _this.amount,
                        'field_agent_id': _this.field_agent_id,
                        'ref_id': _this.ref_id,
                        'longitude': '8877',
                        'latitude': '876667',
                        'date_payment': _this.date_paid
                    }).subscribe(function (data) {
                        console.log(JSON.stringify(data));
                        loader.dismiss();
                    });
                }
            }, function (err) {
                loader.dismiss();
                //this.sms.send('416123456', 'Hello world!');
                var alert = _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: 'Failed to contact server.',
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    return TaxPaymentPage;
}());
TaxPaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tax-payment',template:/*ion-inline-start:"/Users/softtribe/Documents/cordova/tra/src/pages/tax-payment/tax-payment.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>New Tax Payment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <form [formGroup]="payment_form">\n\n    <ion-item>\n        <ion-label stacked>Tin</ion-label>\n        <ion-input type="text" formControlName="tin" [(ngModel)]="tin" ></ion-input>\n      </ion-item>\n  \n      <br>\n      <ion-item>\n          <ion-label>Months Duration</ion-label>\n          <ion-select formControlName="duration_number" [(ngModel)]="duration_number">\n            <ion-option value="1">1</ion-option>\n            <ion-option value="2">2</ion-option>\n            <ion-option value="3">3</ion-option>\n            <ion-option value="4">4</ion-option>\n            <ion-option value="5">5</ion-option>\n            <ion-option value="6"></ion-option>\n            <ion-option value="7">7</ion-option>\n            <ion-option value="8">8</ion-option>\n            <ion-option value="9">9</ion-option>\n            <ion-option value="10">10</ion-option>\n            <ion-option value="11">11</ion-option>\n            <ion-option value="12">12</ion-option>\n          </ion-select>\n        </ion-item>\n        <br>\n        <p align="center">\n            <button ion-button icon-left large full outline color="primary" [disabled]="!payment_form.valid" (click)="new_payment()">\n             \n              <ion-icon name="arrow-dropright"></ion-icon>\n              Pay Tax\n            </button>\n          </p>\n          </form>\n          \n</ion-content>\n'/*ion-inline-end:"/Users/softtribe/Documents/cordova/tra/src/pages/tax-payment/tax-payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], TaxPaymentPage);

//# sourceMappingURL=tax-payment.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_group_photo_add_group_photo__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_location_accuracy__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_sms__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var RegisterPage = (function () {
    function RegisterPage(navCtrl, http, geolocation, LoadingController, platform, alertCtrl, network, locationAccuracy, camera, toast, Transfer, file, formBuilder, toastcontroller, menuCtrl, sms, viewCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.geolocation = geolocation;
        this.LoadingController = LoadingController;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.locationAccuracy = locationAccuracy;
        this.camera = camera;
        this.toast = toast;
        this.Transfer = Transfer;
        this.file = file;
        this.formBuilder = formBuilder;
        this.toastcontroller = toastcontroller;
        this.menuCtrl = menuCtrl;
        this.sms = sms;
        this.viewCtrl = viewCtrl;
        this.regis_form = this.formBuilder.group({
            first_name: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            last_name: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            other_names: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            phone_number: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            region: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            district: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            mode_biz: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            id_type: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            id_number: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            tin: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            primary_sale: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
        });
        this.user_id = localStorage.getItem("user_id");
        this.date_register = new Date().toISOString().slice(0, 10);
        this.ref_id = new Date().getTime() + '' + this.user_id;
    }
    // ionViewWillEnter() 
    RegisterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        localStorage.removeItem('user_location');
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        this.tin = text;
        this.http.get('http://51.140.49.106:8012/tra/app_scripts/get_regis/regions.php').map(function (res) { return res.json(); }).subscribe(function (data) {
            //console.log(JSON.stringify(data));
            _this.region_list = data;
            _this.http.get('http://51.140.49.106:8012/tra/app_scripts/get_regis/id_types.php').map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(JSON.stringify(data));
                _this.id_list = data;
            });
        });
        // this.locationAccuracy.canRequest().then((canRequest: boolean) => {
        //     if(canRequest) {
        //       // the accuracy option will be ignored by iOS
        //       this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
        //         () => console.log('Request successful'),
        //         error => console.log('Error requesting location permissions', error)
        //       );
        //     }
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true
        }).then(function (resp) {
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.lng = resp.coords.longitude;
            _this.lat = resp.coords.latitude;
            var geocoder;
            geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(_this.lat, _this.lng);
            geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        this.address = results[0].formatted_address;
                        //var value=add.split(",");
                        console.log("city name is: " + this.address);
                        //this.storage.set('user_location', this.address);
                        localStorage.setItem('user_location', this.address);
                        //alert(this.address)
                    }
                    else {
                        //alert("address not found");
                    }
                }
                else {
                    //alert("Geocoder failed due to: " + status);
                }
            });
        });
    };
    RegisterPage.prototype.get_districts = function () {
        var _this = this;
        this.http.post("http://51.140.49.106:8012/tra/app_scripts/get_regis/districts.php", { 'region_id': this.region }).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.districts_list = (data);
        });
    };
    RegisterPage.prototype.ngOnInit = function () {
        this.photos = [];
    };
    RegisterPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 90,
            allowEdit: true,
            targetWidth: 800,
            targetHeight: 800,
        };
        this.camera.getPicture(options).then(function (imageData) {
            var fileTransfer = _this.Transfer.create();
            var options1 = {
                fileKey: 'file',
                fileName: 'name.jpg',
                headers: {}
            };
            fileTransfer.upload(imageData, 'http://51.140.49.106:8012/tra/app_scripts/get_regis/upload_photo.php', options1)
                .then(function (data) {
                // success
                //alert((data.response));
                localStorage.setItem('customer_photo', data.response);
            }, function (err) {
                // error
                //alert("error"+JSON.stringify(err));
            });
        });
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.loc_address = localStorage.getItem('user_location');
        this.customer_photo = localStorage.getItem('customer_photo');
        var loader = this.LoadingController.create({
            content: 'Please Wait'
        });
        loader.present().then(function () {
            _this.http.post("http://51.140.49.106:8012/tra/app_scripts/get_regis/register.php", {
                'first_name': _this.first_name,
                'last_name': _this.last_name,
                'other_names': _this.other_names,
                'gender': _this.gender,
                'phone_number': _this.phone_number,
                'region': _this.region,
                'district': _this.district,
                'mode_biz': _this.mode_biz,
                'id_type': _this.id_type,
                'id_number': _this.id_number,
                'tin': _this.tin,
                'primary_sale': _this.primary_sale,
                'customer_photo': _this.customer_photo,
                'agent_id': _this.user_id,
                'hawk_area_address': _this.loc_address,
                'date_register': _this.date_register,
                'ref_id': _this.ref_id,
                'latitude': _this.lat,
                'longitude': _this.lng
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(JSON.stringify(data));
                localStorage.setItem('tin', _this.tin);
                loader.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__add_group_photo_add_group_photo__["a" /* AddGroupPhotoPage */]).then(function () {
                    // first we find the index of the current view controller:
                    var index = _this.viewCtrl.index;
                    // then we remove it from the navigation stack
                    _this.navCtrl.remove(index);
                });
            }, function (err) {
                loader.dismiss();
                //this.sms.send('416123456', 'Hello world!');
                var alert = _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: 'Failed to contact server.',
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-add-farmer',template:/*ion-inline-start:"/Users/softtribe/Documents/cordova/tra/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Registration - Step 1</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <form [formGroup]="regis_form">\n    <ion-list>  \n\n        <ion-item>\n            <ion-label floating>Firstname</ion-label>\n            <ion-input type="text" formControlName="first_name"  [(ngModel)]="first_name" ></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Lastname</ion-label>\n            <ion-input type="text" formControlName="last_name"  [(ngModel)]="last_name" ></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Othernames</ion-label>\n            <ion-input type="text" formControlName="other_names"  [(ngModel)]="other_names" ></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label floating>Phone Number</ion-label>\n              <ion-input type="tel" formControlName="phone_number"  [(ngModel)]="phone_number" ></ion-input>\n            </ion-item>\n            <br>\n\n          \n            <ion-item>\n              <ion-label>Gender</ion-label>\n              <ion-select formControlName="gender" [(ngModel)]="gender">\n                <ion-option value="Male">Male</ion-option>\n                <ion-option value="Female">Female</ion-option>\n              </ion-select>\n            </ion-item>\n            <br>\n          \n\n\n            <ion-item>\n                <ion-label>Region</ion-label>\n                <ion-select (ionChange)="get_districts()" [(ngModel)]="region" formControlName="region" >\n                    <ion-option [value]="item.id" *ngFor="let item of region_list">{{item.region}}</ion-option>\n                </ion-select>\n              </ion-item>\n\n              <br>\n\n              <ion-item>\n                  <ion-label>District</ion-label>\n                  <ion-select formControlName="district" [(ngModel)]="district">\n                  <ion-option [value]="item.id"  *ngFor="let item of districts_list">{{item.district}}</ion-option>\n                  </ion-select>\n                </ion-item>\n            <br>\n\n          \n            <ion-item>\n              <ion-label>Mode of Business</ion-label>\n              <ion-select formControlName="mode_biz" [(ngModel)]="mode_biz">\n                <ion-option value="hawker">Stationed</ion-option>\n                <ion-option value="mobile">Mobile</ion-option>\n              </ion-select>\n            </ion-item>\n\n                <br>\n\n                <ion-item>\n                    <ion-label>ID Type</ion-label>\n                    <ion-select formControlName="id_type" [(ngModel)]="id_type">\n                    <ion-option [value]="item.id"  *ngFor="let item of id_list">{{item.type}}</ion-option>\n\n                    </ion-select>\n                  </ion-item>\n\n              <ion-item>\n                <ion-label floating>ID Number</ion-label>\n                <ion-input type="text" formControlName="id_number" [(ngModel)]="id_number"  ></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label floating>TIN</ion-label>\n                <ion-input type="text" formControlName="tin" [(ngModel)]="tin" readonly=""  ></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label floating>Primary Item Sale</ion-label>\n                <ion-input type="text" formControlName="primary_sale" [(ngModel)]="primary_sale"  ></ion-input>\n              </ion-item>\n              <p>\n             <button icon-left color="secondary" ion-button full outline (click)="takePhoto()" large>\n               <ion-icon  name="camera"></ion-icon>  Take Photo\n             </button>\n              </p>\n            \n            </ion-list>\n\n\n\n        <div align="center" *ngFor="let photo of photos; let id = index" >\n            <img style="width:50%" [src]="photo" *ngIf="photo" />\n         </div>\n  \n            <div align="center">\n                <button icon-left ion-button full outline color="primary" (click)="register()" large [disabled]="!regis_form.valid" >\n                    <ion-icon name="contact"></ion-icon>\n                  Register Customer\n                </button>\n              </div>\n            </form>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/softtribe/Documents/cordova/tra/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_sms__["a" /* SMS */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGroupPhotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_account__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddGroupPhotoPage = (function () {
    function AddGroupPhotoPage(navCtrl, navParams, camera, Transfer, file, http, toastcontroller, LoadingController, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.Transfer = Transfer;
        this.file = file;
        this.http = http;
        this.toastcontroller = toastcontroller;
        this.LoadingController = LoadingController;
        this.viewCtrl = viewCtrl;
        this.tin = localStorage.getItem('tin');
    }
    AddGroupPhotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddGroupPhotoPage');
    };
    AddGroupPhotoPage.prototype.ngOnInit = function () {
        this.photos = [];
    };
    AddGroupPhotoPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 90,
            allowEdit: true,
            targetWidth: 800,
            targetHeight: 800,
        };
        this.camera.getPicture(options).then(function (imageData) {
            var fileTransfer = _this.Transfer.create();
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos.push(_this.base64Image);
            var options1 = {
                fileKey: 'file',
                fileName: 'name.jpg',
                headers: {}
            };
            var loader = _this.LoadingController.create({
                content: 'Uploading Photo...'
            });
            loader.present().then(function () {
                fileTransfer.upload(imageData, 'http://51.140.49.106:8012/tra/app_scripts/get_regis/upload_photo.php', options1)
                    .then(function (data) {
                    _this.http.post('http://51.140.49.106:8012/tra/app_scripts/get_regis/update_group_photo.php', { 'photo': data.response, 'tin': _this.tin }).map(function (res) { return res.json(); }).subscribe(function (data) {
                        loader.dismiss();
                        var toast = _this.toastcontroller.create({
                            message: 'Customer registration was successful',
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__account_account__["a" /* AccountPage */]).then(function () {
                            // first we find the index of the current view controller:
                            var index = _this.viewCtrl.index;
                            // then we remove it from the navigation stack
                            _this.navCtrl.remove(index);
                        });
                    }, function (err) {
                        alert("error" + JSON.stringify(err));
                    });
                });
            });
        });
    };
    AddGroupPhotoPage.prototype.skip = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__account_account__["a" /* AccountPage */]).then(function () {
            // first we find the index of the current view controller:
            var index = _this.viewCtrl.index;
            // then we remove it from the navigation stack
            _this.navCtrl.remove(index);
        });
    };
    return AddGroupPhotoPage;
}());
AddGroupPhotoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-add-group-photo',template:/*ion-inline-start:"/Users/softtribe/Documents/cordova/tra/src/pages/add-group-photo/add-group-photo.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Regisration - Step 2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div align="center" *ngFor="let photo of photos; let id = index" >\n        <img [src]="photo" *ngIf="photo" />\n     </div>\n  \n  \n    <button ion-button icon-left full large outline color="primary" (click)="takePhoto()"> <ion-icon name="camera"></ion-icon>Take Group Photo</button>\n    <img *ngIf="photos==\'\'"  class="group" src="assets/imgs/group_temp.png">\n     <button ion-button icon-left full large outline color="dark"> <ion-icon name="arrow-round-forward" (click)="skip()"></ion-icon>Skip</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/softtribe/Documents/cordova/tra/src/pages/add-group-photo/add-group-photo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */]])
], AddGroupPhotoPage);

//# sourceMappingURL=add-group-photo.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_account__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_global__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, LoadingController, alertCtrl, http, formBuilder, global) {
        this.navCtrl = navCtrl;
        this.LoadingController = LoadingController;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.global = global;
        this.menu_status = false;
        this.login_form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
        });
        this.check_username = localStorage.getItem('username');
        this.menu_status = false;
        ;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        //this.navCtrl.push(AddGroupPhotoPage)
        if (this.check_username != undefined) {
            this.global.menu_status = true;
            this.global.group_id = localStorage.getItem('group_id');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__account_account__["a" /* AccountPage */]);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__account_account__["a" /* AccountPage */]);
        }
    };
    HomePage.prototype.login = function () {
        var _this = this;
        var loader = this.LoadingController.create({
            content: 'Signing In...'
        });
        loader.present().then(function () {
            _this.http.post("http://51.140.49.106:8012/tra/app_scripts/login.php", { 'username': _this.username,
                'password': _this.password }).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(JSON.stringify(data));
                loader.dismiss();
                if (data.message != "Incorrect Username or Password") {
                    localStorage.setItem('user_id', data[0].id);
                    localStorage.setItem('first_name', data[0].first_name);
                    localStorage.setItem('last_name', data[0].last_name);
                    localStorage.setItem('username', data[0].username);
                    localStorage.setItem('phone_number', data[0].phone_number);
                    localStorage.setItem('group_id', data[0].user_group_id);
                    localStorage.setItem('credit_balance', data[0].credit_balance);
                    localStorage.setItem('region_id', data[0].region_id);
                    localStorage.setItem('district_id', data[0].district_id);
                    localStorage.setItem('district', data[0].district);
                    localStorage.setItem('region', data[0].region);
                    _this.global.menu_status = true;
                    _this.global.group_id = data[0].user_group_id;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__account_account__["a" /* AccountPage */]);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__account_account__["a" /* AccountPage */]);
                }
                else {
                    if (data.message == "Incorrect Username or Password") {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Error!',
                            subTitle: 'Wrong Username or Password',
                            buttons: ['Try Again']
                        });
                        alert_1.present();
                    }
                }
            }, function (err) {
                loader.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: 'Failed to contact server.',
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/softtribe/Documents/cordova/tra/src/pages/home/home.html"*/'<ion-header >\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg_color">\n  <div class="login_content">\n  <p align="center">\n          <img src="assets/imgs/tra_logo.png">\n      </p>\n      <form [formGroup]="login_form">\n  <ion-list>\n  \n      <ion-item>\n        <ion-label stacked>Username</ion-label>\n        <ion-input type="text" formControlName="username" [(ngModel)]="username" ></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input type="password" formControlName="password" [(ngModel)]="password" ></ion-input>\n      </ion-item>\n    \n    </ion-list>\n\n    <p align="center">\n      <button ion-button icon-left large full  color="primary" (click)="login()" [disabled]="!login_form.valid" >\n       \n        <ion-icon name="arrow-dropright"></ion-icon>\n        Sign In\n      </button>\n    </p>\n  </form>\n    <br>\n    <h5  align="center">Forgot Password?</h5>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/softtribe/Documents/cordova/tra/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_6__pages_global__["a" /* GlobalAPI */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyZoneCustomersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MyZoneCustomersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyZoneCustomersPage = (function () {
    function MyZoneCustomersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyZoneCustomersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyZoneCustomersPage');
    };
    return MyZoneCustomersPage;
}());
MyZoneCustomersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-zone-customers',template:/*ion-inline-start:"/Users/softtribe/Documents/cordova/tra/src/pages/my-zone-customers/my-zone-customers.html"*/'<!--\n  Generated template for the MyZoneCustomersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>my-zone-customers</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/softtribe/Documents/cordova/tra/src/pages/my-zone-customers/my-zone-customers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], MyZoneCustomersPage);

//# sourceMappingURL=my-zone-customers.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyZonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MyZonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyZonePage = (function () {
    function MyZonePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyZonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyZonePage');
    };
    return MyZonePage;
}());
MyZonePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-zone',template:/*ion-inline-start:"/Users/softtribe/Documents/cordova/tra/src/pages/my-zone/my-zone.html"*/'<!--\n  Generated template for the MyZonePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>my-zone</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/softtribe/Documents/cordova/tra/src/pages/my-zone/my-zone.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], MyZonePage);

//# sourceMappingURL=my-zone.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewActionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NewActionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewActionPage = (function () {
    function NewActionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewActionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewActionPage');
    };
    return NewActionPage;
}());
NewActionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-action',template:/*ion-inline-start:"/Users/softtribe/Documents/cordova/tra/src/pages/new-action/new-action.html"*/'<!--\n  Generated template for the NewActionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>new-action</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/softtribe/Documents/cordova/tra/src/pages/new-action/new-action.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], NewActionPage);

//# sourceMappingURL=new-action.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferCreditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TransferCreditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransferCreditPage = (function () {
    function TransferCreditPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransferCreditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransferCreditPage');
    };
    return TransferCreditPage;
}());
TransferCreditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-transfer-credit',template:/*ion-inline-start:"/Users/softtribe/Documents/cordova/tra/src/pages/transfer-credit/transfer-credit.html"*/'<!--\n  Generated template for the TransferCreditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>transfer-credit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/softtribe/Documents/cordova/tra/src/pages/transfer-credit/transfer-credit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], TransferCreditPage);

//# sourceMappingURL=transfer-credit.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_account__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_add_group_photo_add_group_photo__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_customer_detail_customer_detail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_defaulters_defaulters__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_edit_customer_edit_customer__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_edit_group_photo_edit_group_photo__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_my_registrations_my_registrations__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_my_transfers_my_transfers__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_my_zone_my_zone__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_my_zone_customers_my_zone_customers__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_new_action_new_action__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_register__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tax_payment_tax_payment__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_transfer_credit_transfer_credit__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_sqlite__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_location_accuracy__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_network__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_sms__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_global__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_add_group_photo_add_group_photo__["a" /* AddGroupPhotoPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_customer_detail_customer_detail__["a" /* CustomerDetailPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_defaulters_defaulters__["a" /* DefaultersPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_edit_customer_edit_customer__["a" /* EditCustomerPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_edit_group_photo_edit_group_photo__["a" /* EditGroupPhotoPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_my_registrations_my_registrations__["a" /* MyRegistrationsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_my_transfers_my_transfers__["a" /* MyTransfersPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_my_zone_my_zone__["a" /* MyZonePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_my_zone_customers_my_zone_customers__["a" /* MyZoneCustomersPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_new_action_new_action__["a" /* NewActionPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tax_payment_tax_payment__["a" /* TaxPaymentPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_transfer_credit_transfer_credit__["a" /* TransferCreditPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_23__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/defaulters/defaulters.module#DefaultersPageModule', name: 'DefaultersPage', segment: 'defaulters', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-transfers/my-transfers.module#MyTransfersPageModule', name: 'MyTransfersPage', segment: 'my-transfers', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-zone-customers/my-zone-customers.module#MyZoneCustomersPageModule', name: 'MyZoneCustomersPage', segment: 'my-zone-customers', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-zone/my-zone.module#MyZonePageModule', name: 'MyZonePage', segment: 'my-zone', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/new-action/new-action.module#NewActionPageModule', name: 'NewActionPage', segment: 'new-action', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/transfer-credit/transfer-credit.module#TransferCreditPageModule', name: 'TransferCreditPage', segment: 'transfer-credit', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_add_group_photo_add_group_photo__["a" /* AddGroupPhotoPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_customer_detail_customer_detail__["a" /* CustomerDetailPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_defaulters_defaulters__["a" /* DefaultersPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_edit_customer_edit_customer__["a" /* EditCustomerPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_edit_group_photo_edit_group_photo__["a" /* EditGroupPhotoPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_my_registrations_my_registrations__["a" /* MyRegistrationsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_my_transfers_my_transfers__["a" /* MyTransfersPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_my_zone_my_zone__["a" /* MyZonePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_my_zone_customers_my_zone_customers__["a" /* MyZoneCustomersPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_new_action_new_action__["a" /* NewActionPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tax_payment_tax_payment__["a" /* TaxPaymentPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_transfer_credit_transfer_credit__["a" /* TransferCreditPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_24__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_25__ionic_native_location_accuracy__["a" /* LocationAccuracy */], __WEBPACK_IMPORTED_MODULE_26__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_30__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_31__pages_global__["a" /* GlobalAPI */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_my_registrations_my_registrations__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_tax_payment_tax_payment__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_my_transfers_my_transfers__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_defaulters_defaulters__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_register_register__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_account__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_sqlite__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_global__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl, sqlite, global, Network) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.sqlite = sqlite;
        this.global = global;
        this.Network = Network;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */];
        this.global.menu_status;
        this.global.group_id;
        this.initializeApp();
        // used for an example of ngFor and navigation
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.sqlite.create({
                name: 'tra.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql('CREATE TABLE IF NOT EXISTS customers(id INTEGER PRIMARY KEY AUTOINCREMENT,first_name,last_name,other_names,phone_number,tin,hawk_area_address,mode_business,amount,primary_item_sale,district,region,user_id)', {})
                    .then(function () { return console.log(' customers table Executed SQL'); })
                    .catch(function (e) { return console.log(e); });
                db.executeSql('CREATE TABLE IF NOT EXISTS routes(id INTEGER PRIMARY KEY AUTOINCREMENT,hawk_area_address)', {})
                    .then(function () { return console.log(' customers table Executed SQL'); })
                    .catch(function (e) { return console.log(e); });
            });
            var disconnectSubscription = _this.Network.onDisconnect().subscribe(function () {
                var alert = _this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'Your Device is currently offline',
                    buttons: ['Ok']
                });
                alert.present();
            });
            var connectSub = _this.Network.onConnect().subscribe(function () {
                console.log('you are online');
            });
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.goto_my_account = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */]);
    };
    MyApp.prototype.my_registrations = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_0__pages_my_registrations_my_registrations__["a" /* MyRegistrationsPage */]);
    };
    MyApp.prototype.goto_new_customer = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_register_register__["a" /* RegisterPage */]);
    };
    MyApp.prototype.goto_defaulters = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_defaulters_defaulters__["a" /* DefaultersPage */]);
    };
    MyApp.prototype.goto_mytransfers = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_my_transfers_my_transfers__["a" /* MyTransfersPage */]);
    };
    MyApp.prototype.goto_new_payment = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_1__pages_tax_payment_tax_payment__["a" /* TaxPaymentPage */]);
    };
    MyApp.prototype.goto_logout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        //console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        localStorage.removeItem('username');
                        localStorage.removeItem('credit_balance');
                        localStorage.removeItem('group_id');
                        localStorage.removeItem('user_id');
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */]);
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    MyApp.prototype.goto_about_tra = function () {
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/softtribe/Documents/cordova/tra/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n\n\n        <ion-item color="lighter" *ngIf="global.menu_status" menuClose (click)="goto_my_account()"> \n          <ion-icon color="dark" name="person" item-left></ion-icon>Account\n        </ion-item>\n\n        <ion-item color="lighter" *ngIf="global.menu_status && global.group_id==\'2\'" menuClose (click)="goto_new_customer()"> \n          <ion-icon color="dark" name="contact" item-left></ion-icon>New Customer\n        </ion-item>\n\n        <ion-item color="lighter" *ngIf="global.menu_status && global.group_id==\'2\'" menuClose (click)="my_registrations()"> \n          <ion-icon color="dark" name="list-box" item-left></ion-icon>Registered Customers\n        </ion-item>\n\n        <ion-item color="lighter" *ngIf="global.menu_status && global.group_id==\'4\'" menuClose (click)="goto_defaulters()"> \n          <ion-icon color="dark" name="people" item-left></ion-icon>Defaulters\n        </ion-item>\n\n        <ion-item color="lighter" *ngIf="global.menu_status && global.group_id==\'3\'" menuClose (click)="goto_mytransfers()">\n          <ion-icon color="dark"  name="sync" item-left></ion-icon>My Transfers\n        </ion-item>\n        \n        <ion-item color="lighter" *ngIf="global.menu_status && global.group_id==\'3\'" menuClose (click)="goto_new_payment()">\n          <ion-icon  color="dark" name="card" item-left></ion-icon>\n          New Payment\n        </ion-item>\n\n        <ion-item color="lighter" *ngIf="global.menu_status" menuClose (click)="goto_logout()"> \n            <ion-icon color="danger" name="power" item-left></ion-icon>Log Out\n          </ion-item>\n\n        <ion-item color="lighter"  menuClose (click)="goto_about_tra()">\n          <ion-icon color="dark"  name="information-circle" item-left></ion-icon>About TRA\n        </ion-item>\n\n      </ion-list>\n</ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/softtribe/Documents/cordova/tra/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10__ionic_native_sqlite__["a" /* SQLite */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ionic_native_sqlite__["a" /* SQLite */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_13__pages_global__["a" /* GlobalAPI */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__pages_global__["a" /* GlobalAPI */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__["a" /* Network */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__["a" /* Network */]) === "function" && _h || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/softtribe/Documents/cordova/tra/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/softtribe/Documents/cordova/tra/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountPage = (function () {
    function AccountPage(navCtrl, navParams, alertCtrl, LoadingingController, http, LoadingController, toasCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.LoadingingController = LoadingingController;
        this.http = http;
        this.LoadingController = LoadingController;
        this.toasCtrl = toasCtrl;
        this.first_name = localStorage.getItem('first_name');
        this.last_name = localStorage.getItem('last_name');
        this.phone_number = localStorage.getItem('phone_number');
        this.username = localStorage.getItem('username');
        this.region = localStorage.getItem('region');
        this.district = localStorage.getItem('district');
        this.user_id = localStorage.getItem('user_id');
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('http://51.140.49.106:8012/tra/app_scripts/user/account.php?username=' + this.username).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.credit_balance = data[0].credit_balance;
        });
    };
    AccountPage.prototype.download = function () {
        var _this = this;
        var loader = this.LoadingController.create({
            content: 'Downloading...'
        });
        loader.present().then(function () {
            _this.http.get('http://51.140.49.106:8012/tra/app_scripts/user/downloads.php?user_id=' + _this.user_id).map(function (res) { return res.json(); }).subscribe(function (data) {
                var result = data
                    .map(function (item) { return "('" + item.user_id + "','" + item.address + ")"; })
                    .join(',');
                //console.log(JSON.stringify(result));
                loader.dismiss();
            });
        });
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"/Users/softtribe/Documents/cordova/tra/src/pages/account/account.html"*/'<ion-header >\n    <ion-navbar color="dark">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title></ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n\n    <ion-list>\n        <!-- <ion-list-header>\n          Account\n        </ion-list-header> -->\n        <ion-item text-wrap >Fullname <p>{{first_name}} {{last_name}}</p></ion-item>\n        <ion-item>Phone Number <p>{{phone_number}}</p></ion-item>\n        <ion-item>Username <p>{{username}}</p></ion-item>\n        <ion-item>Region<p>{{region}}</p></ion-item>\n        <ion-item>District<p>{{district}}</p></ion-item>        \n        <ion-item>Password <p>Tap Here to Change your Password</p> </ion-item>\n        \n      </ion-list>\n\n      <button  icon-left color="primary" ion-button full outline (click)="download()" large>\n          <ion-icon  name="people"></ion-icon>  Download Customers\n        </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/softtribe/Documents/cordova/tra/src/pages/account/account.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _g || Object])
], AccountPage);

var _a, _b, _c, _d, _e, _f, _g;
// .map(item => `('${item.first_name}','${item.last_name}','${item.other_names}','${item.phone_number}','${item.tin}','${item.hawk_area_address}','${item.mode_business}','${item.amount}','${item.primary_item_sale}','${item.region}','${item.district}','${item.user_id}')`)
//# sourceMappingURL=account.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map