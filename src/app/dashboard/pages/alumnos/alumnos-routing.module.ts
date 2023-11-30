import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlumnosComponent } from "./alumnos.component";


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: AlumnosComponent,
            }
        ])
    ],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class AlumnosRoutingModule { }