import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { Observable } from 'rxjs';
import { Curso } from './model/curso_interface';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent {

 cursos$: Observable<Curso[]>;

  constructor (private cursosService: CursosService) {

    this.cursos$ = this.cursosService.getCursos$();
  }
}
