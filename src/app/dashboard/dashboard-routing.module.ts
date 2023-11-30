import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { adminGuard } from "../core/guards/admin.guard";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: DashboardComponent,
                children: [
                    {
                        path: 'home', component: HomeComponent,
                    },
                    {
                        path: 'users',
                        canActivate: [adminGuard],
                        loadChildren: () => import('./pages/users/users.module').then((mod) => mod.UsersModule)
                    },
                    {
                        path: 'cursos',
                        loadChildren: () => import ('./pages/cursos/cursos.module').then((mod) => mod.CursosModule)
                    },
                    {
                        path: 'alumnos',
                        loadChildren: () => import ('./pages/alumnos/alumnos.module').then((mod) => mod.AlumnosModule)
                    },
                    {
                        path: 'inscripciones',
                        loadChildren: () => import('./pages/inscripciones/inscripciones.module').then((mod) => mod.InscripcionesModule)
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