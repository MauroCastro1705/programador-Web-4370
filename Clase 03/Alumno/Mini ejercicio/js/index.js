var contrseña = prompt('Ingrese su Contraseña ');
contraseña = contrseña.toLocaleLowerCase();

while (contraseña === '' || contraseña === '1234') {
  contraseña = prompt('Ingrese su Contraseña ');

}

if (contraseña === '1234') {
  console.log('Contraseña no Válida');
} else {
  console.log('Contraseña Valida');

}

console.log('La contraseña es : ' + contraseña); 3