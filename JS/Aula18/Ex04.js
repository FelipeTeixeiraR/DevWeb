lfrutas = []

while(true){
    const input = prompt("Digite o nome de uma fruta:")
    if (input == "fim") {
        break
    }

    lfrutas.push(input)
    
   
}
let mfrutas = document.getElementById("frutas")
mfrutas.innerHTML = (lfrutas)