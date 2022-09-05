import { DataSource } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
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

  dataSource: MatTableDataSource<any>;
  //@ViewChild(MatTable) tabla!: MatTable<Curso>;
  @ViewChild(MatSort) sort!: MatSort;

  columnas: string[] = ['id', 'codigo', 'nombre', 'codigoProfesor', 'codigoClase', 'acciones'];

  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog
  ) { 
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.cursosService.obtenerObservableCursos().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
  }

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
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

