import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';
import {ListPage} from '../list/list';
/**
 * Generated class for the SignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})
export class SignaturePage {
  @ViewChild(SignaturePad) public signaturePad : SignaturePad;
  public signaturePadOptions : Object = {
    'minWidth': 2,
    'canvasWidth': 340,
    'canvasHeight': 200
  };
  public signatureImage : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  drawCancel() {
    this.navCtrl.push(ListPage);
  }

   drawComplete() {
    this.signatureImage = this.signaturePad.toDataURL();
    this.navCtrl.push(ListPage, {signatureImage: this.signatureImage});
  }

  drawClear() {
    this.signaturePad.clear();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignaturePage');
  }

}
