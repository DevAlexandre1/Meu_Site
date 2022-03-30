//Treinando condições
/*
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


//IMPORTANTE ----> fizzBuzz compara valores baseados com o tipo de entrada!


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
}

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
//Mais de uma condicional
// Calculando velocidade maxima

/*  Velocidade maxima permitida é até 70;
    A cada 5km de velocidade acima do permitido é colocado 1 ponto na carteira;
    math.Floor() está função arredonda o valor da variável;
    Caso pontos maior que 12, retornar 'Carteira suspensa';



verificarVelocidade(100);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;

    if(velocidade <= velocidadeMaxima)
    console.log('Velocidade permitida');
    else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos >= 12)
            console.log('Carteira suspensa');
        else
            console.log('Acima da velocidade, recebeu', pontos, 'pontos.')
    }
}


const v1 = 50;
for(let i = 0; i <= v1; i++){
    valorverificar(v1);

    function valorverificar(entrada){
       entrada = i;
        if(entrada % 2 === 0){
            console.log(entrada, 'Par');

        }
        else{
            console.log(entrada,'Impar');
        }
    }
}


//Criar um método que verifica as propriedades de um objeto e traz apenas os tipos string

const  filme ={
    Titulo: 'Homem de ferro',
    Ano: 2022,
    Personagem: 'Tony Stark',
    Valor: 250.000

}
exibirPropriedade(filme);
function exibirPropriedade(obj){
    
    for(prop in obj)
        if(typeof obj[prop] === 'string'){
            console.log(prop,obj[prop])
        }
    
}

let salarioMes;
salarioMes = 1800;


if(salarioMes < 1000){
    console.log('Abaixo do esperado');
}
if((salarioMes > 1000) && (salarioMes < 1500)){
    console.log('Salário esperado');
}
if((salarioMes > 1501) && (salarioMes < 2000)) {
    console.log('Salário atual');
}    
if((salarioMes > 2001) && (salarioMes < 2500)) {
    console.log('Salário acima do esperado');
}   
if(salarioMes > 2500) {
    console.log('Salário muito acima do esperado');
}   
*/

peso = 80;
altura = 1.80;

res = Math.floor( peso / altura**2);

function calcular(res){

    //restela.innerHTML = `<h2>Seu IMC é ${res} e seu grau de obesidade é 0</h2>`;

}

if(res < 18.5){
    //restela.innerHTML = `<h2>Seu IMC é ${res} e seu grau de obesidade é 0</h2>`;
    console.log('Seu IMC é', res,'Seu grau de gordura é 0')
}
if(( res > 18.5)  &&  (res < 24.9)){
    //restela.innerHTML = `<h2>Seu IMC é ${res} e seu grau de obesidade é 0</h2>`;
    console.log('Seu IMC é', res,'Seu grau de gordura é 0')
}
if((res > 25 ) &&  (res < 29.9)) {
    //restela.innerHTML = `<h2>Seu IMC é ${res} e seu grau de obesidade é I</h2>`;
    console.log('Seu IMC é', res,'Seu grau de gordura é I')
}    
if((res > 30)  &&  (res < 39.9)) {
    //restela.innerHTML = `<h2>Seu IMC é ${res} e seu grau de obesidade é II</h2>`;
    console.log('Seu IMC é', res,'Seu grau de gordura é II')
}   
if(res > 40) {
    //restela.innerHTML = `<h2>Seu IMC é ${res} e seu grau de obesidade é III</h2>`;
    console.log('Seu IMC é', res,'Seu grau de gordura é III')
}   
        