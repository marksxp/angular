import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly api: string = 'https://6310364c826b98071a3b07df.mockapi.io';

  constructor(
    private http: HttpClient
  ) { }

  login(usuarioIn: string, contrasena: string) {
    return this.http.get<Usuario[]>(`${this.api}/usuarios`).pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter((usuario: Usuario) => usuario.usuario === usuarioIn && usuario.contrasena === contrasena)[0]
      })
    )
  }
}
