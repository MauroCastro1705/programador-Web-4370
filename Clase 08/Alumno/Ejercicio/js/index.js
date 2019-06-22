// js ejercicio clase 8

window.onload = function () {
  var texts = ['Ed', 'Edd', 'Eddy']
  var list = document.getElementById('mainList')
  for (var i = 0; i < texts.length; i++) {
    var item = document.createElement('li')
    item.className = 'list-group-item'
    item.innerHTML = texts[i]
    list.appendChild(item)
  }
}
