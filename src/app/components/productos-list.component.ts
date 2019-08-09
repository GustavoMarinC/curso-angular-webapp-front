import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import { ProductoService } from './../services/producto.service';
import { Producto } from './../models/producto';
@Component({
    selector: "productos-list",
    templateUrl: "../views/productos-list.html",
    providers: [ProductoService]
})

export class ProductosListComponent{
    public titulo: string;
    public productos:Producto[];
    public confirmado;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ){
        this.titulo="Listado de productos";
    }

    ngOnInit(){
      this.getProducto();
      this.confirmado =  null;
    }

    deleteConfirm(id){
        this.confirmado = id;
    }

    cancelarConfirm(){
        this.confirmado =  null;
    }
    getProducto(){
        this._productoService.getProductos().subscribe(
            (result:any) => {
             
              if(result.code != 200){
                  console.log(result);
              }else{
                  this.productos =result.data;
              }
              
            },
            error => {
                console.log(<any>error);
            }
            
        );
    }

    onDeleteproducto(id){
        this._productoService.deleteProducto(id).subscribe(
            (response: any)=>{
                if(response.codigo == 200){
                    this.getProducto();
                }else{
                    alert("error al borrar");
                }
            },
            (error)=>{console.log(error)}
        );
    }
}
