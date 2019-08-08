import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from './../services/producto.service';
import { Producto } from './../models/producto';
import { GLOBAL } from '../services/global';

@Component({
    selector:'producto-add',
    templateUrl:'../views/producto-add.html',
    providers:[ProductoService]
})

export class ProductoAddComponent{
    public titulo: string;
    public producto: Producto;
    public filesToUpLoad;
    public resultUpLoad;
    public fileName;
    
    constructor(
        private _productoService : ProductoService,
        private _route: ActivatedRoute,
        private _router: Router

    ){
        this.titulo="Crear un nuevo producto";
        this.producto= new Producto(0,'','',0,'');
    }

    ngOnInit(){
        console.log("producto-add.component.ts cargado");
    }

    onSubmit(){
        console.log(this.producto);

        if(this.filesToUpLoad.length>=1){
            this._productoService.makeFileRequest(GLOBAL.url+"/upload-file",[],this.filesToUpLoad)
                .then((result:any)=>{
                    console.log('result add img:', result);
                    this.producto.imagen = result.file_name;
                    this.saveProducto();
                    
                
                },(error)=>{
                    console.log("ERROR: "+error);
                }
            );
        }else{
            this.saveProducto();
        }
    }

    saveProducto(){
        this._productoService.addProducto(this.producto).subscribe(
            (result: any)=>{
                if(result.code==200){
                    this._router.navigate(['/productos']);
                }else{
                    console.log(result);
                }
            },
            (error: any)=>{
                console.log(error);
            }
        );
    }
    fileChangeEvent(fileInput:any){
        this.filesToUpLoad = <Array<File>>fileInput.target.files;
        this.fileName = fileInput.target.files[0].name;
        
    }
}