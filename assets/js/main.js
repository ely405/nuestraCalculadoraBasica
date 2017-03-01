
function imprimeResult(){
  var nombre = document.getElementById("name").value;
  var num1 = document.getElementById("firstNumber").value;
  var num2 = document.getElementById("secondNumber").value;
  var operacion = document.getElementById("operador").value;
  var sum = parseInt(num1) + parseInt(num2);
  var res = parseInt(num1) - parseInt(num2);
  var div = parseInt(num1) / parseInt(num2);
  var mult = parseInt(num1) * parseInt(num2);

  var resultado = if (operacion == "suma"){
                      return sum;
                    } if (operacion == "resta"){
                      res;
                    } if (operacion == "division"){
                     div;
                   }  if (operacion == "multiplicacion"){
                     mult;
                   };
}
