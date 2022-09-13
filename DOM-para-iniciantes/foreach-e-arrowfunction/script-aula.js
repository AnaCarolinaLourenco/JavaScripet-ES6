// // FOR EACH: Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
// const imgs = document.querySelectorAll('img');
// imgs.forEach(function(item){
//   console.log(item);
// });
// // O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;
// imgs.forEach(function(item, index, array){
//   console.log(item); // o item atual no loop
//   console.log(index); // o número do index
//   console.log(array); // a Array completa
// });

// forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);
titulosArray.forEach(function(item){
  console.log(item);
});

// ARROW FUNCTION: Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.
const imgs = document.querySelectorAll('img');
imgs.forEach((item) => {
  console.log(item);
});

// parâmetro único não precisa de parênteses
imgs.forEach(item => {
  console.log(item);
});
// multiplos parâmetros precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});
// sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});
