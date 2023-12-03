import { Injectable } from "@angular/core";
import { Curso } from "./model/curso_interface";
import { Observable, concatMap, of } from "rxjs";
import { environment } from "src/environments/environment.local";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class CursosService {

  constructor (private httpClient: HttpClient) {}
  
    getCursos(): Observable<Curso[]> {
      return this.httpClient.get<Curso[]>(`${environment.baseUrl}/cursos`);
    }

    createCurso(payload: Curso): Observable<Curso[]> {
      return this.httpClient.post<Curso>(`${environment.baseUrl}/cursos`, payload).pipe(concatMap(() => this.getCursos()))
    }

    editCurso(cursoId: number, payload: Curso): Observable<Curso[]>{
      return this.httpClient.put<Curso>(`${environment.baseUrl}/cursos/${cursoId}`, payload).pipe(concatMap(() => this.getCursos()))
    }

    deleteCurso (id: number): Observable<Curso[]> {
      return this.httpClient.delete<Object>(`${environment.baseUrl}/cursos/${id}`).pipe(concatMap(() => this.getCursos()));
    }
}
