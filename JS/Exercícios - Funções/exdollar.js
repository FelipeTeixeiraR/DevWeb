let resultadoR = document.getElementById("resultadoR")
let resultadoD = document.getElementById("resultadoD")
let inputD = document.getElementById("inputD")
let inputR = document.getElementById("inputR")
inputD.addEventListener("input", function(){
    let conversao = inputD.value / 5.79
    resultadoR.textContent = conversao
})
inputR.addEventListener("input", function(){
    let conversaoR = inputR.value * 5.79
    resultadoD.textContent = conversaoR
})
