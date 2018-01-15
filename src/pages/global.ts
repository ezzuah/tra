import { Component, Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class GlobalAPI {

  public menu_status: boolean ;
  public group_id:string;
  public password_change:string;

constructor(public toast: ToastController) 
           {
            
  }
}