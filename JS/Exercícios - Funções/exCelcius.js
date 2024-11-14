
function change(n1, resultado){
    n1=parseFloat(prompt("Digite uma temperatura em graus Celsius:"))
    var resultadoDisplay = document.getElementById("resultado")
    var resultado = n1 + 273.15
    alert(resultado)
    resultadoDisplay.textContent = resultado
}

change()
