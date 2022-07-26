import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EditRoutingModule } from './edit-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { editComponent } from './edit.component';
import { EditableArticleResolver } from './editable-article-resolver.service';



@NgModule({
  declarations: [editComponent],
  imports: [
    CommonModule,
    SharedModule,
    EditRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EditableArticleResolver]
})
export class EditModule { }
