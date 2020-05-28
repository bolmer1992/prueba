import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListadoProductoComponent} from './componente/listado-producto/listado-producto.component';
import {FormularioProductoComponent} from './componente/formulario-producto/formulario-producto.component';
import { FacturaProductoComponent} from './componente/factura-producto/factura-producto.component'
import {CompraProductoComponent} from './componente/compra-producto/compra-producto.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/producto/compras',
    pathMatch: 'full'
  },
  {
    path : 'producto',
    component : ListadoProductoComponent

  },
  {
    path : 'productos/create',
    component : FormularioProductoComponent
  },
  {
    path :'productos/factura',
    component: FacturaProductoComponent
  },
  {
    path : 'producto/compras',
    component : CompraProductoComponent

  },
  {
    path :'productos/edit/:id',
    component: FormularioProductoComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
