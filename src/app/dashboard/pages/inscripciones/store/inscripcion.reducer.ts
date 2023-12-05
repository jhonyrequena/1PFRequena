import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionActions } from './inscripcion.actions';
import { Inscripcion } from '../model/inscripcion-model';
import { Curso } from '../../cursos/model/curso_interface';
import { Alumno } from '../../alumnos/model/alumno-model';

export const inscripcionFeatureKey = 'inscripcion';

export interface State {
  isLoading: boolean;
  isLoadingDialogSelect: boolean;
  cursoOptions: Curso[];
  alumnoOptions: Alumno[];
  inscripciones: Inscripcion[];
  error: unknown;
}


export const initialState: State = {
  isLoading: false,
  isLoadingDialogSelect: false,
  cursoOptions: [],
  alumnoOptions: [],
  inscripciones: [],
  error: null,
};

export const reducer = createReducer(

  initialState,

  //loadInscripcions
  on(InscripcionActions.loadInscripcions, state => ({...state, isLoading: true})),

  //loadInscripcionsSuccess
  on(InscripcionActions.loadInscripcionsSuccess, (state, { data }) => ({...state, isLoading: false, inscripciones: data })),

  //loadInscripcionsFailure
  on(InscripcionActions.loadInscripcionsFailure, (state, { error }) => ({...state, isLoading: false, error })),

  //loadInscripcionsDialogSelection
  on(InscripcionActions.loadInscripcionsDialogSelection, (state) =>{
    return{...state, isLoadingDialogSelect: true,}
  }),

  //loadInscripcionsDialogSelectionSuccess
  on(InscripcionActions.loadInscripcionsDialogSelectionSuccess, (state, action) => ({...state, 
    cursoOptions: action.cursos,
    alumnoOptions: action.alumnos,
    isLoadingDialogSelect: false
  })),

  //loadInscripcionsDialogSelectionFailure
  on(InscripcionActions.loadInscripcionsDialogSelectionFailure, (state, action) => ({
    ...state, error: action.error,
    isLoadingDialogSelect: false,
  }))
);

export const inscripcionFeature = createFeature({
  name: inscripcionFeatureKey,
  reducer,
});

