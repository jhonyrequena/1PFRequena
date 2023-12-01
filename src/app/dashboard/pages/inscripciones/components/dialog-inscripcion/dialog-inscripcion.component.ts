import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscripcionActions } from '../../store/inscripcion.actions';
import { Observable } from 'rxjs';
import { Curso } from '../../../cursos/model/curso_interface';
import { Alumno } from '../../../alumnos/model/alumno-model';
import { selectAlumnoOptions, selectCursoOptions } from '../../store/inscripcion.selectors';

@Component({
  selector: 'app-dialog-inscripcion',
  templateUrl: './dialog-inscripcion.component.html',
  styleUrls: ['./dialog-inscripcion.component.css']
})


export class DialogInscripcionComponent {

  cursoOption$: Observable<Curso[]>;
  alumnoOption$: Observable<Alumno[]>;

  
  constructor(private store: Store){
    this.store.dispatch(InscripcionActions.loadInscripcionsDialogSelection());
    this.cursoOption$ = this.store.select(selectCursoOptions);
    this.alumnoOption$ = this.store.select(selectAlumnoOptions)
  }
}
