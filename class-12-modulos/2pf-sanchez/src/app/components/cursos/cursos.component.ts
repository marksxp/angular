import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { map, Observable, Subscription } from 'rxjs';
import { Curso, CursosService } from 'src/app/services/cursos.service';
import { CursosEditComponent } from '../cursos-edit/cursos-edit.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  //cursos: any = [];
  cursos$: Observable<any>;
  cursosSubcription: Subscription;
  @ViewChild(MatTable) tabla!: MatTable<Curso>;

  columnas: string[] = ['id', 'codigo', 'nombre', 'codigoProfesor', 'codigoCurso', 'acciones'];

  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog
  ) { 
    this.cursos$ = this.cursosService.obtenerObservableCursos();
    this.cursosSubcription = this.cursos$.subscribe();
  }

  ngOnDestroy(): void {
    this.cursosSubcription.unsubscribe();
  }

  ngOnInit(): void {
  }

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.cursos$.pipe(
      map((cursos: any[]) => cursos.filter((curso) => curso.nombre.toString().toLocaleLowerCase() === valorObtenido.toLocaleLowerCase())) 
    ).subscribe((cursos) => {
      this.cursos$ = this.cursosService.filterObservableCursos(cursos);
    });
  }

  editar(elemento: Curso){
    const dialogRef = this.dialog.open(CursosEditComponent, {
      width: '450px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        this.cursos$ = this.cursosService.updateObservableCurso(resultado);
        this.tabla.renderRows();
      }
    })
  }

  eliminar(elemento: Curso){
    this.cursos$ = this.cursosService.deleteObservableCurso(elemento);
  }

  add(){
    const elemento = {id: '', codigo: '', nombre: '', codigoProfesor: '', codigoCurso: '', codigoClase: ''};

    const dialogRef = this.dialog.open(CursosEditComponent, {
      width: '450px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        this.cursos$ = this.cursosService.addObservableCurso(resultado);
        this.tabla.renderRows();
      }
    })
  }

}
