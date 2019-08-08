import { Component } from '@angular/core';

@Component({
    selector : 'error',
    templateUrl : '../views/error.html'
})

export class ErrorComponent{
    public titulo: string;

    constructor(){
        this.titulo = "pagina no encontrada"
    }

    ngOnInit(){
        console.log("componente error cargado");
    }

}
