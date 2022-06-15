
/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    constructor(
        public nombre:string, 
        public direccion:string
    ){}
}

class Hero extends PersonaNormal {
    //  public alterEgo: string;
    //  public edad: number;
    //  public nombreReal: string;

     constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
     ){
         super(nombreReal, 'Torre Stark');
     }
}

const ironman = new Hero('IronMan', 45, 'Tony');

console.log(ironman);