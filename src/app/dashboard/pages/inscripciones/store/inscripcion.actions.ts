import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Inscripcion } from '../model/inscripcion-model';
import { Alumno } from '../../alumnos/model/alumno-model';
import { Curso } from '../../cursos/model/curso_interface';

export const InscripcionActions = createActionGroup({
  source: 'Inscripcion',
  events: {
    'Load Inscripcions': emptyProps(),
    'Load Inscripcions Success': props<{ data: Inscripcion[] }>(),
    'Load Inscripcions Failure': props<{ error: unknown }>(),
    'Load Inscripcions Dialog Selection': emptyProps(),
    'Load Inscripcions Dialog Selection Success': props<{ cursos: Curso[]; alumnos: Alumno[]}>(),
    'Load Inscripcions Dialog Selection Failure': props<{ error: unknown }>(),
  },
});
