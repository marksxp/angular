import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Curso } from '../models/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly api: string = 'https://6310364c826b98071a3b07df.mockapi.io';

  constructor(
    private http: HttpClient
  ) { }

  obtenerCursos(): Observable<Curso[]> {
    //return this.http.get(this.api + '/cursos');
    //return this.http.get<Curso[]>(`${this.api}/cursos`).pipe(delay(2000));
    return this.http.get<Curso[]>(`${this.api}/cursos`);
  }
}
