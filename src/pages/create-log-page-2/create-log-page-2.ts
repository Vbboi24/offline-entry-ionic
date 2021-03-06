import { Component } from '@angular/core';
import { NavController,ModalController, NavParams, LoadingController } from 'ionic-angular';
import {ModalPage} from '../modal/modal';
import {EnterActivityPage} from '../enter-activity/enter-activity';
import{PostAuthorizationPage} from '../post-authorization/post-authorization';
/**
 * Generated class for the CreateLogPage_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-log-page-2',
  templateUrl: 'create-log-page-2.html',
})
export class CreateLogPage_2Page {
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
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public modalCtrl:ModalController) {
     
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateLogPage_2Page');
  }
  loadingNFC(){
    const loader = this.loadingCtrl.create({
      content: "Looking for nearby NFC Cards...",
      duration: 3000
    });
    loader.present();
    this.hide = !this.hide;
  }
  openModal() {

    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
  enterActivity(item){
    this.navCtrl.push(EnterActivityPage,{
      params : item
    })
    console.log(this.params);
  }
  continue(){
    this.navCtrl.push(PostAuthorizationPage);
  }
}
