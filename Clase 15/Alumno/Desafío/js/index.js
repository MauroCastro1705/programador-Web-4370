// clae 15 desafioAPI


$(document).ready(function () {

  function getData(url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data) //CallBacK
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  getData("https://swapi.co/api/people/", handlePagination)


  function handlePagination(error, data) {
    if (!error) {
      console.log('request Ok');
      console.log(data);
      var results = data.results;
      for (var index = 0; index < results.length; index++) {
        var characters = results[index];
        console.log(characters.name)
      }
      if (data.next) {
        getData(data.next, handlePagination);
      }
    }
  }



});


