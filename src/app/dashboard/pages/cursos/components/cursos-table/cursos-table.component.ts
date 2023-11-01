import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso } from '../../model/curso_interface';

@Component({
  selector: 'app-cursos-table',
  templateUrl: './cursos-table.component.html',
  styleUrls: ['./cursos-table.component.css']
})
export class CursosTableComponent {

    @Input()
    dataSource: Curso[] = [];

    @Output()
    editCurso = new EventEmitter();
    deleteCurso = new EventEmitter();

    displayedColumns = [ 'id', 'name', 'startDate', 'endDate', 'duration', 'actions' ]
}
