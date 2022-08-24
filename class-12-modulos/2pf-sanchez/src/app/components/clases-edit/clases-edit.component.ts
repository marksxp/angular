import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clase } from 'src/app/services/clases.service';

@Component({
  selector: 'app-clases-edit',
  templateUrl: './clases-edit.component.html',
  styleUrls: ['./clases-edit.component.css']
})
export class ClasesEditComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ClasesEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Clase  
  ) {

    this.formulario = fb.group({
      id: new FormControl(data.id),
      codigo: new FormControl(data.codigo),
      nombre: new FormControl(data.nombre),
      temas: new FormControl(data.temas),
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
