import { Component } from '@angular/core';

@Component(
    {
        selector:'home',
        templateUrl:'../views/home.html'
    }
)

export class HomeComponent{
    public titulo: string;

    constructor(){
        this.titulo = "Webapp de productos con angular 4";
    }

    ngOnInit(){
        console.log("Se cargo el componente de la HOME");
    }
}


