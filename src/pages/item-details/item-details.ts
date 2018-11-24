import { Component } from '@angular/core';

import { NavController,Platform, NavParams, AlertController,ToastController,
  ModalController,ViewController,LoadingController   } from 'ionic-angular';
import { SignaturePage} from '../signature/signature';
  
@Component({
    templateUrl: './nav-details.html',
  })
  export class NavigationDetailsPage {
    item;
    public signatureImage : any;
    constructor(navParams: NavParams,
      public modalController : ModalController,
      public loadingController : LoadingController) {
      this.item = navParams.data.item;
      this.signatureImage = navParams.get('signatureImage');;
    }
    presentLoading() {
      const loader = this.loadingController.create({
        content: "Fetching Norms & Calculating...",
        duration: 2000
      });
      loader.present();
    }
    openSignatureModel(){
      setTimeout(() => {
         let modal = this.modalController.create(SignaturePage);
      modal.present();
      }, 300);
  
    }
  }
@Component({
  selector: 'page-item-details',
  templateUrl:'item-details.html',
  
})
export class ItemDetailsPage {
  selectedItem: any;

  items = [];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public alerCtrl: AlertController,
    public modalController : ModalController,
    public toastCtrl: ToastController, 
    public modalCtrl: ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');


    this.items = [
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
  }
  openNavDetailsPage(item) {
    this.navCtrl.push(NavigationDetailsPage, { item: item });
    
  }

  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Submit Activity?',
      message: 'The Log will be submitted for Approval',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            const toast = this.toastCtrl.create({
              message: 'Activity Submitted Successfully',
              duration: 3000
            });
            toast.present();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }


}

