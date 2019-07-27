function peopleController() {
  $('#root').load('./partials/people.html')//trae la data del local store
  console.log('Se cargo la pagina de personajes')
}

export default peopleController