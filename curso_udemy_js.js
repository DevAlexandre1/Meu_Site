/*
//Métodos dentro de objetos

const lapis ={
    modelo: "preto",
    qtd: 10,
    comprar(nqtd){
       if(nqtd > this.qtd){
          console.log(`Quantidade insuficiente, maximo de lapis em estoque: ${lapis.qtd} unidades`)
       }else{
          lapis.qtd -= nqtd
          console.log('Compra realizada com sucesso')
          console.log(`Quantidade restante no estoque: ${lapis.qtd} unidades.`)
 
       }
    },
    reporEstoque(reporEstoque){
       this.qtd += reporEstoque
       console.log(`Estoque reposto, quantidade atual: ${lapis.qtd}`)
    }
    
 }
 
 //lapis.comprar(8)
 lapis.reporEstoque(50)
*/

 //Objetos dentro de Arrays

 const pessoas = [{
     nome: "Carlos",
     idade: 30
 },
 {
    nome: "Iolanda",
    idade: 40
}
,
 {
    nome: "Marcos",
    idade: 20
}
,
 {
    nome: "Lilia",
    idade: 10
}]

//console.log(pessoas)
//Qual a idade da pessoa que esta no indice 3
console.log(pessoas[2].idade)