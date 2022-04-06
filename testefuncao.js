"use stric"

//Construir uma função que calcula a media
// requisitos
//Pode receber um ou mais valores numericos
//deve retornar um unico numero
//deve gerar um erro caso receber um numero não numerico
//deve retornar zero caso recebr nenhum parametro


function mediaN(arr = []){
    let soma = 0
    let qtdValores = arr.length
    let mediaRes =0
    for(let i = 0; i < qtdValores;i++){              
        if( typeof arr[i] !== "number" ){
            throw Error("Um dos valores digitados não é um numero")
            
        }else{
            soma +=arr[i]
            mediaRes = soma / qtdValores    
        }
        
    }
    console.log(`${mediaRes}`)
}
mediaN([50,60,80,70,100])


