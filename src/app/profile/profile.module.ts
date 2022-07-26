import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileResolver } from './profile-resolver.service';
import { ProfileArticlesComponent } from './profile-articles.component';
import { ProfileFavoritesComponent } from './profile-favorites.component';

@NgModule({
  declarations: [ProfileComponent,
    ProfileArticlesComponent,
    ProfileFavoritesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
  ],
  providers: [ProfileResolver]
})
export class ProfileModule { }
