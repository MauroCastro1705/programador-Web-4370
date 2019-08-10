// js desafio classe 6 astrings y arrays

var textoA = prompt('Introduzca texto A buscar');
var textoB = prompt('Introduzca texto DONDE buscar');

function includesText(a, b) {

  var primerTexto;
  var segundoTexto;

  if (typeof a === 'string') { //comprobacion de si son strings
    return primerTexto = textoA.toLowerCase()
  };

  if (typeof b === 'string') {
    return segundoTexto = textoB.toLowerCase()
  };

  resultado = primerTexto.indexOf(segundoTexto);

  if (resultado > -1) { // tiene que ser -1 porqque sino no me tomaria la primer letra del texto ya que empieza a contar en 0
    return true
  }
  return false

}

if (includesText(textoA, textoB)) {
  console.log('true');
} else {
  console.log('false');
}