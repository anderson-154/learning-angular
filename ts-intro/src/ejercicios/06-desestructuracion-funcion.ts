
/*
    ===== Código de TypeScript =====
*/
export interface Producto {
    desc: string;
    precio: number;
}
const tableta: Producto = {
    desc: 'Ipad Air',
precio: 350
}
const telefono: Producto = {
    desc: 'Iphone',
    precio: 1000
}

export function calcularISV (productos: Producto[]): [number, number] {

    let total = 0;
    productos.forEach( ({precio})=>{
        total += precio;
    })
    return [total, total * 0.15];
}

const articulos = [telefono, tableta];
const [total, isv] = calcularISV(articulos);
console.log('ISV', isv)
console.log('Total', total)