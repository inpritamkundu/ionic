import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogExplorerPage } from './blog-explorer.page';

const routes: Routes = [
  {
    path: '',
    component: BlogExplorerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogExplorerPageRoutingModule {}
