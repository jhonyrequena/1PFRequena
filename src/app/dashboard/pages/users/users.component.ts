import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogUsersComponent } from './components/dialog-users/dialog-users.component';
import { User } from './models';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

export class UsersComponent{

  userName = '';

  users$: Observable<User[]>;

  constructor(
    private matDialog: MatDialog, 
    private usersService: UsersService,){

      this.users$ = this.usersService.getUsers();
  }

//Metodo para crear un Usuario
  addUser(): void {
    this.matDialog.open(DialogUsersComponent).afterClosed().subscribe({
      next: (value) => {
        if (!!value) {
                this.users$ = this.usersService.createUser(value);
              }
        }
    });
  }

//Metodo para editar un Usuario
  toEditUser(user: User): void {
    this.matDialog.open(DialogUsersComponent, {
      data: user,}).afterClosed().subscribe({
      next: (value) => {
        if (!!value){
          this.users$ = this.usersService.editUser(user.id, value);
        }
      }
    });
  }

//Metodo para Eliminar un Usuario
  toDeleteUser(userId: number): void {
    if (confirm('Borrar Usuario, Esta seguro?')){
     this.users$ = this.usersService.deleteUser(userId)
    }
  }
}

function openUsersDialog() {
  throw new Error('Function not implemented.');
}


  

