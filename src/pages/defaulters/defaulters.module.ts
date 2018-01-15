import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DefaultersPage } from './defaulters';

@NgModule({
  declarations: [
    DefaultersPage,
  ],
  imports: [
    IonicPageModule.forChild(DefaultersPage),
  ],
})
export class DefaultersPageModule {}
