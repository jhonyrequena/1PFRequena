import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscripcionActions } from '../../store/inscripcion.actions';
import { Observable, take } from 'rxjs';
import { Curso } from '../../../cursos/model/curso_interface';
import { Alumno } from '../../../alumnos/model/alumno-model';
import { selectAlumnoOptions, selectCursoOptions, selectLoadingDialogOptions } from '../../store/inscripcion.selectors';
import { FormControl, FormGroup } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-inscripcion',
  templateUrl: './dialog-inscripcion.component.html',
  styleUrls: ['./dialog-inscripcion.component.css']
})


export class DialogInscripcionComponent {

  alumnoIdControl = new FormControl<number | null>(null);
  cursoIdControl = new FormControl<number | null>(null);

  inscripcionForm = new FormGroup({
    cursoId: this.cursoIdControl,
    alumnoId: this.alumnoIdControl,
  })

  cursoOption$: Observable<Curso[]>;
  alumnoOption$: Observable<Alumno[]>;
  isLoading$: Observable<boolean>;

  
  constructor(private store: Store, private actions$: Actions, private matDialogRef: MatDialogRef<DialogInscripcionComponent>){
    this.store.dispatch(InscripcionActions.loadInscripcionsDialogSelection());
    this.cursoOption$ = this.store.select(selectCursoOptions);
    this.alumnoOption$ = this.store.select(selectAlumnoOptions);
    this.isLoading$ = this.store.select(selectLoadingDialogOptions);

    this.actions$.pipe(ofType(InscripcionActions.loadInscripcions), take(1)).subscribe({
      next: () => this.matDialogRef.close(),
    });
  }

  onSubmit(): void {
    this.store.dispatch(InscripcionActions.createInscripcion({ payload: this.inscripcionForm.getRawValue() }))
  }
}
