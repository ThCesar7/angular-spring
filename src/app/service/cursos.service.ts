import { Injectable } from '@angular/core';
import { Cursos } from '../model/cursos';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/assets/cursos.json'

  constructor(
    private http: HttpClient
  ) { }

  lista() {
    return this.http.get<Cursos[]>(this.API)
    .pipe(
      tap(cursos => {
        console.log(cursos)
      })
    )
  }
}
