import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionActions } from './inscripcion.actions';
import { Inscripcion } from '../model/inscripcion-model';

export const inscripcionFeatureKey = 'inscripcion';

export interface State {
  isLoading: boolean;
  inscripciones: Inscripcion[];
  error: unknown;
}

export const initialState: State = {
  isLoading: false,
  inscripciones: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(InscripcionActions.loadInscripcions, state => ({...state, isLoading: true})),
  on(InscripcionActions.loadInscripcionsSuccess, (state, { data }) => ({...state, isLoading: false, inscripciones: data })),
  on(InscripcionActions.loadInscripcionsFailure, (state, { error }) => ({...state, isLoading: false, error })),
);

export const inscripcionFeature = createFeature({
  name: inscripcionFeatureKey,
  reducer,
});

