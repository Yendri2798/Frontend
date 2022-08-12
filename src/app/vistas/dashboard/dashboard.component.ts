import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listaorden } from 'src/app/modelos/listaorden.interface';
import { Persona } from 'src/app/modelos/persona.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ventas!: Listaorden[];
  personas!: Persona[];

  constructor(private api:ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.obtenerVentas().subscribe(data => {
      this.ventas = data;

    this.api.obtenerPersonas().subscribe(data => {
      this.personas = data;
    })
    })
  }

}
