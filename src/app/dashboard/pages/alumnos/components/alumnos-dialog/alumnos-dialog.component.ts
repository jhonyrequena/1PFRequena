import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from '../../model/alumno-model';

@Component({
  selector: 'app-alumnos-dialog',
  templateUrl: './alumnos-dialog.component.html',
  styleUrls: ['./alumnos-dialog.component.css']
})
export class AlumnosDialogComponent {

  alumnoForm: FormGroup;

  constructor (private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<AlumnosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public alumno?: Alumno,
    ){

      this.alumnoForm = this.formBuilder.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]]
      });

      if (this.alumno){
        this.alumnoForm.patchValue(this.alumno);
      }
    }

    onSubmit(): void {
      if (this.alumnoForm.invalid){
        this.alumnoForm.markAllAsTouched();
      }else{
        this.matDialogRef.close(this.alumnoForm.value)
      }
    }
}
