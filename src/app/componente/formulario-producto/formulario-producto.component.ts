import { Component, OnInit,  } from '@angular/core';
import { Producto } from '../../modelo/Producto';
import { Router, ActivatedRoute} from '@angular/router';

import {ProductoService} from '../../servicio/producto.service'

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {
  

  producto:  Producto =  {
    id: 0,
    nombre: '',
    valor: 0,
    cantidad: 0,
    image: '',
    valortotal: 0,
    create_at: new Date() }

    constructor(private productoService: ProductoService, private route: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    console.log(params.id)
    if(params.id){
      this.productoService.getProducto(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.producto = res[0];
          //this.edit = true;
        },
        err => console.log(err)
      )
      

      

    }
   }
 

  guardarNuevoProducto(){
    delete this.producto.cantidad;
    delete this.producto.create_at;
    delete this.producto.id;
    delete this.producto.valortotal;
    try {
      this.productoService.saveProducto(this.producto).subscribe(
        res => {
          console.log(res);
          this.route.navigate(['/producto'])
          
        });
    }
    catch (e) {
      console.error(e);
      console.log('entering catch block');
      console.log(e);
      console.log('leaving catch block');
    }
  }

  


}
