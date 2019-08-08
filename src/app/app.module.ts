import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
//Rutas
import { routing,appRoutingProviders } from './app.routing';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductoAddComponent } from './components/producto-add.component';
import {FormsModule} from '@angular/forms'; 
import { productoDetailComponent } from './components/producto-detail.component';
import { ProductoEditComponent } from './components/producto-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosListComponent,
    ProductoAddComponent,
    productoDetailComponent,
    ProductoEditComponent
  ],
  imports: [
  
HttpClientModule,
  FormsModule,

routing,
  BrowserModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
