import { Injectable } from "@angular/core";
import { Curso } from "./model/curso_interface";
import { Observable, of } from "rxjs";


@Injectable({ providedIn: 'root' })
export class CursosService {

    cursos: Curso[] = [
        {
            id: 1,
            name: 'Certificación en Seguridad Informática',
            startDate: new Date(),
            endDate: new Date(),
            duration: 40,
            /*description: 'Este curso proporciona una comprensión profunda de las amenazas de seguridad informática y las técnicas para proteger sistemas y datos contra ataques cibernéticos. Incluye temas como criptografía, análisis forense y técnicas de hacking ético.',*/
          },
    ];

    getCursos$(): Observable<Curso[]> {
        return of (this.cursos);
    }
}
