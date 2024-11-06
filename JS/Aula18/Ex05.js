cafe=[]
almoço=[]
janta=[]

while(true){
    const input = prompt("Digite os pratos para o café da manhã:")
    if (input == "fim") {
        break
    }
    cafe.push(input)
    
}
input="nda"
while(true){
    const input = prompt("Digite os pratos para o almoço:")
    if (input == "fim") {
        break
    }
    almoço.push(input)
}
input="nda"
while(true){
    const input = prompt("Digite os pratos para o jantar")
    if (input == "fim") {
        break
    }
    janta.push(input)
}
let mcafe = document.getElementById("mcafe")
let malmoço = document.getElementById("malmoço")
let mjanta = document.getElementById("mjanta")
mcafe.innerHTML = (cafe)
malmoço.innerHTML = (almoço)
mjanta.innerHTML = (janta)