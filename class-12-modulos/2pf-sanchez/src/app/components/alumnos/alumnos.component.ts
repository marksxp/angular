import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { map, Observable, Subscription } from 'rxjs';
import { Alumno, AlumnosService } from 'src/app/services/alumnos.service';
import { AlumnosEditComponent } from '../alumnos-edit/alumnos-edit.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit, OnDestroy {

  //alumnos: any = [];
  alumnos$: Observable<any>;
  alumnosSubcription: Subscription;
  @ViewChild(MatTable) tabla!: MatTable<Alumno>;

  columnas: string[] = ['id', 'nombre', 'apellido', 'codigoCurso', 'acciones'];

  constructor(
    private alumnosService: AlumnosService,
    private dialog: MatDialog
  ) { 
    this.alumnos$ = this.alumnosService.obtenerObservableAlumnos();
    this.alumnosSubcription = this.alumnos$.subscribe();
  }

  ngOnDestroy(): void {
    this.alumnosSubcription.unsubscribe();
  }

  ngOnInit(): void {
  }

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.alumnos$.pipe(
      map((alumnos: any[]) => alumnos.filter((alumno) => alumno.nombre.toString().toLocaleLowerCase() === valorObtenido.toLocaleLowerCase())) 
    ).subscribe((alumnos) => {
      this.alumnos$ = this.alumnosService.filterObservableAlumnos(alumnos);
    });
  }

  editar(elemento: Alumno){
    const dialogRef = this.dialog.open(AlumnosEditComponent, {
      width: '450px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        this.alumnos$ = this.alumnosService.updateObservableAlumno(resultado);
        this.tabla.renderRows();
      }
    })
  }

  eliminar(elemento: Alumno){
    this.alumnos$ = this.alumnosService.deleteObservableAlumno(elemento);
  }

  add(){
    const elemento = {id: '', nombre: '', apellido: '', codigoCurso: ''};

    const dialogRef = this.dialog.open(AlumnosEditComponent, {
      width: '450px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        this.alumnos$ = this.alumnosService.addObservableAlumno(resultado);
        this.tabla.renderRows();
      }
    })
  }
}
