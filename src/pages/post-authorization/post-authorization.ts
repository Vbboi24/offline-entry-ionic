import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
/**
 * Generated class for the PostAuthorizationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-post-authorization',
  templateUrl: 'post-authorization.html',
})
export class PostAuthorizationPage {
  items: Array<{title: string, note: string, icon: string,date: Date,badge : boolean}>;
  hide = false;
  params: Object;
  pushPage: any;
  nfcs = [
    {
      'title': 'Dakota Rice',
      'id': '#EMP-917381',
      'name':'Dakota Rice',
      'area':'',
      'location of the building':'',
      'color': '#E63135',
      'activity': 'activity1',
      'p':'4',
      'ep':'0',
      'salary': '12.50',
      'cardid': '040348ZAE33E81',
      'acknowledged': true
    },
    {
      'title': 'Minerva Hooper',
      'id': '#EMP-91381',
      'area':'',
      'location of the building':'',
      'acknowledged': false,
      'activity': 'activity1',
      'p':'3',
      'ep':'0',
      'cardid': '040348ZAE33E82',
      'salary': '10.50',
    },
    {
      'title': 'Sage Rodriguez',
      'id': '#EMP-017381',
      'area':'',
      'location of the building':'',
      'acknowledged': true,
      'activity': 'activity5',
      'p':'1',
      'ep':'0',
      'salary': '12.50',
      'cardid': '040348HXS33E81',
    },
    {
      'title': 'Philip Chaney',
      'id': '#EMP-173131',
      'area':'',
      'location of the building':'',
      'acknowledged': true,
      'activity': 'activity1',
      'p':'0',
      'ep':'4',
      'salary': '42.50',
      'cardid': '04R348ZAE33E81',
    },
    {
      'title': 'Doris Greene',
      'id': '#EMP-897388',
      'area':'',
      'location of the building':'',
      'acknowledged': false,
      'activity': 'activity2',
      'p':'2',
      'ep':'0',
      'salary': '6.50',
      'cardid': '021348ZAE33E81',

    },
    {
      'title': 'Mason Porter',
      'id': '#EMP-00123',
      'area':'',
      'location of the building':'',
      'acknowledged': false,
      'activity': 'activity1',
      'p':'0',
      'ep':'0',
      'salary': '0.00',
      'cardid': '042348ZAE33E81',

    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostAuthorizationPage');
  }
  loadingNFC(){
    const loader = this.loadingCtrl.create({
      content: "Checking for nearby NFC Cards...",
      duration: 3000
    });
    loader.present();
    this.hide = !this.hide;
  }
}
