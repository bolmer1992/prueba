import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componente/navegacion/navegacion.component';
import { FormularioProductoComponent } from './componente/formulario-producto/formulario-producto.component';
import { ListadoProductoComponent } from './componente/listado-producto/listado-producto.component';

import { ProductoService } from './servicio/producto.service'
import { from } from 'rxjs';
import { FacturaProductoComponent } from './componente/factura-producto/factura-producto.component';
import { CompraProductoComponent } from './componente/compra-producto/compra-producto.component';



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FormularioProductoComponent,
    ListadoProductoComponent,
    FacturaProductoComponent,
    CompraProductoComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
