import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewActionPage } from './new-action';

@NgModule({
  declarations: [
    NewActionPage,
  ],
  imports: [
    IonicPageModule.forChild(NewActionPage),
  ],
})
export class NewActionPageModule {}
