var esc = parseInt(prompt("Digite a tabuada que você quer"))
let result = document.getElementById("Resultado")
let n1 = esc * 1
let n2 = esc * 2
let n3 = esc * 3
let n4 = esc * 4
let n5 = esc * 5
let n6 = esc * 6
let n7 = esc * 7
let n8 = esc * 8
let n9 = esc * 9
let n10 = esc * 10

result.innerHTML = (n1.toString() + "," + n2.toString() + "," + n3.toString() + "," + n4.toString() + "," + n5.toString() + "," + n6.toString() + "," + n7.toString() + "," + n8.toString() + "," + n9.toString() + "," + n10.toString())