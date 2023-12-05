import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from '../../pages/users/models';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent{

  public authUser$: Observable<User | null>;

  pageTitle: string = '';

  constructor (
    private authService: AuthService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router) {
    this.authUser$ = this.authService.authUser$;
    //****************** */
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Obtén el nombre de la ruta actual
      const currentRouteName = this.getCurrentRouteName(this.activatedRoute);
      this.pageTitle = currentRouteName || 'Default Title';
    });
  }
  
  private getCurrentRouteName(route: ActivatedRoute): string | null {
    let routeName = null;
    let currentRoute = route;
  
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
      // Usa el nombre de la ruta si está disponible
      if (currentRoute.routeConfig && currentRoute.routeConfig.path) {
        routeName = currentRoute.routeConfig.path;
      }
    }
    return routeName;
  }
    //****************** */

  
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