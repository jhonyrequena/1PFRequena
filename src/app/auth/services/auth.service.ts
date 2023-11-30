import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/models';
import { environment } from 'src/environments/environment.local';
import { loginPayload } from '../models';
import { Router } from '@angular/router';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import { Store } from '@ngrx/store';
import { authActions } from 'src/app/store/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public authUser$ = this.store.select(selectAuthUser);

  constructor(
    private httpClient: HttpClient, 
    private router: Router, 
    private store: Store) {}

    private authUserHandle(authUser: User): void{
      this.store.dispatch(authActions.setAuthUser({ data: authUser }));
      localStorage.setItem('token', authUser.token);
    }
    
  login(payload: loginPayload): void {

    this.httpClient
    .get<User[]>(`${environment.baseUrl}/users?email=${payload.email}&password=${payload.password}`)
    .subscribe({
      next: (response) => {
        const authUser = response[0];

        if(!authUser){
          alert('Usuario o Contraseña invalidos')
        } else {
          this.authUserHandle(authUser);
          console.log(authUser)
          this.router.navigate(['/dashboard/home'])
        }
      },
      error: () => {
        alert('Error de conexion');
      },
    });
  }

  //aca la logica para guardar en el localstorage
  checkToken(): Observable<boolean>{
    return this.httpClient.get<User[]>(`${environment.baseUrl}/users?token=${localStorage.getItem('token')}`)
    .pipe(
      map((users) => {
        if (!users.length){
          return false;
        } else {
          const authUser = users[0];
          this.authUserHandle(authUser);
          return true;
        }
      })
    );
  }

  //Metodo para salir de la sesion
  logout(): void {
    //Aplicando Redux con ngrx
    this.store.dispatch(authActions.clearState());

    //aca agrego esta linea para limpiar el local storage
    localStorage.removeItem('token');

    //Redireccion mediante el router link hacia la pantalla de autenticacion
    this.router.navigate(['/auth/login']);
  }
}
