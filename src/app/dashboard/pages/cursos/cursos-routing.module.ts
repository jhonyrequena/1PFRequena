import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: CursosComponent,
            }
        ])
    ],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class CursosRoutingModule { }
