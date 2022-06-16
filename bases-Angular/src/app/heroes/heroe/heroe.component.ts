import { Component } from "@angular/core";
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
  
    nombre: string = 'IronMan';
    edad: number = 40;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }
    obtenerNombre (): string{
        return `Nombre: ${this.nombre} , Edad: ${this.edad}`;
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void {
        this.edad = 29;
    }
}