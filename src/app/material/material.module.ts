import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import { MaterialRoutingModule } from './material-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { Material1Component } from './material1/material1.component';


@NgModule({
  declarations: [MaterialComponent,
    Material1Component
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
