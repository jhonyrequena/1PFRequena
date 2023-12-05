import { Alumno } from "../../alumnos/model/alumno-model";
import { Curso } from "../../cursos/model/curso_interface";

export interface Inscripcion {
    id: number;
    cursoId: number;
    alumnoId: number;
    alumno?: Alumno[];
    curso?: Curso[];
}

export interface createInscripcionPayload {
    cursoId: number | null;
    alumnoId: number | null;
}