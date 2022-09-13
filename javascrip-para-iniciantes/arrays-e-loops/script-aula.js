// array, É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
var videoGames = ['Switch', 'PS4', 'XBox'];
videoGames[0] // Switch
videoGames[2] // Xbox

// metoos e propriedades de uma array
var videoGames = ['Switch', 'PS4', 'XBox'];
videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3
// Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente

// for loop, fazem algo repetidamente ate q uma condição seja atingida
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// Retorna de 0 a 9 no console
// O for loop possui 3 partes, início, condição e incremento

// while loop
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console
//  for loop é mais comum 

// arrays  e loops
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

// break, o loop irá parar caso encontre
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}
// Podemos passar os seguintes parâmetros item, index e array

// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
var videoGames = ['banana', 'pera', 'maça', 'abacaxi'];
videoGames.forEach(function(item, index, array) {
  console.log(item, index, array);
});
// O argumento item será atribuído dinamicamente
// Podemos passar os seguintes parâmetros item, index e array

// não se confunda com a sintaxe
var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}

// Não aconselho escrever da forma acima, mas funciona normalmente.