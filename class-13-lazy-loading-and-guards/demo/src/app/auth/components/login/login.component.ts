import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    usuario: new FormControl('abner', [Validators.required]),
    constrasena: new FormControl('1234', [Validators.required])
  });

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    const usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      constrasena: this.formulario.value.constrasena
    }
    //console.log(this.formulario);
    this.auth.iniciarSesion(usuario);
    this.router.navigate(['inicio']);
  }

}
