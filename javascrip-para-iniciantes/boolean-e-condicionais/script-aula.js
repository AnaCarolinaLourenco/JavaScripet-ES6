// boolean retorne true ou false
var possuiGraduacao = true;
var possuiDoutorado = false;

// Condicionais If e Else: Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.
if(possuiGraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação e não executa o else
// O valor dentro dos parênteses sempre será avaliado em false ou true.

// Condicionais Else If: Se o if não for verdadeiro, ele testa o else if
if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado
// Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.
/* Falsy
 if(false)
 if(0) // ou -0
 if(NaN)
 if(null)
 if(undefined)
 if('') // ou "" ou ``*/

/* Truthy
 if(true)
 if(1)
 if(' ')
 if('andre')
 if(-5)
 O operador !, nega uma operação booleana. Ou seja, !true é igual a false*/

//  operadores de comparacao smp retornam true ou false 
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

//  operadores de comparacao: O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

//  operadores logicos &&: Compara se uma expressão e a outra é verdadeira
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true
// Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos

// operadores logicos ||: Compara se uma expressão ou outra é verdadeira
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true
//  Retorna o primeiro valor true que encontrar

//  Switch:  você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}
