function homeController() {
  $('#root').load('./partials/home.html')//trae la data del local store
  console.log('Se cargo la home')
}

export default homeController