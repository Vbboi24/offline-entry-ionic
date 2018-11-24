import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CreateLogPage_2Page} from '../create-log-page-2/create-log-page-2';
/**
 * Generated class for the CreateNewLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-new-log',
  templateUrl: 'create-new-log.html',
})
export class CreateNewLogPage {
  params: Object;
  pushPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNewLogPage');
  }
  nextPage(){
    this.navCtrl.push(CreateLogPage_2Page, {
      params : null
    });
  }
}
