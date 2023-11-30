import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Inscripcion } from '../../model/inscripcion-model';
import { selectInscripciones } from '../../store/inscripcion.selectors';

@Component({
  selector: 'app-inscripciones-table',
  templateUrl: './inscripciones-table.component.html',
  styleUrls: ['./inscripciones-table.component.css']
})
export class InscripcionesTableComponent {
  displayedColumns = ['id', 'alumno', 'curso', 'actions'];

  inscripciones$: Observable<Inscripcion[]>;

  constructor(private store: Store) {
    this.inscripciones$ = this.store.select(selectInscripciones)
  }
}
