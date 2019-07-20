// clae 15 ejercicio API


$(document).ready(function () {

  function getData (url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data) //CallBacK
      })
      .fail(function (error) {
        cbk(error)
      })}

  getData("https://swapi.co/api/people/1", handleRequest)
  

  function handleRequest(error , data){
    if (!error) {
      console.log('request Ok');
      console.log(data);
      } else {
        console.error('Fallo el request' , error);
      }}


  function getPerson(id, cb){//recibe un Id y un callback
    getData("https://swapi.co/api/people/" + id , cb) 
  }

  getPerson(5,handleRequest);//pedimos el personaje 5 y usamos el handler

});


