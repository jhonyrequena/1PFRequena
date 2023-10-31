import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { CursosComponent } from './dashboard/pages/cursos/cursos.component';
import { AlumnosComponent } from './dashboard/pages/alumnos/alumnos.component';
import { InscripcionesComponent } from './dashboard/pages/inscripciones/inscripciones.component';

const routes: Routes = [

  {
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      {
        path: 'home', component: HomeComponent,
      },
      {
        path: 'users', component: UsersComponent,
      },
      {
        path: 'cursos', component: CursosComponent,
      },
      {
        path: 'alumnos', component: AlumnosComponent,
      },
      {
        path: 'inscripciones', component: InscripcionesComponent,
      },
      {
        path: '**', redirectTo: 'home',
      }
    ]
  },
  {
    path: 'auth', component: AuthComponent,
  },
  {
    path: '**', redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
