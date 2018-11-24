import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { ActionSheetController } from 'ionic-angular';
import { Action } from 'rxjs/scheduler/Action';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  badge: boolean;
  items: Array<{title: string, note: string, icon: string,date: Date,badge : boolean}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl : ActionSheetController) {
    this.icons = ['book'];
    
    var currentDate = new Date();
    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Log Book #' + (10893+i),
        note: 'For Site #' + 1290,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        date : new Date,
        badge : Math.random() >= 0.5,
      });
    }
  }
  openMenu(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Activity Book',
      buttons:[{
        text: 'Edit',
        role: 'destructive',
        icon: 'create',
      },{
        text: 'Share',
        role: 'destructive',
        icon: 'share',
      },{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
      },{
        text: 'Cancel',
        role: 'cancel',
        icon: 'close',
      },{
        text: 'Save',
        role: 'destructive',
        icon: 'heart-outline',
      }]
    });
    actionSheet.present();
  }
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
