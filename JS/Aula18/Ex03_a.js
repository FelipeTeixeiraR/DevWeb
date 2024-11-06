//Array usado como lista//
lista=["fulano", "estrada a", 1880, 50.5, true]
alert(lista)
//Percorrendo a lista//
for(var i=0;i< lista.length ;i++){
    document.write("<h2>"+ lista[i] +"</h2>")
}
//manipulação de listas //
//adicionar mais um elemento ao final da lista//
lista.push("84500-000")
alert(lista)
//remover ultimo elemento da lista//
lista.pop
alert(lista)
//remover o primeiro elemento da lista
lista.shift
alert(lista)
//inserir um elemento na primeira posição da lista//
lista.unshift("deutrano")
alert(lista) 