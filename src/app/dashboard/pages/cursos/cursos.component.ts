import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { Observable } from 'rxjs';
import { Curso } from './model/curso_interface';
import { MatDialog } from '@angular/material/dialog';
import { CursosDialogComponent } from './components/cursos-dialog/cursos-dialog.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent {

 cursos$: Observable<Curso[]>;

  constructor (
    private cursosService: CursosService, 
    private matDialog: MatDialog
    ) {
    this.cursos$ = this.cursosService.getCursos();
  }

//Metodo para Agregar un curso
  addCourse(): void {
    this.matDialog.open(CursosDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if (!!result) {
          this.cursos$ = this.cursosService.createCurso(result);
        }
      }
    });
  }

  //Metodo para editar un curso
  toEditCurso(curso: Curso): void {
    this.matDialog.open(CursosDialogComponent, {
      data: curso,
    }).afterClosed().subscribe({
      next: (result) => {
        if (!!result){
          this.cursos$ = this.cursosService.editCurso(curso.id, result);
        }
      }
    });
  }

//Metodo para eliminar un curso
  toDeleteCurso(id: number): void {
    if (confirm('Se eliminara este curso, estas seguro?')){
      this.cursos$ = this.cursosService.deleteCurso(id);
    }
  }

  // Función para mostrar alerta
  
}
