let amigo = {nome:'Franklin',
sexo: 'M',
peso: 95.5,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
console.log(`${amigo.nome} tinha ${amigo.peso}Kg`)
amigo.engordar(2)

console.log(`E agora engordou,  ${amigo.nome} pesa ${amigo.peso}Kg`)