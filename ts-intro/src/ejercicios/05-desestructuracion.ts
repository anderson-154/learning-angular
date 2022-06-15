
/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor ={
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles:{
        autor: 'ed sheran',
        anio: 2021
    }
}


const {volumen: vol, segundo, cancion, detalles: { autor: autorDetalle }  } = reproductor;
//const { autor } = detalles; DIferente forma de desestructuracion


//console.log('El volumen actual es de: ', vol);
//console.log('El segundo actual es de: ', segundo);
//console.log('El cancion actual es de: ', cancion);
//console.log('el autor es: ', autorDetalle);



const dbz: string [] = ['Vegeta', 'Goku', 'Trunks'];

const [ , , p3  ] = dbz;
// console.log('Personaje 1', p1);
// console.log('Personaje 2', p2);
console.log('Personaje 3', p3);