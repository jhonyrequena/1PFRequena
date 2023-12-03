import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CursosService } from '../../cursos.service';
import { Curso } from '../../model/curso_interface';

@Component({
  selector: 'app-cursos-dialog',
  templateUrl: './cursos-dialog.component.html',
  styleUrls: ['./cursos-dialog.component.css']
})
export class CursosDialogComponent {

  nameControl = new FormControl("", Validators.required);
  durationControl = new FormControl("", Validators.required);
  startDateControl = new FormControl();
  endDateControl = new FormControl();

  cursoForm = new FormGroup({
    name: this.nameControl, 
    duration: this.durationControl,
    startDate: this.startDateControl,
    endDate: this.endDateControl,
  });

  constructor (
    private matDialogRef: MatDialogRef<CursosDialogComponent>,
    private cursosService: CursosService,
    @Inject(MAT_DIALOG_DATA) public curso?: Curso,
    ){
      if (this.curso){
        this.cursoForm.patchValue(this.curso);
      }
    }
    
  onSubmit(): void {
    if (this.cursoForm.invalid){
      return this.cursoForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.cursoForm.value);
    }
  }
}
