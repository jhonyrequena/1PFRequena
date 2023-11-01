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

  constructor (private cursosService: CursosService, private matDialog: MatDialog) {

    this.cursos$ = this.cursosService.getCursos$();
  }

  addCourse(): void {
    
    this.matDialog.open(CursosDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.cursos$ = this.cursosService.createCurso$({
            id: Math.floor(Math.random()*10+1),
            name: result.name,
            startDate: result.startDate,
            endDate: result.endDate,
            duration: Math.floor(Math.random()*20),
          });
        }
      }
    });
  }
//En esta parte del codigo tuve que agregar ANY como parte del cursoId 
//porque me tomaba como error el evento en el componente HTML
  deleteCurso(cursoId: number | any): void {
    this.cursos$ = this.cursosService.deleteCurso$(cursoId);
  }

  editCurso(cursoId: number | any): void {
    this.matDialog.open(CursosDialogComponent, {
      data: cursoId,
    }).afterClosed().subscribe({
      next: (result) => {
        if (!!result){
          this.cursos$ = this.cursosService.editCurso$(cursoId, result);
        }
      }
    });
  }
}
