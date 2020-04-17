import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'blog-explorer',
    loadChildren: () => import('./pages/blog-explorer/blog-explorer.module').then( m => m.BlogExplorerPageModule)
  },
  {
    path: 'course-explorer',
    loadChildren: () => import('./pages/course-explorer/course-explorer.module').then( m => m.CourseExplorerPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
