import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';

export interface User {
  id: string,
  student: {
    name: string,
    lastname: string,
  },
  username: string,
  email: string,
  phone: string,
  website: string,
  profesor: {
    codigo: string,
    nombre: string,
  },  
  cursos: {
    codigo: string,
    nombre: string,
    estado: boolean,
    clases: string,
  }
}

const ELEMENT_DATA: User[] = [
  {
    "id": "1",
    "student": {
      "name": "Leanne",
      "lastname": "Graham"
    },
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "profesor": {
      "codigo": "P23542",
      "nombre": "Jose Perez"
    },
    "cursos": {
      "codigo": "C12342",
      "nombre": "Node Js",
      "estado": true,
      "clases": "M-J de 18:00 a 20:30"
    }
  },
  {
    "id": "2",
    "student": {
      "name": "Ervin",
      "lastname": "Howell"
    },
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "profesor": {
      "codigo": "P26543",
      "nombre": "Maria Flores"
    },
    "cursos": {
      "codigo": "C76534",
      "nombre": "React Js",
      "estado": false,      
      "clases": "M-J-S de 09:00 a 11:30"
    }
  },
  {
    "id": "3",
    "student": {
      "name": "Clementine",
      "lastname": "Bauch"
    },    
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "profesor": {
      "codigo": "P23542",
      "nombre": "Jose Perez"
    },
    "cursos": {
      "codigo": "C12342",
      "nombre": "Node Js",
      "estado": true,      
      "clases": "M-J de 18:00 a 20:30"
    }
  },
  {
    "id": "4",
    "student": {
      "name": "Patricia",
      "lastname": "Lebsack"
    },      
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "profesor": {
      "codigo": "P23423",
      "nombre": "Ricardo Gomez"
    },
    "cursos": {
      "codigo": "C65421",
      "nombre": "Angular",
      "estado": false,      
      "clases": "L-M-V de 19:00 a 21:30"
    }
  },
  {
    "id": "5",
    "student": {
      "name": "Chelsey",
      "lastname": "Dietrich"
    },
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "profesor": {
      "codigo": "P23542",
      "nombre": "Jose Perez"
    },
    "cursos": {
      "codigo": "C12342",
      "nombre": "Node Js",
      "estado": true,
      "clases": "M-J de 18:00 a 20:30",
    }
  } 
]

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  columnas: string[] = ['id', 'student', 'username', 'email', 'website', 'curso', 'clases', 'profesor', 'estado', 'acciones'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatTable) tabla!: MatTable<User>;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  eliminar(elemento: User){
    this.dataSource.data = this.dataSource.data.filter((user: User) => user.id != elemento.id);
  }

  editar(elemento: User){
    const dialogRef = this.dialog.open(EditarDialogComponent, {
      width: '450px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        const item = this.dataSource.data.find(user => user.id === resultado.id);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows();
      }
    })
  }

  add(){
    const elemento = {
      id: '',
      student: {
        name: '',
        lastname: '',
      },
      username: '',
      email: '',
      phone: '',
      website: '',
      profesor: {
        codigo: '',
        nombre: '',
      },  
      cursos: {
        codigo: '',
        nombre: '',
        estado: false,
        clases: '',
      }
    };

    const dialogRef = this.dialog.open(EditarDialogComponent, {
      width: '450px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        const index_max = this.dataSource.data.length;
        
        if(index_max > 0) {
          const item = this.dataSource.data[index_max - 1];
          //resultado.id = +item.id + 1;
          resultado.id = Number(item.id) + 1;
        } else {
          resultado.id = 1;
        }
        
        this.dataSource.data.push(resultado);
        this.tabla.renderRows();
      }
    })
  }

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }
}
