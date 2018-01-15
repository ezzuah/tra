import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyRegistrationsPage } from './my-registrations';

@NgModule({
  declarations: [
    MyRegistrationsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyRegistrationsPage),
  ],
})
export class MyRegistrationsPageModule {}
