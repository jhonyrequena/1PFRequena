import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogUsersComponent } from './components/dialog-users/dialog-users.component';
import { User } from './models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

export class UsersComponent {

  userName = '';

  users: User[]= [
    /*{
      id: 1,
      name: 'Bart',
      lastName: 'Simpson',
      email: 'simpsonbart@mail.com'
    },
    {
      id: 2,
      name: 'Lisa',
      lastName: 'Simpson',
      email: 'simpsonlisa@mail.com'
    },
    {
      id: 3,
      name: 'Homero',
      lastName: 'Simpson',
      email: 'simpsonhomero@mail.com'
    },
    {
      id: 4,
      name: 'Marge',
      lastName: 'Simpson',
      email: 'simpsonmarge@mail.com'
    },
    {
      id: 5,
      name: 'Maggie',
      lastName: 'Simpson',
      email: 'simpsonmaggie@mail.com'
    }*/
  ]

  constructor(private matDialog: MatDialog){}

  openUsersDialog(): void {
    this.matDialog.open(DialogUsersComponent).afterClosed().subscribe({
      next: (v) => {
        
        if (!!v) {
          //Encuentra el ultimo ID
          const maxId = Math.max(...this.users.map(user => user.id));

          //Asigna el nuevo ID
          const newId = maxId + 1;

          this.users = [...this.users, {...v, id: newId}];
        }
      },
    });
  }

  onEditUser(user: User): void{
    this.matDialog.open(DialogUsersComponent, {
      data: user,}).afterClosed().subscribe({
      next: (v) => {
        if (!!v){
          this.users = this.users.map((editUser) =>
          editUser.id === user.id ? { ...editUser, ...v} : editUser);
        }
      }
    });
  }

  onDeleteUser(userId: number): void {
    if (confirm('Borrar Usuario, Esta seguro?')){

      //Filtra el usuario a eliminar
      this.users = this.users.filter((u) => u.id !== userId);

      //Reasigna los IDs de manera correlativa
      this.users.forEach((user, index) =>{
        user.id = index + 1;
      });
    }
  }
}

function openUsersDialog() {
  throw new Error('Function not implemented.');
}

  

