
/*
    ===== Código de TypeScript =====
*/
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
}
//expande nuestras clases para nuevas funciones especiales
@reportableClassDecorator
class MiSuperClase {
    public miPropiedad: string ='Abc';

    imprimir () {
        console.log("hola mundo");
    }
}

console.log(MiSuperClase)
const miClase = new MiSuperClase();

console.log(miClase.miPropiedad)