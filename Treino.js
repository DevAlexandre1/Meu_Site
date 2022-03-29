/*//Treinando condições
let salarioMes;
salarioMes = 2500;


switch(salarioMes){

    case  1000:
        console.log('Abaixo do esperado');
        break;

    case 1501:
        console.log('Salário esperado');
        break;

    case 2000:
    console.log('Salário acima do esperado');
    break;

    case 2500:
    console.log('Salário muito acima do esperado');
    break;

    default:
        console.log('Salario incorreto');
}


//Treinando laços

// 1.For
// 2.While
// 3.Do While
// 4. For in
// 5. For of

for(let i = 0; i < 20; i++){
    if(i % 2 !==0){
    console.log('Numeros impares',i);
    }
    else{
        console.log('Numeros pares',i);
    }
    
}

//Treinando fizzBuzz

/*Se o valor fizzbuzz for:
dividido por 3 => retornar Fizz
dividido por 5 => retornar Buss
dividido por 3 e 5 => retornar fizzBuss
Não dividido por 3 ou  5 => retornar a entrada
Não é um numero => retornar 'Não é um numero'

*/
//IMPORTANTE ----> fizzBuzz compara valores baseados com o tipo de entrada!

/*
let resultado = fizzBuzz(100);
console.log(resultado);

function fizzBuzz(entrada){

    //Se o valor não for numero
    if(typeof entrada !== 'number')
    return 'Não é um numero';
    if((entrada % 3 === 0) && (entrada % 5 === 0))
    return 'fizzBuzz';
    if(entrada % 3 === 0)
    return 'fizz';
    if(entrada % 5 === 0)
    return 'Buzz';

    return entrada;
}*/

let n = 100;

for(let i = 0; i < n;i++){

    let resultado = fizzBuzz(i);
    console.log(resultado);


    function fizzBuzz(entrada){

        //Se o valor não for numero
        if(typeof entrada !== 'number')
        return 'Não é um numero';
        if((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'fizzBuzz';
        if(entrada % 3 === 0)
        return 'fizz';
        if(entrada % 5 === 0)
        return 'Buzz';

        return entrada;
    }
}