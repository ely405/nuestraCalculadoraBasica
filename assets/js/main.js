


function operacion (){
  var suma       = document.getElementById('num1').value + document.getElementById('num2').value;
  var resta      = document.getElementById('num1').value - document.getElementById('num2').value;
  var multiplica = document.getElementById('num1').value * document.getElementById('num2').value;
  var divide     = document.getElementById('num1').value / document.getElementById('num2').value;

}
function print (){
  var record = document.getElementById('id');
  algo == "suma"          ? r=suma:
  algo == "resta"         ? r= resta:
  algo =="multiplicacion" ? r=multiplica:
  algo == "division"      ? r= divide: alert('mal');
  record.innerHTMML= r;
}
