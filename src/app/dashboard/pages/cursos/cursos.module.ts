import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosTableComponent } from './components/cursos-table/cursos-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosDialogComponent } from './components/cursos-dialog/cursos-dialog.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursosTableComponent,
    CursosDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [],
})
export class CursosModule { }
