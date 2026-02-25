document.write ("<h2> Entrada de dados</h2>");

var numero1 = prompt("digite o numero 1");
var numero2 = prompt("digite o numero 2");

document.write("numero 1 =" + numero1 + "<Br>");
document.write("nuemro 2 =" + numero2 + "<br>");

document.write ("<h2>Operaçoes aritmeticas</h2>")
var resultado;

resultado = Number(numero1) + Number(numero2);

document.write("A soma dos numeros e" + resultado + "<br>");

resultado = Number(numero1) - Number(numero2);

document.write("A subtraçao do numero e" + resultado + "<br>")

resultado = Number(numero1) * Number(numero2);

document.write("O produtos do numero e" + resultado + "<br>")

resultado = Number(numero1) / Number(numero2);

document.write("A divisao entre os numero e" + resultado + "<br>")