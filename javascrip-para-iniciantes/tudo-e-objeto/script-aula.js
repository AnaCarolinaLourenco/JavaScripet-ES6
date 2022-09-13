// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
var nome = 'André';
nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'
// Uma string herda propriedades e métodos do construtor String()

var altura = 1.8;
altura.toString(); // '1.8'
altura.toFixed(); // '2'
// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos

function areaQuadrado(lado) {
  return lado * lado;
}
areaQuadrado.toString();
/*"function areaQuadrado(lado) {
 return lado * lado;
}"*/
areaQuadrado.length; // 1
// funciona tmb em funcoes 

// elementos do DOM 
var btn = document.querySelector('.btn');
btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})
// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.