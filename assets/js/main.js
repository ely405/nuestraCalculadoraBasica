
function imprimeResult(){
  var nombre = document.getElementById("name").value;
  var num1 = document.getElementById("firstNumber").value;
  var num2 = document.getElementById("secondNumber").value;
  var operacion = document.getElementById("operador").value;

    var resultado = (operacion == "suma")? parseInt(num1)+parseInt(num2) :
                    (operacion == "resta")? parseInt(num1)-parseInt(num2):
                    (operacion == "division")? parseInt(num1)/parseInt(num2):
                    (operacion == "multiplicacion")? parseInt(num1)*parseInt(num2): "";

    document.getElementById("result").innerHTML = "hola " + nombre + " el resultado de tu operación es " + resultado;

}
function continuaOperando(){
  var nombre = document.getElementById("name").value;
  var num1 = document.getElementById("firstNumber").value;
  var num2 = document.getElementById("secondNumber").value;
  var op = document.getElementById("operador").value;

  var resultado = (op == "suma")? parseInt(num1)+parseInt(num2) :
                  (op == "resta")? parseInt(num1)-parseInt(num2):
                  (op == "division")? parseInt(num1)/parseInt(num2):
                  (op == "multiplicacion")? parseInt(num1)*parseInt(num2): "";

document.getElementById('firstNumber').value= resultado;
document.getElementById('secondNumber').value="";
document.getElementById('operador').value="";

}
