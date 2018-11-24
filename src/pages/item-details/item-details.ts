import { Component } from '@angular/core';

import { NavController,Platform, NavParams, AlertController,ToastController,
  ModalController,ViewController   } from 'ionic-angular';
  import { SignaturePage} from '../signature/signature';
  @Component({
    templateUrl: './nav-details.html',
  })
  export class NavigationDetailsPage {
    item;
    public signatureImage : any;
    constructor(navParams: NavParams,
      public modalController : ModalController,) {
      this.item = navParams.data.item;
      this.signatureImage = navParams.get('signatureImage');;
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
        'acknowledged': true
      },
      {
        'title': 'Minerva Hooper',
        'id': '#EMP-91381',
        'area':'',
        'location of the building':'',
        'acknowledged': false
      },
      {
        'title': 'Sage Rodriguez',
        'id': '#EMP-017381',
        'area':'',
        'location of the building':'',
        'acknowledged': true
      },
      {
        'title': 'Philip Chaney',
        'id': '#EMP-173131',
        'area':'',
        'location of the building':'',
        'acknowledged': true
      },
      {
        'title': 'Doris Greene',
        'id': '#EMP-897388',
        'area':'',
        'location of the building':'',
        'acknowledged': false
      },
      {
        'title': 'Mason Porter',
        'id': '#EMP-00123',
        'area':'',
        'location of the building':'',
        'acknowledged': false
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

