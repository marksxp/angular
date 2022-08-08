import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface User {
  id: Number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  profesor: {
    codigo: string;
    nombre: string;
  },  
  cursos: {
    codigo: string,
    nombre: string,
    estado: boolean,
    clases: {
      dias: string,
      horario: string
    }
  }
}

const ELEMENT_DATA: User[] = [
  {
    "id": 1,
    "name": "Leanne Graham",
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
      "clases": {
        "dias": "M-J",
        "horario": "18:00 a 20:30"
      }
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
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
      "clases": {
        "dias": "M-J-S",
        "horario": "09:00 a 11:30"
      }
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
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
      "clases": {
        "dias": "M-J",
        "horario": "18:00 a 20:30"
      }
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
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
      "clases": {
        "dias": "L-M-V",
        "horario": "19:00 a 21:30"
      }
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
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
      "clases": {
        "dias": "M-J",
        "horario": "18:00 a 20:30"
      }
    }
  } 
]

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  columnas: string[] = ['id', 'name', 'username', 'email', 'curso', 'clases', 'profesor', 'estado', 'acciones'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}
