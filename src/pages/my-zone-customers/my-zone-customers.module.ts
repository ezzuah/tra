import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyZoneCustomersPage } from './my-zone-customers';

@NgModule({
  declarations: [
    MyZoneCustomersPage,
  ],
  imports: [
    IonicPageModule.forChild(MyZoneCustomersPage),
  ],
})
export class MyZoneCustomersPageModule {}
