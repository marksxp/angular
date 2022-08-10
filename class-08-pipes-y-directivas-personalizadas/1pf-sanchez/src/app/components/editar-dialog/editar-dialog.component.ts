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
      student: this.fb.group({
        name: new FormControl(data.student.name),
        lastname: new FormControl(data.student.lastname),
      }),
      username: new FormControl(data.username),
      email: new FormControl(data.email),
      profesor: this.fb.group({
        nombre: new FormControl(data.profesor.nombre),
        //codigo: new FormControl(data.profesor.codigo)
      }),
      website: new FormControl(data.website),
      cursos: this.fb.group({
        nombre: new FormControl(data.cursos.nombre),
        clases: new FormControl(data.cursos.clases),
        estado: new FormControl(data.cursos.estado),
      })
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
