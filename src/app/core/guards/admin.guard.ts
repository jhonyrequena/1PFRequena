import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';

export const adminGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router)

  return store.select(selectAuthUser).pipe(map((user) => {

    if (user?.role !== 'ADMIN') {
      
      return router.createUrlTree(['/dashboard/home']);
      } else {
        return true;
      }
    })
  );
};