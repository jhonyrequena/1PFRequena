import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

export const dashboardGuard: CanActivateFn = (route, state) => {


  console.log('Guard Activado')

  const router = inject(Router)
  const authService = inject(AuthService);


  return authService.checkToken().pipe(map((userAuthenticated) => userAuthenticated ? true : router.createUrlTree(['/auth/login'])
 // const tokenValido = false;
  //return tokenValido ? router.createUrlTree(['/auth']) : true;
  /*return authService.authUser$.pipe(
    map((user) => {
      return !!user ? true : router.createUrlTree(['/auth/login']);
    })
  )*/
    )
  )
};
