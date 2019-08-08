import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Producto } from './../models/producto';
import {GLOBAL} from './global';
import { promise } from 'protractor';
import { resolve } from 'dns';



@Injectable()
export class ProductoService{
    public url:string;
    constructor(
        public _http: HttpClient

    ){
        this.url = GLOBAL.url;
    }

    getProductos(){
        return this._http.get(this.url+'productos');
    }
    getProducto(id){
        return this._http.get(this.url+'producto/'+id);
    }
    addProducto(producto: Producto){
        let json = JSON.stringify(producto);
        let params = 'json='+json;
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});

        return this._http.post(this.url+'productos',params,{headers:headers});
    }

    makeFileRequest(url: string, params:Array<String>, files: Array<any>){
        console.log("files:: "+files);
        return new Promise((resolve,reject)=>{
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();

            for(var i = 0; i < files.length; i++){
                formData.append('uploads',files[i],files[i].name)
            }

            xhr.onreadystatechange = function(){
                if(xhr.readyState==4){
                    if(xhr.status==200){
                        resolve(JSON.parse(xhr.response));
                    }else{
                        reject(xhr.response);
                    }
                }
            };

            xhr.open("post",url,true);
            xhr.send(formData);
        })
    }

    
}