import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, userRole } from '../../models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})

export class UsersTableComponent {
  @Input()

  dataSource: User[] = [];

  @Output()
  deleteUser = new EventEmitter<number>();

  @Output()
  editUser = new EventEmitter<User>();

  displayedColumns = ['id', 'fullname', 'email', 'role', 'actions'];

  userRole$: Observable<userRole | undefined>;

  constructor(private router: Router, private store: Store){
    this.userRole$ = this.store.select(selectAuthUser).pipe(map((user) => user?.role))
  }

  //Mapeo de Roles
  ObtenerNombreRol(rol: string): string{
    switch (rol) {
      case 'ADMIN':
        return 'Administrador';
      
      case 'EMPLOYEE':
        return 'Empleado';

      default:
        return rol;
    }
  }
}
