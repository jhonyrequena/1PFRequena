import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from '../../model/alumno-model';
import { Observable, map } from 'rxjs';
import { userRole } from '../../../users/models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-alumnos-table',
  templateUrl: './alumnos-table.component.html',
  styleUrls: ['./alumnos-table.component.css']
})
export class AlumnosTableComponent {

  @Input()

  dataSource: Alumno[] = [];

  @Output()
  editAlumno = new EventEmitter<Alumno>();

  @Output()
  deleteAlumno = new EventEmitter<number>();

  displayedColumns = ['id', 'fullname', 'email', 'actions'];

  userRole$: Observable<userRole | undefined>;

  constructor (private router: Router, private store: Store){
    this.userRole$ = this.store.select(selectAuthUser).pipe(map((alumno) => alumno?.role))
  }
}
