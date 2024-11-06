let vetor = [4, 9, 2, 5, 8]
//Exibir o vetor//
alert(vetor)//exibir um determindo elementodo vetor//
alert(vetor[3])
//substituir o valor 9 pelo valor 7 e exibir o vetor//
vetor[1] = 7
alert(vetor)
//percorrendo o vetor com um laço de repetição//
for(var i=0;i<vetor.length;i++){
    document.write("<h2>" +vetor[i] + "</h2>")
}