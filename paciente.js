class Paciente{
    constructor(nombre,apellidos,fecha){
        this.nombre = nombre
        this.apellidos = apellidos
        this.fechanacimiento = new Date (fecha)
        this.registrobascula = new Bascula()
    }
   

    saludar(){
        console.log( ' Hola soy  '+ this.nombre + ' ' + this.apellidos);

    }

    obtenerNombre(antuan){
        return this.nombre;
        
    }
    modificarNombre(nombre){
        this.nombre = nombre
    }
    obtenerApellidos(){
        return this.apellidos;

    }
    modificarApellidos(apellidos){
        this.apellidos = apellidos
    }
    obtenerFechaNacimiento(){
        return this.fechanacimiento
    }

    modificarFechaNacimiento(fechanacimiento){
        this.fechanacimiento = fechanacimiento
    }

    obtenerEdad(){
        return this.edad;
    }

    obtenerBascula(){
        return this.bascula;
    }
    modificarBascula(bascula){
        this.bascula = bascula
    }

    obtenerIMC(){
        return this.bascula.calcularIMC()
    }





}
module.exports = Paciente;

let paciente = new Paciente("Antonio", "Martinez i Gonzalez", "1981-12-01");
//let nombre = paciente.obtenerNombre();
//paciente.ObtenerNombre();
//paciente.ObtenerApellido();
paciente.saludar();
paciente.modificarBascula(bascula);
paciente.obtenerIMC();
console.log(paciente.obtenerIMC());