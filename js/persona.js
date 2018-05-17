function Dni(numero1) { //funcion constructora
    this.numero = numero1;//se refiere a la variable el this
}

Dni.prototype =
    {
        calcularLetra: function () {
            var letra = "";
            var SECUENCIA_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

            letra = SECUENCIA_DNI.charAt(this.numero % 23);
            return letra;
        }
    }

//defino un metodo estatico
var cadena = dni + letra;
Dni.esValido = function (cadena) {
    var valido = false;
    var longitud = cadena.lenght;
        if (longitud <9){
            valido=false;
            console.log("el dni no es correcto, faltan digitos");
        }
        else{
            valido=true;
            console.log("El dni es correcto")
        }
    return valido;
}

var dni = new Dni(47310008);
console.log(dni.numero);
console.log("proto dni");
console.log(dni.__proto__);
var letra = dni.calcularLetra();
console.log(letra);
var resultado = Dni.esValido(9);
console.log (resultado);


