import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EnterActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-enter-activity',
  templateUrl: 'enter-activity.html',
})
export class EnterActivityPage {
  item;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.params;
    console.log(this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnterActivityPage');
  }

}
