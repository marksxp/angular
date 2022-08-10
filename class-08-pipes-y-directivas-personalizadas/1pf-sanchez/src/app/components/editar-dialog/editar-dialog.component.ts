import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../tabla/tabla.component';

@Component({
  selector: 'app-editar-dialog',
  templateUrl: './editar-dialog.component.html',
  styleUrls: ['./editar-dialog.component.css']
})
export class EditarDialogComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) { 
    this.formulario = fb.group({
      id: new FormControl(data.id),
      username: new FormControl(data.username),
      email: new FormControl(data.email),
      //profesor: new FormControl(data.profesor.nombre),
      profesor: this.fb.group({
        nombre: new FormControl(data.profesor.nombre),
        codigo: new FormControl(data.profesor.codigo)
      }),
      website: new FormControl(data.website)
      //estado: new FormControl(data.cursos.estado)
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
