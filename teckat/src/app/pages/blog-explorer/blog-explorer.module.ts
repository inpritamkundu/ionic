import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogExplorerPageRoutingModule } from './blog-explorer-routing.module';

import { BlogExplorerPage } from './blog-explorer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogExplorerPageRoutingModule
  ],
  declarations: [BlogExplorerPage]
})
export class BlogExplorerPageModule {}
