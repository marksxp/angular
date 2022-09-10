import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/cursos';
import { AppState } from 'src/app/state/app.state';
import { selectorCursosCargados } from 'src/app/state/selectors/cursos.selector';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  cursos$!: Observable<Curso[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.store.select(selectorCursosCargados);
  }

}
