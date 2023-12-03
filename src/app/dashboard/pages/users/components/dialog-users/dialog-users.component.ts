import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models';

@Component({
  selector: 'app-dialog-users',
  templateUrl: './dialog-users.component.html',
  styleUrls: ['./dialog-users.component.css']
})
export class DialogUsersComponent {
  userForm: FormGroup;

  constructor (private formBuilder: FormBuilder, 
    private matDialogRef: MatDialogRef<DialogUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public user?: User,
    ){

    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    });

    if (this.user){
      this.userForm.patchValue(this.user);
    }
  }

  onSubmit(): void {
    if (this.userForm.invalid){
      this.userForm.markAllAsTouched();
    } else{
      this.matDialogRef.close(this.userForm.value)
    }
  }
}
