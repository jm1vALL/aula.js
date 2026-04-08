function calcular()
{
    let base, altura, resultado;
}

//entrada
base Number( document.getElementById("base").value);
altura Number( document.getElementById("altura").value);

//processo
resultado = base * altura ;

//saida
document.getElementById("resultado").innerHTML = "<p> O resultado é " + resultado + "</p>"