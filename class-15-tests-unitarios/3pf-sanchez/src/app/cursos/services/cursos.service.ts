import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService implements OnInit {

  private api: string = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  obtenerObservableCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.api}/sxp-cursos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });

  }

  updateObservableCurso(curso: Curso) {
    return this.http.put<Curso>(`${this.api}/sxp-cursos/${curso.id}`, curso)
    .subscribe();
  }

  deleteObservableCurso(id: string) {
    return this.http.delete<Curso>(`${this.api}/sxp-cursos/${id}`);
  }

  addObservableCurso(curso: Curso) {
    return this.http.post<Curso>(`${this.api}/sxp-cursos`, curso)
    .subscribe();
  }

}
