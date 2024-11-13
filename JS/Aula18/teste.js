/*let inp = document.getElementById("input")
let display = document.getElementById("display")
inp.addEventListener("input", function(){
    display.textContent = (inp.value)
})*/
var list = []
let sum =0
let inp = document.getElementById("input")
let disp = document.getElementById("display")
inp.addEventListener("input", function(){
    list.push(inp)
    disp.textContent = (list)
    for(let i=0; i < list.length;i++){
        let sum = list[i]
    }
    //disp.textContent=(sum)

    
})

