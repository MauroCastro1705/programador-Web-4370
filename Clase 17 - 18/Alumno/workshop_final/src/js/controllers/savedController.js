//controlador de guardado de la api (people)
import { savePerson, isSaved, dataStore } from '../utils/dataStore'
import { translateToSpanish } from '../utils/diccionario'

var nextPage
var index
var characters


function savedController() {
  $('#root').load('./partials/people.html', function () {//carga el html de people
    var allKeys = Object.keys(dataStore)
    for (var i = 0; i < allKeys.length; i++) {
      var person = dataStore[allKeys[i]];
      var id = getId(person)
      renderPerson('#tableBody', person.id)

    }
  })
}//trae la data del local store

function getId(person) {
  return parseInt(person.url.split('/')[5])
}

function renderPerson(anclaSelector, person, id) {
  $(anclaSelector).append(`
      <tr id="person-saved-${id}">
        <td scope="row">${id}</td>
        <td scope="row">${person.name.toLowerCase()}</td>
        <td scope="row">${translateToSpanish(person.gender)}</td>
        <td scope="row">${person.height}</td>
        <td scope="row">${person.mass}</td>
        <td scope="row">${translateToSpanish(person.eye_color)}</td>
        <td scope="row"><button type="button" id="button-del-${id}" data-id=${id} class="btn btn-danger btn-save">Eliminar</button></td>
      </tr>
        `)
  addEventToDeleteButton(`#button-del-${id}`)
}

function addEventToDeleteButton(selector) {
  var button = $(selector)
  button.click(function (event) {
    var target = $(event.target)
    var id = target.attr('data-id')
    var trToRemove = $(`#person-saved-${id}`)
    deletePerson(id)
    trToRemove.remove()
  })
}




export default savedController
