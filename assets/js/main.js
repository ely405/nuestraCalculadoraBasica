function suma(){
  var sum = parseInt(document.getElementById('firstNumber').value) + parseInt(document.getElementById('secondNumber').value);
  return document.getElementById('result').innerHTML = sum;
}
function resta(){
  var res = parseInt(document.getElementById('firstNumber').value) - parseInt(document.getElementById('secondNumber').value);
  return document.getElementById('result').innerHTML = res;
}

function imprimeResult() {
  suma();
}

function continuaOperando() {
  return suma();
}

/*
var result;
function sum() {
  return result;
}

switch (sum()) {
    case "suma":
        result = 4;
        break;
    case "resta":
        result=6;
        break;
}
document.getElementById("hola").innerHTML = "Today is " + day;
*/
