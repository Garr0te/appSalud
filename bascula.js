class Bascula{
    constructor(){
        this.pesos = [0]
        this.alturas = []
        this.fechas = []
        this.anotaciones = 1
    }
        
    
     obtenerNumeroAnotaciones(){
        console.log( this.anotaciones + ' - agafant anotacions');


    }
     obtenerPesoMaximo(){
        return Math.max(...this.pesos);

    }
    anotarPeso(peso,altura = 1){
        this.pesos.push(peso);
        this.alturas.push(altura);
        this.fechas.push(new Date());
        this.anotaciones += 1;
    }
    
     obtenerPesoMinimo(){
        return Math.min(...this.pesos);

    }
    calcularIMC(){
        let imc = this.pesos[this.pesos.length-1]/(this.alturas[this.alturas.length-1]*this.alturas[this.alturas.length-1]);
        return imc;

    }
     describirIMC(imc){
        if (imc < 16 ) return "infrapeso (delgadez severa)";
        if (imc  <=17 ) return "infrapeso (delgadez moderada)";
        if (imc <=18.5 ) return "infrapeso (delgadez aceptable)";
        if (imc <=25 ) return "Peso normal";
        if (imc <=30 ) return "Sobrepeso";
        if (imc <=35 ) return "Obeso (Tipo I)";
        if (imc <=40 ) return "Obeso(Tipo II)";
        if (imc > 40 ) return "Obeso (Tipo III)";
    }
}
module.exports = Bascula;

let bascula = new Bascula();
bascula.anotarPeso(80,1.70);
bascula.anotarPeso(90,1.83);
bascula.anotarPeso(66,1.30);
console.log(bascula);

let max = bascula.obtenerPesoMaximo();

let min = bascula.obtenerPesoMinimo();
console.log(min,max);

bascula.obtenerNumeroAnotaciones();

let imc = bascula.calcularIMC();
console.log(imc);

console.log(bascula.describirIMC(imc));
