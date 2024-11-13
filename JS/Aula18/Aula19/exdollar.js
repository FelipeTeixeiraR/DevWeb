function convert(e, vl,n2, resultado){
    resultado = document.getElementById("resultado")
    e = parseInt(prompt("Converter de 'dollar para real(1)' converter de 'real para dollar(2)'"))
    vl = parseFloat(prompt("escreva o valor a ser convertido: "))
    if (e== 1){
        vl / 5.79
        alert(vl)
    }
    else if (e== 2){
        vl * 5.79
        alert(vl)
    }
}
convert()
//5,79 