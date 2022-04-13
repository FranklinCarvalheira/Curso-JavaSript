let valores = [8,9,5,3,2,1,5]
valores.sort()
/*
for(let pos=0; pos<valores.length; pos++){
    console.log(valores[pos])
}
*/

for (let pos in valores) {
    console.log(valores[pos])
}