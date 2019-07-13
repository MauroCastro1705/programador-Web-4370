$(document).ready(function () {
  console.log('Init App')

  $('ul > li > i.fa-trash-alt').click(function (event) {//selector especifico
    $(event.target)//seleccionamos el target del evento
      .parent()//traemos su parent
      .remove()//removemos el parent para eliminar

  })

})

