import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factura-producto',
  templateUrl: './factura-producto.component.html',
  styleUrls: ['./factura-producto.component.css']
})
export class FacturaProductoComponent implements OnInit {

  productosCompra: any = [];
  producto: any = [];
  constructor() { }

  ngOnInit(): void {
    this.obtenerDatosRouter();

  }

  private obtenerDatosRouter() {
    if (history.state.productos) {
      console.log(history.state.productos)
      this.productosCompra = history.state.productos;
    }
  }

 public obtenerTotal(producto) {
    console.log("esta bien");
      return producto.cantidad * producto.productoInfo.valor;
  }
}
