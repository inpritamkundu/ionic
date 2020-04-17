import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseExplorerPage } from './course-explorer.page';

const routes: Routes = [
  {
    path: '',
    component: CourseExplorerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseExplorerPageRoutingModule {}
