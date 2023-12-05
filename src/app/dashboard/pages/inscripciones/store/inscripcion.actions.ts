import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Inscripcion, createInscripcionPayload } from '../model/inscripcion-model';
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

    'Create Inscripcion': props<{ payload: createInscripcionPayload }>(),
    'Create Inscripcion Failure': props<{ error: unknown }>(),

    'Get Inscripcion': props<{ id: number }>(),
    'Get Inscripcion Success': props<{ obj: Inscripcion}>(),

    'Edit Inscripcion': props<{ data: Inscripcion[]}>(),
    'Edit Inscripcion Success': props<{ data: Inscripcion[]}>(),

    'Delete Inscripcion': props<{ id: number}>(),
    'Delete Inscripcion Success': props<{ id: number}>(),
    'Delete Inscripcion Failure': props<{ error: unknown }>()
  },
});
