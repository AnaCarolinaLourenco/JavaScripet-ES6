// EXEMPLO REAL: Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.

// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativo() {
//     this.element().classList.add('ativo');
//   },
// }

// Dom.ativo(); // adiciona ativo ao li
// Dom.seletor = 'ul';
// Dom.ativo(); // adiciona ativo ao ul

// CONSTRUCTOR FUNCTION REAL: Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor.
function Dom() {
  this.seletor = 'li';
  const element = document.querySelector(this.seletor);
  this.ativo = function() {
    element.classList.add('ativo');
  };
}

const lista = new Dom();
lista.seletor = 'ul';
lista.ativo();

const lastLi = new Dom();
lastLi.seletor = 'li:last-child';
lastLi.ativo();

// LEMBRE-SE DE USAR PARÂMETROS
function Dom(seletor) {
  const element = document.querySelector(seletor);
  this.ativo = function(classe) {
    element.classList.add(classe);
  };
}

const lista = new Dom('ul');
lista.ativo('ativo');

const lastLi = new Dom('li:last-child');
lastLi.ativo('ativo');
