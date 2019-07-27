//controlador de personajes de la api (people)
import { savePerson, isSaved } from '../utils/dataStore'
import { translateToSpanish } from '../utils/diccionario'

var nextPage
var index
var characters


function peopleController() {
  $('#root').load('./partials/people.html', function () {//carga el html de people
    //trae la info de la api como callback
    addEventToSeeMoreButton();
    nextPage = 'https://swapi.co/api/people/'//actualiza la pagina cada vez
    index = 1;
    characters = {};
    $.ajax(nextPage)
      .done(handleData)
    //.fail(function () {

  })
}//trae la data del local store

function getId(person) {
  return parseInt(person.url.split('/')[5])
}

function handleData(data) {
  var people = data.results
  nextPage = data.next // toma el valor de la siguiete pagina de la API
  console.log(data)
  for (var i = 0; i < people.length; i++) {
    var person = people[i];
    var id = getId(person)
    characters[id] = person
    if (!isSaved(id)) {
      renderPerson('#tableBody', person, id)
    }
  }
  if (!nextPage) {
    $('#seeMore').hide()
  }
  $('#seeMore').attr("disabled", false)
}

function renderPerson(anclaSelector, person, id) {//crea las filas de cada personaje
  $(anclaSelector).append(`
      <tr id="person-${id}">
        <td scope="row">${id}</td>
        <td scope="row">${person.name.toLowerCase()}</td>
        <td scope="row">${translateToSpanish(person.gender)}</td>
        <td scope="row">${person.height}</td>
        <td scope="row">${person.mass}</td>
        <td scope="row">${translateToSpanish(person.eye_color)}</td>
        <td scope="row"><button type="button" id="button-${id}" data-id=${id} class="btn btn-success btn-save">Guardar</button></td>
      </tr>
        `)
  addEventToSaveButton(`#button-${id}`)
}

function addEventToSeeMoreButton() {
  console.log('se llamó la fucion');
  var button = $('#seeMore');
  button.click(function (event) {
    if (nextPage) {
      button.attr("disabled", true)//desabilita el boton para uqe no se siga usando hasta que no carge la info
      $.ajax(nextPage)
        .done(handleData)
    }
  })
}

function addEventToSaveButton(selector) {
  var button = $(selector)
  button.click(function (event) {
    var target = $(event.target)
    var id = target.attr('data-id')
    var trToRemove = $(`#person-${id}`)
    savePerson(id, characters[id])
    trToRemove.remove()
  })
}




export default peopleController

