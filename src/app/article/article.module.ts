import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { MarkdownPipe } from './markdown.pipe';
import { ArticleResolver } from './article-resolver.service';
import { ArticleCommentComponent } from './article-comment.component';



@NgModule({
  declarations: [ArticleComponent, MarkdownPipe, ArticleCommentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ArticleRoutingModule
  ],
  providers: [
    ArticleResolver
  ]

})
export class ArticleModule { }
