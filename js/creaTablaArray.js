window.onload = inicia;
var array_datos;

function inicia ()
{
    array_datos = new Array();// creo el Array con texto vacío
}

function obtenerTexto ()
{
    var texto = ''; 
        texto = document.getElementById("texto").value;
    return texto;
}
function insertarFila (texto)
{
    var tabla = document.getElementById("tabla");//obtengo referencia a la tabla
    var nueva_fila = document.createElement("TR");//creo la fila
    
    var columna = document.createElement("TD");//creo la columna
    columna.innerHTML = texto;//pongo el texto a la columna

    nueva_fila.appendChild(columna);//añado la columna a la fila
    tabla.appendChild(nueva_fila);//añado la fila a la columna
}
function guardarArray (text)
{
    //meto en el array
    array_datos.push(text);
    console.log(array_datos);
}

function limpiar() {
    document.getElementById("texto").value = "";
    document.getElementById('texto').focus();
}

function insertar() {
    
    var texto = obtenerTexto();
    guardarArray (texto);
    insertarFila(texto);
    limpiar();

}