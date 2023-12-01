import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, forkJoin, of } from 'rxjs';
import { InscripcionActions } from './inscripcion.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { Inscripcion } from '../model/inscripcion-model';
import { Curso } from '../../cursos/model/curso_interface';
import { Alumno } from '../../alumnos/model/alumno-model';
import { AlumnosComponent } from '../../alumnos/alumnos.component';


@Injectable()
export class InscripcionEffects {

  loadInscripcions$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscripcionActions.loadInscripcions),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getInscripciones().pipe(
          map(data => InscripcionActions.loadInscripcionsSuccess({ data })),
          catchError(error => of(InscripcionActions.loadInscripcionsFailure({ error }))))
      )
    );
  });

  loadInscripcionDialogSelect$ = createEffect(() => this.actions$.pipe(
    ofType(InscripcionActions.loadInscripcionsDialogSelection),
    concatMap(() => 
      this.getInscripcionDialogSelection().pipe(
        map((resp) =>
          InscripcionActions.loadInscripcionsDialogSelectionSuccess(resp)),
          
      catchError((err) => 
        of(InscripcionActions.loadInscripcionsDialogSelectionFailure({ error: err })))
    ))
  ))

  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  getInscripcionDialogSelection(): Observable<{
    cursos: Curso[];
    alumnos: Alumno[]
  }>{
    return forkJoin([
      this.httpClient.get<Curso[]>(`${environment.baseUrl}/cursos`),
      this.httpClient.get<Alumno[]>(`${environment.baseUrl}/alumnos`)
    ]).pipe(
      map(([cursos, alumnos]) => {
        return{ cursos, alumnos }
      })
    )
  }

  getInscripciones(): Observable<Inscripcion[]>{
    return this.httpClient.get<Inscripcion[]>(`${environment.baseUrl}/inscripciones?_expand=curso&_expand=alumno`);
  }
}
