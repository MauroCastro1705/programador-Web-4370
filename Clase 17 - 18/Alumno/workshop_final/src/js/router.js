import crossroads from 'crossroads';
import homeController from './controllers/homeController';//controladores js
import contactController from './controllers/contactController';
import peopleController from './controllers/peopleController';
import savedController from './controllers/savedController';
import { searchController } from './controllers/searchController';




homeController();
contactController();
searchController();

function router() {
  crossroads.addRoute('', function () {//cuando se va a tal lado, ejecuta esta funcion
    console.log('Home page')
  })
  //controladores de las paginas
  crossroads.addRoute('#/home', homeController);
  crossroads.addRoute('#/contact', contactController);
  crossroads.addRoute('#/people', peopleController);
  crossroads.addRoute('#/local-storage', savedController);

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router //sirve par exportar un solo objeto/funcion