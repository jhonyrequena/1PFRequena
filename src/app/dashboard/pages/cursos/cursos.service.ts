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
        {
          id: 2,
          name: 'Seguridad en Redes Empresariales',
          startDate: new Date('2023-11-05'),
          endDate: new Date('2023-11-28'),
          duration: 35,
          /*descripcion: 'Enfocado en la seguridad de redes empresariales, este curso cubre estrategias para proteger la infraestructura de red corporativa. Incluye configuración de firewalls, detección de intrusiones y mejores prácticas de seguridad para redes locales y en la nube.'*/
        },
        {
          id: 3,
          name: 'Ciberseguridad para Dispositivos Móviles',
          startDate: new Date('2023-12-03'),
          endDate: new Date('2023-12-20'),
          duration: 30,
          //descripcion: 'Dirigido a desarrolladores y profesionales de TI, este curso se centra en la seguridad de aplicaciones móviles y dispositivos. Cubre técnicas para asegurar aplicaciones en plataformas iOS y Android, así como medidas para proteger la privacidad del usuario.'
        },
        {
          id: 4,
          name: 'Protección de Datos y Cumplimiento Normativo',
          startDate: new Date('2024-01-05'),
          endDate: new Date('2024-01-25'),
          duration: 25,
          //descripcion: 'Este curso se enfoca en las leyes de privacidad y regulaciones de protección de datos, como el GDPR. Los participantes aprenderán sobre la gestión de incidentes de seguridad, evaluación de riesgos y medidas para cumplir con las leyes de privacidad.'
        },
        {
          id: 5,
          name: 'Ciberseguridad en Entornos Cloud',
          startDate: new Date('2024-02-01'),
          endDate: new Date('2024-02-20'),
          duration: 30,
          //descripcion: 'El curso explora los desafíos y soluciones de seguridad específicos para entornos de computación en la nube. Los temas incluyen autenticación, control de acceso, cifrado de datos y estrategias para asegurar datos sensibles almacenados en la nube.'
        },
    ];

    getCursos$(): Observable<Curso[]> {
        return of (this.cursos);
    }

    createCurso$(payload: Curso): Observable<Curso[]> {
        this.cursos.push(payload);
        return of ([...this.cursos]);
    }

    editCurso$(id: number, payload: Curso): Observable<Curso[]>{
      return of (
        this.cursos.map ((curso) => (curso.id === id ? {
          ...curso, ...payload } : curso))
      );
    }

    deleteCurso$ (id: number): Observable<Curso[]> {
      this.cursos = this.cursos.filter ((curso) => curso.id !== id);
      return of (this.cursos);
    }

    getCursoById$(id: number): Observable<Curso | undefined>{
      return of (this.cursos.find((curso) => curso.id === id));
    }
}
