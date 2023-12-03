import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from '../../pages/users/models';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent{

  public authUser$: Observable<User | null>;

  constructor (private authService: AuthService) {
    this.authUser$ = this.authService.authUser$;
  }
  
  get fullName$(): Observable<string> {
    return this.authUser$.pipe(
      map((user) => `${user?.name} ${user?.lastName}`)
    );
  }

  get email$(): Observable<string | undefined> {
    return this.authUser$.pipe(map((user) => user?.email))
  }

    logout(): void {
      this.authService.logout();
    }

  @Output()
    toggleSidebar = new EventEmitter();

}