import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageWorkersPage } from './manage-workers';

@NgModule({
  declarations: [
    ManageWorkersPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageWorkersPage),
  ],
})
export class ManageWorkersPageModule {}
