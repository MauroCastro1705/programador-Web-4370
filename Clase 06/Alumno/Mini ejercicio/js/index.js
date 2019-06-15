// mini ejercicio clase 6

var busqueda = function (texto, palabra) {

  resultado = texto.indexOf(palabra)

  if (resultado > -1) {// tiene que ser -1 porqque sino no me tomaria la primer letra del texto ya que empieza a contar en 0
    return true
  }
  return false
}

var texto = 'El amor juega a inventarse, huye de sí mismo para volver en su espiral sobrecogedora, los senos cantan de otro modo, la boca besa más profundamente o como de lejos, y en un momento donde antes había como cólera y angustia es ahora el juego puro, el retozo increíble, o al revés, a la hora en que antes se caía en el sueño, el balbuceo de dulces cosas tontas, ahora hay una tensión, algo incomunicado pero presente que exige incorporarse, algo como una rabia insaciable. Sólo el placer en su aletazo último es el mismo; antes y después el mundo se ha hecho pedazos y hay que nombrarlo de nuevo, dedo por dedo, labio por labio, sombra por sombra'


var palabra = prompt('introduzca palabra a buscar:')

console.log(palabra)

if (busqueda(texto, palabra)) {
  console.log('true');
} else {
  console.log('false');
}





