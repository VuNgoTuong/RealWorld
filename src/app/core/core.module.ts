import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService, ArticlesService, CommentsService, JwtService, UserService } from './services';
import { AuthGuard } from './services/auth-guard.service';
import { HttpTokenInterceptor } from './interceptors';
import { ProfilesService } from './services/profiles.service';
import { TagsService } from './services/tags.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [UserService,
              ApiService,
              JwtService,
              AuthGuard,
              ProfilesService,
              ArticlesService,
              CommentsService,
              TagsService,
              { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
            ]
})
export class CoreModule { }
