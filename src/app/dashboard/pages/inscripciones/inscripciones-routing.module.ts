import { NgModule } from "@angular/core";
import { InscripcionesComponent } from "./inscripciones.component";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    {
        path: '', component: InscripcionesComponent,
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    
})
export class InscripcionesRoutingModule { }