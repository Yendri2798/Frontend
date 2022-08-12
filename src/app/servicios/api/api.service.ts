import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listaorden } from 'src/app/modelos/listaorden.interface';
import { Persona } from 'src/app/modelos/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  obtenerVentas(): Observable<Listaorden []>{
    return this.http.get<Listaorden []>('http://localhost:57796/api/orden');
  }

  obtenerPersonas(): Observable<Persona []>{
    return this.http.get<Persona []>('http://localhost:57796/api/persona');
  }



}
