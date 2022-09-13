var nome = 'Ana';
// let idade = 19;
const possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade);

var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;
console.log(precoTotal);

var precoAplicativo;
// retorna undefined
/* Os nomes podem iniciar com $, _, ou letras. Podem conter numeros mas nao iniciar com eles
  Case sensitive: nome eh diferente de Nome
  Camel case: eh comum nomearmos assim: abrirModal
  Nao utilizar palavras reservadas: https://www.w3schools.com/js/js_reserved.asp */

// Invalido
/* var §nome;
var function;
var 1possuiFaculdade; */

// Valido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

console.log(nome2);
// retorna nome is not defined

console.log(nome);
var nome = 'Ana';
// Retorna undefined
var profissao = 'Designer';
console.log(profissao);
// Retornar Designer

var idade = 28;
idade = 29;
let preco = 50;
preco = 25;
// var e let pode alterar 
// const possuiFaculdade = true;
// possuiFaculdade = false;
// Retorna um erro
