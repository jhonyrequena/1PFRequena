import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dash-form',
  templateUrl: './dash-form.component.html',
  styleUrls: ['./dash-form.component.css']
})
export class DashFormComponent {
  userForm: FormGroup;

  constructor (private fb: FormBuilder){
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }
}
