import { Component } from '@angular/core';

import { NavController,Platform, NavParams, AlertController,ToastController,
  ModalController,ViewController   } from 'ionic-angular';
  @Component({
    templateUrl: './nav-details.html',
  })
  export class NavigationDetailsPage {
    item;
  
    constructor(params: NavParams) {
      this.item = params.data.item;
    }
  }
  @Component({
  selector: 'page-item-details',
  templateUrl:'item-details.html',
  template:`<ion-header>
  <ion-navbar>
      <button menuToggle *ngIf="!selectedItem">
    <ion-icon name="menu"></ion-icon>
  </button>
      <ion-title>Activity Book Details</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
  <ion-card>
      <ion-card-header *ngIf="selectedItem">
          <ion-icon [name]="selectedItem.icon"></ion-icon>
          {{selectedItem.title}}
          <ion-badge item-end *ngIf="selectedItem.badge" color="danger">Pending</ion-badge>
          <ion-badge item-end *ngIf="!selectedItem.badge" color="primary">Submitted</ion-badge>
      </ion-card-header>
      <ion-card-content>
          {{selectedItem.note}}{{selectedItem.date}}
      </ion-card-content>
      <ion-item>
          <button ion-button *ngIf="selectedItem.badge" item-start (click)="doConfirm()">Save</button>
          <button ion-button *ngIf="selectedItem.badge" outline>Submit</button>
          <button ion-button *ngIf="!selectedItem.badge">Details</button>
      </ion-item>
  </ion-card>
  <ion-list>
    <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)" icon-start>
      <ion-icon [name]="'logo-' + item.icon" [ngStyle]="{'color': item.color}" item-start></ion-icon>
      {{ item.title }}
    </button>
  </ion-list>

</ion-content>`
})
export class ItemDetailsPage {
  selectedItem: any;
  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController,
    public toastCtrl: ToastController, public modalCtrl: ModalController) {
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
  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
   
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
export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
