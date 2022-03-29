//Treinando condições

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