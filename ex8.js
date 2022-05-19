/*

1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor?

2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a 
idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&)

3. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo

4. Faça um programa para a leitura de duas notas de um aluno.  
    A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
    A mensagem “Aprovado com Distinção”, se a média for igual a 10;
    A mensagem “Reprovado” se a média for menor de do que 7;
*/
//1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor?
function maiorMenor(a, b, c) {
    if (maiorMenor == a > b) {
        return a;
    }
    else if (maiorMenor == a > c) {
        return b;
    }
    else if (b > c || c > b) {
        return c;
    }
    else {
        return maiorMenor
    }
}
console.log(maiorMenor(2, 3, 5))

//2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a 
//idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&)
function doarSangue(a, b){
    if ( a < 18 && b > 67){
        return "naopodedoarsangue"
    }
    else if( b > 18 || b < 67 ){
        return "podeDoar"
    }
    else {
        return doarSangue;
    }
}
console.log(doarSangue(18, 60))
//3. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo
function positivoNegativo(a,b){
    if( a > b){
        return "positivo"
    }
    else if( a< b ){
        return "negativo"
    }
    else {
        return positivoNegativo;
    }
}
console.log(positivoNegativo(20, 40))
// 4. Faça um programa para a leitura de duas notas de um aluno.  
//     A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
//     A mensagem “Aprovado com Distinção”, se a média for igual a 10;
//     A mensagem “Reprovado” se a média for menor de do que 7;
 
function media(a, b ){
    if(a >= b){
        return "Aprovado"
    }
    else if (a == b){
        return "Aprovado"
    }
    else if( a < b){
        return "Reprovado"
    }
    else {
        return media
    }
}
console.log(media(7, 10))