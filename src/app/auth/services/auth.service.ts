import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/models';
import { environment } from 'src/environments/environment.local';
import { loginPayload } from '../models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _authUser$ = new BehaviorSubject<User | null>(null);

  public authUser$ = this._authUser$.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(payload: loginPayload): void {

    this.httpClient
    .get<User[]>(`${environment.baseUrl}/users?email=${payload.email}&password=${payload.password}`)
    .subscribe({
      next: (response) => {
        if(!response.length){

          alert('Usuario o Contraseña invalidos')
        } else {

          const authUser = response[0];
          this._authUser$.next(authUser);
          localStorage.setItem('token', authUser.token);
          this.router.navigate(['/dashboard/home'])
        }
      },
    });
  }

  //aca la logica para guardar el localstorage
  checkToken(): Observable<boolean>{
    return this.httpClient.get<User[]>(`${environment.baseUrl}/users?token=${localStorage.getItem('token')}`)
    .pipe(
      map((users) => {
        if (!users.length){
          return false;
        } else {
          const authUser = users[0];
          localStorage.setItem('token', authUser.token);
          return true;
        }
      })
    )
  };

  //Metodo para salir de la sesion
  logout(): void {

    this._authUser$.next(null);
    //aca agrego esta linea para limpiar el local storage
    //localStorage.removeItem('token');
    this.router.navigate(['/auth/login'])
  }
}
