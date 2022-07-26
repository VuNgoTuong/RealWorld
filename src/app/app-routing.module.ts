import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'article',
    loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then(m => m.EditModule)
  },
  {
    path: 'material',
    loadChildren: () => import('./material/material.module').then(m => m.MaterialModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
