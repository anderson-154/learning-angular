
/*
    ===== Código de TypeScript =====
*/

function sumar(a: number,b: number): number{
    return a + b;
}

const sumarFlecha = (a: number, b: number): number=>{
    return a + b; 
}

function multiplicar (numero: number, otroNumero?: number, base: number = 2): number{
    return numero * base;
}

interface PersonajeLDR{
    nombre: string,
    hp: number
    mostrarHp: () => void;
}

function curar (personaje: PersonajeLDR, curarX: number): void{
    personaje.hp += curarX;
}

const nuevoPersonaje: PersonajeLDR = {
    nombre: ' strider',
    hp: 50,
    mostrarHp(){
        console.log( 'puntos de vida', this.hp);
    }
}

curar( nuevoPersonaje, 10);

nuevoPersonaje.mostrarHp();