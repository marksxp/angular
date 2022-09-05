import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { map, Observable, Subscription } from 'rxjs';
import { Clase, ClasesService } from 'src/app/services/clases.service';
import { ClasesEditComponent } from '../clases-edit/clases-edit.component';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  //clases: any = [];
  clases$: Observable<any>;
  clasesSubcription: Subscription;
  @ViewChild(MatTable) tabla!: MatTable<Clase>;

  columnas: string[] = ['id', 'codigo', 'nombre', 'temas', 'acciones'];

  constructor(
    private clasesService: ClasesService,
    private dialog: MatDialog
  ) { 
    this.clases$ = this.clasesService.obtenerObservableClases();
    this.clasesSubcription = this.clases$.subscribe();
  }

  ngOnDestroy(): void {
    this.clasesSubcription.unsubscribe();
  }

  ngOnInit(): void {
  }

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.clases$.pipe(
      map((clases: any[]) => clases.filter((clase) => clase.nombre.toString().toLocaleLowerCase() === valorObtenido.toLocaleLowerCase())) 
    ).subscribe((clases) => {
      this.clases$ = this.clasesService.filterObservableClases(clases);
    });
  }

  editar(elemento: Clase){
    const dialogRef = this.dialog.open(ClasesEditComponent, {
      width: '450px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        this.clases$ = this.clasesService.updateObservableClase(resultado);
        this.tabla.renderRows();
      }
    })
  }

  eliminar(elemento: Clase){
    this.clases$ = this.clasesService.deleteObservableClase(elemento);
  }

  add(){
    const elemento = {id: '', codigo: '', nombre: '', temas: ''};

    const dialogRef = this.dialog.open(ClasesEditComponent, {
      width: '450px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        this.clases$ = this.clasesService.addObservableClase(resultado);
        this.tabla.renderRows();
      }
    })
  }

}
