import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Inscripcion } from '../model/inscripcion-model';

export const InscripcionActions = createActionGroup({
  source: 'Inscripcion',
  events: {
    'Load Inscripcions': emptyProps(),
    'Load Inscripcions Success': props<{ data: Inscripcion[] }>(),
    'Load Inscripcions Failure': props<{ error: unknown }>(),
  }
});
