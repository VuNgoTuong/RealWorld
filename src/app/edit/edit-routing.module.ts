import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core';
import { editComponent } from './edit.component';
import { EditableArticleResolver } from './editable-article-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: editComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':slug',
    component: editComponent,
    canActivate: [AuthGuard],
    resolve: {
      article: EditableArticleResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule {}
