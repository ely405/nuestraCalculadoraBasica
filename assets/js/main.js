
// imprime el resultado  cunado ya no se quiere seguir operando
function imprimeResult(){

  var nombre = document.getElementById("name").value;
  var num1   = document.getElementById("firstNumber").value;
  var num2   = document.getElementById("secondNumber").value;
  var op     = document.getElementById("operador").value;

  var resultado = (op == "suma")? parseInt(num1)+parseInt(num2) :
                  (op == "resta")? parseInt(num1)-parseInt(num2):
                  (op == "division")? parseInt(num1)/parseInt(num2):
                  (op == "multiplicacion")? parseInt(num1)*parseInt(num2): "";

  document.getElementById("result").innerHTML = "hola " + nombre + " el resultado de tu operación es " + resultado;


  }
