import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap } from 'rxjs';
import { Inscripcion, createInscripcionPayload } from './model/inscripcion-model';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root'
})

export class InscripcionesService {

  constructor(private httpClient: HttpClient) { }

  //Aca se obtienen los datos para cargar las opciones que contienen las inscripciones
  getInscripciones(): Observable<Inscripcion[]>{
    return this.httpClient.get<Inscripcion[]>(`${environment.baseUrl}/inscripciones?_expand=curso&_expand=alumno`);
  }

  createInscripcion(payload: createInscripcionPayload): Observable<Inscripcion> {
    return this.httpClient.post<Inscripcion>(`${environment.baseUrl}/inscripciones`, payload)
  }

  editInscripcion(id: number, payload: createInscripcionPayload): Observable<Inscripcion[]>{
    return this.httpClient.put<Inscripcion>(`${environment.baseUrl}/inscripciones/${id}`, payload).pipe(
      concatMap(() => this.getInscripciones()))
  }

  deleteInscripcion (id: number): Observable<Inscripcion[]> {
    return this.httpClient.delete<Object>(`${environment.baseUrl}/inscripcion/${id}`).pipe(
      concatMap(() => this.getInscripciones()));
  }
}
