var array_nombres = new Array;

function addNombre(){
    var nombre = 0;
    var nombre = document.getElementById("introduce").value;

    array_nombres.push(introduce);
    console.log(array_nombres);

    var tablelista = document.getElementById("tableLista");
    var nueva_fila = document.createElement("TR");
    var columna = document.createElement("TD");

    columna.innerHTML = introduce;
    nueva_fila.appendChild(columna);
    tablelista.appendChild(nueva_fila);

    limpiar();

}

function limpiar() {
    document.getElementById("introduce").value = "";
    document.getElementById('introduce').focus();
}

