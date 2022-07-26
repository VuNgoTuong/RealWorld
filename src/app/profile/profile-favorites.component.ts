import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Profile } from '../core';
import { ArticleListConfig } from '../core/models/article-list-config.model';

@Component({
  selector: 'app-profile-favorites',
  templateUrl: './profile-favorites.component.html'
})
export class ProfileFavoritesComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  profile!: Profile;
  favoritesConfig: ArticleListConfig = {
    type: 'all',
    filters: {}
  };

  ngOnInit() {
    this.route.parent!.data.subscribe(
      (data) => {
        this.profile = data?.['profile'];
        this.favoritesConfig.filters.favorited = this.profile.username;
      }
    );
  }

}
