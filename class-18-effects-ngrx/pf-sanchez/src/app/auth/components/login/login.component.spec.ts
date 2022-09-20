import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene invalido cuando ingreso un solo campo', () => {
    const formulario = component.formulario;
    const usuario = formulario.controls['usuario'];

    usuario.setValue('sxp');

    expect(formulario.invalid).toBeTrue();
  });

  it('El formulario se cambia a válido cuando ingreso los campos requeridos', () => {
    const formulario = component.formulario;
    const usuario = formulario.controls['nombre'];
    const contrasena = formulario.controls['profesor'];

    usuario.setValue('sxp');
    contrasena.setValue('1234');

    expect(formulario.invalid).toBeFalse();
  });
});
