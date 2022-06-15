import { Producto, calcularISV } from './06-desestructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/

const carrito: Producto [] =[
    {
        desc: 'telefono 1',
        precio: 100
    },
    {
        desc: 'telefono 2',
        precio: 200
    },
];

const [total, isv] = calcularISV(carrito);
console.log('Total', total)
console.log('ISV', isv)