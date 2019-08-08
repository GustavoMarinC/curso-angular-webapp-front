import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

//componentes

import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ProductoAddComponent } from './components/producto-add.component';
import { productoDetailComponent } from './components/producto-detail.component';
import { ProductoEditComponent } from './components/producto-edit.component';

const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'productos', component: ProductosListComponent},
    {path:'producto-add', component: ProductoAddComponent},
    {path:'producto-detail/:id', component: productoDetailComponent},
    {path:'producto-editar/:id', component: ProductoEditComponent},
    {path:'**', component: ErrorComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
