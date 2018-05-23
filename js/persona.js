/*function Dni(numero1) { //funcion constructora
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
console.log (resultado);*/

function Persona(altura, peso) {
    this.altura = altura;
    this.peso = peso;

}
Persona.prototype = {
    calculaIMCNumerico: function () {
        var imc = 0;
        imc = this.peso / (this.altura * this.altura);
        return imc;
    },
    calculaIMCNominal: function () {
        var imcnumerico = persona.calculaIMCNumerico();
        var str_imc = "";
        if (imcnumerico < 16) {
            str_imc = 'desnutrido';
        } else if (imcnumerico >= 16 && imcnumerico < 18) {
            str_imc = 'delgado';
        } else if (imcnumerico >= 18 && imcnumerico < 25) {
            str_imc = 'ideal';
        } else if (imcnumerico >= 25 && imcnumerico < 31) {
            str_imc = 'sobrepeso';
        }
        else {
            str_imc = 'obeso';
        }
        return str_imc;
    }
}
var persona = new Persona(1.80, 80);
persona.calculaIMCNumerico();
console.log(persona.calculaIMCNumerico());
persona.calculaIMCNominal();
console.log(persona.calculaIMCNominal());







