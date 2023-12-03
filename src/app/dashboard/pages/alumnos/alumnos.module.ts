import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlumnosTableComponent } from './components/alumnos-table/alumnos-table.component';
import { AlumnosDialogComponent } from './components/alumnos-dialog/alumnos-dialog.component';



@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnosTableComponent,
    AlumnosDialogComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule
  ]
})
export class AlumnosModule { }
