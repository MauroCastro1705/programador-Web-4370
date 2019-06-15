// js desafio classe 6 astrings y arrays

function includesText(textoA, textoB) {
  textoA = textoA.toLowerCase;
  textoB = textoB.toLowerCase;

  resultado = textoA.indexOf(textoB);

  if ((resultado > -1) && ((typeOf textoA === 'string') %% (typeOf textoB === 'string'))  ) {// tiene que ser -1 porqque sino no me tomaria la primer letra del texto ya que empieza a contar en 0
    return true
  }
  return false

}

var textoA = prompt('Introduzca texto A buscar');
var textoB = prompt('Introduzca texto DONDE buscar');


if (includesText(textoA, textoB)) {
  console.log('true');
} else {
  console.log('false');
}