// objetos: Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}
pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true

//  metodos: É uma propriedade que possui uma função no local do seu valor.
var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

// Abreviação de area: function() {} para area() {}, no ES6+
// organizar codigo, Objetos servem para organizar o código em pequenas partes reutilizáveis.
Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?

// um objeto eh criado utilizando {}
var carro = {};
var pessoa = {};
typeof carro; // 'object'

//  do notation get, acesse propiredades de um objeto utilizando o ponto . 
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
var bg = menu.backgroundColor; // '#84E'

// do notation set: add propriedades e metodos: Basta adicionar um novo nome e definir o valor.
var menu = {
  width: 800,
}
menu.height = 50;
menu.position = 'fixed';

// palavra chave THIS faz ref ao proprio objeto
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}
menu.metadeHeight(); // 25
// sem o this, seria 60

// prototipo e heranca: O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
var menu = {
  width: 800,
}
menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false
// hasOwnProperty eh um metodo de object