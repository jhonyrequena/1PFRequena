import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesComponent } from './inscripciones.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionEffects } from './store/inscripcion.effects';
import { inscripcionFeature } from './store/inscripcion.reducer';
import { StoreModule } from '@ngrx/store';
import { InscripcionesTableComponent } from './components/inscripciones-table/inscripciones-table.component';
import { DialogInscripcionComponent } from './components/dialog-inscripcion/dialog-inscripcion.component';



@NgModule({
  declarations: [
    InscripcionesComponent,
    InscripcionesTableComponent,
    DialogInscripcionComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedModule,
    StoreModule.forFeature(inscripcionFeature),
    EffectsModule.forFeature([InscripcionEffects])
  ]
})
export class InscripcionesModule { }
