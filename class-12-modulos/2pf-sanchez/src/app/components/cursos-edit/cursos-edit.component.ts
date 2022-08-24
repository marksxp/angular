import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos-edit',
  templateUrl: './cursos-edit.component.html',
  styleUrls: ['./cursos-edit.component.css']
})
export class CursosEditComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CursosEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso  
  ) {

    this.formulario = fb.group({
      id: new FormControl(data.id),
      codigo: new FormControl(data.codigo),
      nombre: new FormControl(data.nombre),
      codigoProfesor: new FormControl(data.codigoProfesor),
      codigoClase: new FormControl(data.codigoClase),
    })
  }

  ngOnInit(): void {
  }

  actualizar(){
    this.dialogRef.close(this.formulario.value);
  }

  cerrar(){
    this.dialogRef.close();
  }

}
