import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';
import { cargarCursos } from '../../state/cursos.actions';
import { CursoState } from '../../state/cursos.reducer';
import { selectCargandoState, selectCursosCargadosState } from '../../state/cursos.selectors';
import { CursosEditComponent } from '../cursos-edit/cursos-edit.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  cargando$!: Observable<boolean>;
  cursos$!: Observable<Curso[] | undefined>;
  
  dataSource: MatTableDataSource<any>;
  //@ViewChild(MatTable) tabla!: MatTable<Curso>;
  @ViewChild(MatSort) sort!: MatSort;

  columnas: string[] = ['id', 'codigo', 'nombre', 'codigoProfesor', 'codigoClase', 'acciones'];

  constructor(
    private store: Store<CursoState>,
    private cursosService: CursosService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { 
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    /*this.cursosService.obtenerObservableCursos().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
    });*/

    this.store.dispatch(cargarCursos());
    this.cargando$ = this.store.select(selectCargandoState);
    
    this.cursos$ = this.store.select(selectCursosCargadosState);
    this.cursos$.subscribe((response) => {
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
        this.store.dispatch(cargarCursos());
        this.ngOnInit();
      }
    })
  }

  eliminar(curso: Curso){
    this.cursosService.deleteObservableCurso(curso.id).subscribe((curso: Curso) => {
      alert(`${curso.id}-${curso.nombre} eliminado satisfactoriamente`);
      this.store.dispatch(cargarCursos());
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
        this.store.dispatch(cargarCursos());
        this.ngOnInit();
      }
    })
  }

}

