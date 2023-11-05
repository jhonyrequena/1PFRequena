import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: HomeComponent,
            }
        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class HomeRoutingModule { }
