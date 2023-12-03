import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from './model/alumno-model';
import { Observable, concatMap } from 'rxjs';
import { environment } from 'src/environments/environment.local';



@Injectable({
  providedIn: 'root'
})


export class AlumnosService {

  constructor(private httpClient: HttpClient) {}

  //Obtener (listar) Alumnos desde la base de datos
  getAlumnos(): Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>(`${environment.baseUrl}/alumnos`);
  }

  //Crear o Cargar un alumno Nuevo
  createAlumno(payload: Alumno): Observable<Alumno[]> {
    return this.httpClient.post<Alumno>(`${environment.baseUrl}/alumnos`, 
    payload).pipe(concatMap(() => this.getAlumnos()))
  }

  //Actualizar o editar un Alumno
  editAlumno(alumnoId: number, payload: Alumno): Observable<Alumno[]> {
    return this.httpClient.put<Alumno>(`${environment.baseUrl}/alumnos/${alumnoId}`,
    payload).pipe(concatMap(() => this.getAlumnos()))
  }

  //Eliminar un Alumno
  deleteAlumno(id: number): Observable<Alumno[]> {
    return this.httpClient.delete<Object>(`${environment.baseUrl}/alumnos/${id}`).pipe(concatMap(()=> this.getAlumnos()));
  }
}
