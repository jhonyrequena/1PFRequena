import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscripcionActions } from './store/inscripcion.actions';
import { MatDialog } from '@angular/material/dialog';
import { DialogInscripcionComponent } from './components/dialog-inscripcion/dialog-inscripcion.component';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent {
  constructor(private store: Store, private matDialog: MatDialog){
    this.store.dispatch(InscripcionActions.loadInscripcions())
  }

  crearInscripcion(): void {
    this.matDialog.open(DialogInscripcionComponent)
  }
}
