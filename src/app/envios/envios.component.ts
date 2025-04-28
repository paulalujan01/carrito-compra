import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrl: './envios.component.css'
})
export class EnviosComponent implements OnInit{
costoDeEnvio!: Observable<{type: string , price: number}[]>;

constructor(private carritoService: CarritoService) { }
ngOnInit(): void {
  this.costoDeEnvio =  this.carritoService.getPrecioDeEnvio();
}
}