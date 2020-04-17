import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseExplorerPageRoutingModule } from './course-explorer-routing.module';

import { CourseExplorerPage } from './course-explorer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseExplorerPageRoutingModule
  ],
  declarations: [CourseExplorerPage]
})
export class CourseExplorerPageModule {}
