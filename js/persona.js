function Dni (numero1){
    this.numero = numero1;
}
Dni.prototype = 
{
    calcularLetra : function (){
        var letra = "";
        var SECUENCIA_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

        letra = SECUENCIA_DNI.charAt(this.numero%23);
        return letra;
    }
}
var dni = new Dni (47310008);
console.log (dni.numero);
console.log ("proto dni");
console.log (dni.__proto__);
var letra = dni.calcularLetra();
console.log (letra);



