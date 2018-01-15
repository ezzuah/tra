import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferCreditPage } from './transfer-credit';

@NgModule({
  declarations: [
    TransferCreditPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferCreditPage),
  ],
})
export class TransferCreditPageModule {}
