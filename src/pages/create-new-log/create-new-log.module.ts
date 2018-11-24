import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewLogPage } from './create-new-log';

@NgModule({
  declarations: [
    CreateNewLogPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNewLogPage),
  ],
})
export class CreateNewLogPageModule {}
