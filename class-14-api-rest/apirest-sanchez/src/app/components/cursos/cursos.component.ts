import { DataSource } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { map, Observable, of, Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';
import { CursosEditComponent } from '../cursos-edit/cursos-edit.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  dataSource = new CursosDataSource(this.cursosService);
  @ViewChild(MatTable) tabla!: MatTable<Curso>;

  columnas: string[] = ['id', 'codigo', 'nombre', 'codigoProfesor', 'codigoClase', 'acciones'];

  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dataSource = new CursosDataSource(this.cursosService);
  }

  ngOnDestroy(): void {
  }

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
  }

  editar(curso: Curso){
    const dialogRef = this.dialog.open(CursosEditComponent, {
      width: '450px',
      data: curso
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        this.cursosService.updateObservableCurso(resultado);
        alert(`${curso.id}-${curso.nombre} fue editado satisfactoriamente`);
        this.ngOnInit();
      }
    })
  }

  eliminar(curso: Curso){
    this.cursosService.deleteObservableCurso(curso.id).subscribe((curso: Curso) => {
      alert(`${curso.id}-${curso.nombre} eliminado satisfactoriamente`);
      this.ngOnInit();
    });
  }

  add(){
    const curso = {id: '', codigo: '', nombre: '', codigoProfesor: '', codigoClase: ''};

    const dialogRef = this.dialog.open(CursosEditComponent, {
      width: '450px',
      data: curso
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        this.cursosService.addObservableCurso(resultado);
        alert(`${resultado.id}-${resultado.nombre} fue adicionado satisfactoriamente`);
        this.ngOnInit();
      }
    })
  }

}

export class CursosDataSource extends DataSource<any> {
  
  cursos: Curso[] = [];

  constructor(private cursosService: CursosService) {
    super();
  }
  connect(): Observable<Curso[]> {
    return this.cursosService.obtenerObservableCursos();
  }
  disconnect() {}
}
