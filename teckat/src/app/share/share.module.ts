import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TabBarComponent],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports:[TabBarComponent]
})
export class ShareModule { }
