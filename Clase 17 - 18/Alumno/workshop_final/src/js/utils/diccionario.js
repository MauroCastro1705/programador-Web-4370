var dictionary = { //diccionario que usamos para traducir la info de los personaje de la API
  male: 'Masculino',
  female: 'Femenino',
  blue: 'azul',
  red: 'rojo',
  yellow: 'amarillo',
  orange: 'naranja',
  green: 'verde',
  hazel: 'marron claro',
  brown: 'marron',
  black: 'negro',
  pink: 'rosa',
  'blue-gray': 'azul grisado'
}

function translateToSpanish(wordInEnglish) { // funcion que traduce las palabras
  var word = wordInEnglish.toLowerCase();
  var traduccion = dictionary[word];
  if (traduccion) {
    return traduccion
  }
  return word;
}

export { translateToSpanish } 