import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from './../services/producto.service';
import { Producto } from './../models/producto';
import { GLOBAL } from './../services/global';

@Component({
    selector: "producto-edit",
    templateUrl: "../views/producto-add.html",
    providers:[ProductoService]
})

export class ProductoEditComponent{
    public titulo: string;
    public producto: Producto;
    public filesToUpLoad;
    public resultUpload;
    public is_edit;

    constructor(
        private _productoService: ProductoService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titulo = "Editar producto";
        this.producto = new Producto(1,'','',1,'');
        this.is_edit = true;
    }

    ngOnInit(){
        console.log(this.titulo);
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
    onSubmit(){
        console.log(this.producto);

        if(this.filesToUpLoad && this.filesToUpLoad.length>=1){
            this._productoService.makeFileRequest(GLOBAL.url+"/upload-file",[],this.filesToUpLoad)
                .then((result:any)=>{
                    console.log('result add img:', result);
                    this.producto.imagen = result.file_name;
                    this.upDateProducto();
                    
                
                },(error)=>{
                    console.log("ERROR: "+error);
                }
            );
        }else{
            this.upDateProducto();
        }
    }

    upDateProducto(){
        this._route.params.forEach((params: Params)=>{
            let id = params['id'];
            this._productoService.editProducto(id,this.producto).subscribe(
                (result: any)=>{
                    if(result.code==200){
                        this._router.navigate(['/producto-detail',id]);
                    }else{
                        console.log(result);
                    }
                },
                (error: any)=>{
                    console.log(error);
                }
            );
        });
    }
    fileChangeEvent(fileInput:any){
        this.filesToUpLoad = <Array<File>>fileInput.target.files;
        
    }
}
