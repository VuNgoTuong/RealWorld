import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material.component';
import { Material1Component } from './material1/material1.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialComponent,
  },
  {
    path: 'material1',
    component: Material1Component,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule {}
