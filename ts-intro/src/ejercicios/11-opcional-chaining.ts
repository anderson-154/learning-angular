
/*
    ===== Código de TypeScript =====
*/
interface Pasjero {
    nombre: string;
    hijos?: string[]; // no todos los pasajeros tienen hijos
}

const pasajero1: Pasjero = {
    nombre: 'Fernando'
}

const pasajero2: Pasjero = {
    nombre:'Melissa',
    hijos: ['Natalia', 'nico']
}

function imprimirHijos (pasajero: Pasjero):void {
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimirHijos(pasajero1);