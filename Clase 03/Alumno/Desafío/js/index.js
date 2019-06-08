// desafio clase 3
// entregar!

var operacion = prompt('Ingrese operacion');

var op1;
var op2;

switch (operacion) {
  case 'suma':
    op1 = parseInt(prompt('ingrese operando 1'));
    op2 = parseInt(prompt('ingrese operando 2'));
    console.log(op1 + op2);
    break;

  case 'divison':
    op1 = parseInt(prompt('ingrese operando 1'));
    op2 = parseInt(prompt('ingrese operando 2'));
    while (op2 === 0) {
      op2 = parseInt(prompt('ingrese operando 2 distinto de 0'));
    }
    console.log(op1 / op2);

    break;

  default:
    break;
}