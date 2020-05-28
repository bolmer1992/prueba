import { Injectable } from '@angular/core';

import {HttpClient } from '@angular/common/http';
import { Producto } from '../modelo/Producto'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  API_URL = 'http://localhost:3000/api';
  constructor(private http : HttpClient) { }

  getProductos(){
    return this.http.get(`${this.API_URL}/productos`);
  }

  getProducto(id: string){
    return this.http.get(`${this.API_URL}/productos/${id}`);
  }

  saveProducto(producto: Producto){
    console.log(producto);  
    return this.http.post(`${this.API_URL}/productos/create`, producto);

  }

  deleteProducto(id: string) {
    return this.http.delete(`${this.API_URL}/productos/${id}`);
  }

  updateProducto(id : string, updatedproducto: Producto) {
    return this.http.put(`${this.API_URL}/productos/${id}`, updatedproducto);

  }

  




}
