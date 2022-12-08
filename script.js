function ConverterEmEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valor);
  var valorEmReal = valorEmEuroNumerico * 5.19;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em real é R$ " + valorEmReal.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterEmDólar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDólarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDólarNumerico * 5.25;

  var elementoValorConvertido1 = document.getElementById("valorConvertido1");
  var valorConvertido1 = "O valor em real é R$ " + valorEmReal.toFixed(2);
  elementoValorConvertido1.innerHTML = valorConvertido1;
}
function ConverterEmLibra() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDólarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDólarNumerico * 6.06;

  var elementoValorConvertido2 = document.getElementById("valorConvertido2");
  var valorConvertido2 = "O valor em real é R$ " + valorEmReal.toFixed(2);
  elementoValorConvertido2.innerHTML = valorConvertido2;
}