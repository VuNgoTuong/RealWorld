import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile, User } from '../core/models';
import { UserService } from '../core/services';
import { concatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private userService: UserService) {
    }

  profile!: Profile;
  currentUser!: User;
  isUser!: boolean;

  ngOnInit(): void {
    this.route.data.pipe(
      concatMap((data) => {
        this.profile = data?.['profile'];
        // console.log(this.profile);
        return this.userService.currentUser.pipe(tap(
          (userData: User) => {
            this.currentUser = userData;
            this.isUser = (this.currentUser.username === this.profile.username);
          }
        ));
      })
    ).subscribe();
  }

}
