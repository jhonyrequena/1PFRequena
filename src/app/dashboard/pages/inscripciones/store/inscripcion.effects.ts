import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { InscripcionActions } from './inscripcion.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { Inscripcion } from '../model/inscripcion-model';


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


  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  getInscripciones(): Observable<Inscripcion[]>{
    return this.httpClient.get<Inscripcion[]>(`${environment.baseUrl}/inscripciones?_expand=curso&_expand=alumno`);
  }
}
