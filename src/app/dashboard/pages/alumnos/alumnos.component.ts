import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from './model/alumno-model';
import { AlumnosService } from './alumnos.service';
import { MatDialog } from '@angular/material/dialog';
import { AlumnosDialogComponent } from './components/alumnos-dialog/alumnos-dialog.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {

  //alumnoName: '';

  alumnos$: Observable<Alumno[]>;

  constructor (
    private alumnosService: AlumnosService,
    private matDialog: MatDialog) {

    this.alumnos$ = this.alumnosService.getAlumnos();
  }

  //Crear un alumno Nuevo
  addAlumno(): void {
    this.matDialog.open(AlumnosDialogComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    }).afterClosed().subscribe({
      next: (value) => {
        if (!!value) {
          this.alumnos$ = this.alumnosService.createAlumno(value);
        }
      }
    })
  }

  //Actualizar o Editar un alumno
   toEditAlumno(alumno: Alumno): void {
     this.matDialog.open(AlumnosDialogComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
       data: alumno,
      }).afterClosed().subscribe({
         next: (value) => {
           if (!!value){
             this.alumnos$ = this.alumnosService.editAlumno(alumno.id, value)
           }
         }
       })
   }

  //Metodo para Eliminar un Alumno
  toDeleteAlumno(alumnoId: number): void{
    if (confirm('Eliminar alumno, esta seguro?')){
      this.alumnos$ = this.alumnosService.deleteAlumno(alumnoId);
    }
  }
}
