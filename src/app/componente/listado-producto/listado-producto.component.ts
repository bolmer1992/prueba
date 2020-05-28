import { Component, OnInit } from '@angular/core';

import { ProductoService} from '../../servicio/producto.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {
  deshabilitarComprar = true;
  productos: any = [];
  productosSeleccionados: any = [];

  constructor(
    private productoService: ProductoService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      (res: any) => {
        res.forEach(producto => {
          const elemento = {
            seleccionado: false,
            cantidad : 0,
            productoInfo: producto
          };
          this.productos.push(elemento);
        });

      },
      err => {console.log("no funciona:" + err); }
    );

  }
agregarProductoCompra(producto){
    producto.seleccionado = true;
    this.productosSeleccionados.push(producto);
    this.deshabilitarComprar = false;
}

cancelar() {
  this.deshabilitarComprar = true;
  this.productos.forEach(element => {
    element.seleccionado = false;
  });
  this.productosSeleccionados = [];
}

comprar(){
  this.router.navigate(['/productos/factura'], {state: { productos: this.productosSeleccionados } });
  
}
 public getProducto(){
  this.productoService.getProductos().subscribe(
    res => {
      this.productos = res
    },
    err => console.log(err) 
  );
}

deleteProducto(id: string){
  this.productoService.deleteProducto(id).subscribe(
    res => {
      console.log("este es el mensage"+res);
      this.getProducto();
      
    },
    err => console.log(err)
  )

}
editarProducto(producto){
  console.log(producto)

}

}
