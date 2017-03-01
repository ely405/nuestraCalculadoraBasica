// imprime el resultado  cunado ya no se quiere seguir operando
function imprimeResult(){
  var all    = document.getElementsByClassName('clase');
  var nombre = document.getElementById("name").value;
  var num1   = document.getElementById("firstNumber").value;
  var num2   = document.getElementById("secondNumber").value;
  var op     = document.getElementById("operador").value;
  if (all[0].value.length == "" || all[1].value.length == 0 || all[2].value.length == 0 || all[3].value.length == 0  ){
  }
  else{
  var resultado = (op == "suma")? parseInt(num1)+parseInt(num2) :
                  (op == "resta")? parseInt(num1)-parseInt(num2):
                  (op == "division")? parseInt(num1)/parseInt(num2):
                  (op == "multiplicacion")? parseInt(num1)*parseInt(num2): "";
  }
}
