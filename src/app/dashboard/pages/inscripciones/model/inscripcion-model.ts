import { Alumno } from "../../alumnos/model/alumno-model";
import { Curso } from "../../cursos/model/curso_interface";

export interface Inscripcion {
    id: number;
    courseId: number;
    alumnoId: number;
    alumno?: Alumno;
    curso?: Curso;
}