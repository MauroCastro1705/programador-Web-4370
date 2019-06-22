// js para mini ejercicio clase 8
var tituloNuevo = prompt('Ingrese nuevo Titulo : ');
var textoNuevo = prompt('Ingrese Texto Nuevo : ');

function cambio(tituloNuevo, textoNuevo) {
  var newTitulo = document.getElementById('title');
  newTitulo.innerHTML = tituloNuevo;
  var newTexto = document.getElementById('text');
  newTexto.innerHTML = textoNuevo;
}



cambio(tituloNuevo, textoNuevo);