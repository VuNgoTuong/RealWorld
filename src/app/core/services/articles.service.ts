import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Article, ArticleListConfig } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class ArticlesService {
  constructor (
    private apiService: ApiService
  ) {}

  query(config: ArticleListConfig): Observable<{articles: Article[], articlesCount: number}> {
    const params = {};

    Object.keys(config.filters)
    .forEach((key) => {
      // params[key] = config.filters[key];
      // console.log('key',params.['key']);
      // console.log(params,key,config.filters);
    });

    return this.apiService
    .get(
      '/articles' + ((config.type === 'feed') ? '/feed' : ''),
      new HttpParams({ fromObject: params })
    );
  }

  get(slug: any): Observable<Article> {
    return this.apiService.get('/articles/' + slug)
      .pipe(map(data => data.article));
  }

  destroy(slug: any) {
    return this.apiService.delete('/articles/' + slug);
  }

  save(article:any): Observable<Article> {
    if (article.slug) {
      return this.apiService.put('/articles/' + article.slug, {article: article})
        .pipe(map(data => data.article));

    } else {
      return this.apiService.post('/articles/', {article: article})
        .pipe(map(data => data.article));
    }
  }

  favorite(slug: any): Observable<Article> {
    return this.apiService.post('/articles/' + slug + '/favorite');
  }

  unfavorite(slug: any): Observable<Article> {
    return this.apiService.delete('/articles/' + slug + '/favorite');
  }


}
