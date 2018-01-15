import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTransfersPage } from './my-transfers';

@NgModule({
  declarations: [
    MyTransfersPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTransfersPage),
  ],
})
export class MyTransfersPageModule {}
