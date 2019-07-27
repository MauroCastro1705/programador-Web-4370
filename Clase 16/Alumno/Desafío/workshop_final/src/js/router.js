import crossroads from 'crossroads';
import homeController from './controllers/homeController';//controlador js
import contactController from './controllers/contactController';
import peopleController from './controllers/peopleController';




homeController();
contactController();
peopleController();

function router() {
  crossroads.addRoute('', function () {//cuando se va a tal lado, ejecuta esta funcion
    console.log('Home page')
  })

  crossroads.addRoute('#/home', homeController);
  crossroads.addRoute('#/contact', contactController);
  crossroads.addRoute('#/people', peopleController);

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router //sirve par exportar un solo objeto/funcion