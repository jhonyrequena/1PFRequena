import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { UsersComponent } from "./pages/users/users.component";
import { AlumnosComponent } from "./pages/alumnos/alumnos.component";
import { InscripcionesComponent } from "./pages/inscripciones/inscripciones.component";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: DashboardComponent,
                children: [
                    {
                        path: 'home',
                        loadChildren: () => import('./pages/home/home.module').then((mod) => mod.HomeModule)
                    },
                    {
                        path: 'users',
                        loadChildren: () => import('./pages/users/users.module').then((mod) => mod.UsersModule)
                    },
                    {
                        path: 'cursos',
                        loadChildren: () => import ('./pages/cursos/cursos.module').then((mod) => mod.CursosModule)
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
            }
        ])
    ],
    exports: [RouterModule],
})

export class DashboardRoutingModule {}