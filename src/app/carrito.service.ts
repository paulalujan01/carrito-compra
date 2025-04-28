import { Injectable } from '@angular/core';
import { Product} from'./products';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  items: Product [] = [];

  constructor(private http: HttpClient) { }

  agregarAlcarrito(producto : Product){
    this.items.push(producto);
  }
  getItems(){
    return this.items;
  }
  limpiarCarrito(){ 
    this.items = [];
    return this.items;
  }

  getPrecioDeEnvio(){
    return this.http.get<{tipo: string, precio: number}[]>('/assets/shipping.json');
  }
}
