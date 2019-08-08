import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from './../services/producto.service';
import  { Producto } from './../models/producto';
 @Component(
     {
         selector: 'producto-detail',
         templateUrl: '../views/producto-detail.html',
         providers: [ProductoService]
     }
 )

 export class productoDetailComponent{
     public producto: Producto;

     constructor(
         private _productoService: ProductoService,
         private _route: ActivatedRoute,
         private _router: Router
     ){

     }

     ngOnInit(){
         console.log("producto detail cargado");
         this.getProducto();
     }

     getProducto(){
         this._route.params.forEach((params: Params)=>{
            let id = params['id'];

            this._productoService.getProducto(id)
                .subscribe(
                    (response:any)=>{
                        //console.log("Response"+JSON.stringify(response));
                        if(response.codigo == 200){
                            this.producto = response.data;
                        }else{
                            console.log("code::"+response.code);
                            this._router.navigate(['/productos']);
                        }
                    },
                    (error:any)=>{
                        console.log(error)
                    }
                );
            
         });
     }
 }