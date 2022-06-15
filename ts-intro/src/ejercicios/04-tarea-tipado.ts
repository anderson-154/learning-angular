
/*
    ===== Código de TypeScript =====
*/
interface SuperHero{
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHero: SuperHero = {
    nombre: 'spiderman',
    edad: 30,
    direccion: {
        calle: 'Main st',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' +  this.direccion + ', ' + this.direccion.pais;
    }
}

const direccion = superHero.mostrarDireccion();
console.log(direccion);
