var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
// Precisão para até 15 digitos

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4, restante inteiro da divisao

var soma = '100' + 50; // 10050 = string 
var subtracao = '100' - 50; // 50 = number
var multiplicacao = '100' * '2'; // 200, string x string = number 
console.log(typeof multiplicacao);
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)

// a ordem importa, operacoes aritmeticos binarios, precisao de 2 num
var total1 = 20 + 5 * 2; // 30, primeiro mult e div, depois soma e sub
var total2 = (20 + 5) * 2; // 50, primeiro o parenteses
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// operacoes aritmeticas unarios, apenas 1 num
var incremento = 5;
console.log(incremento); // 5
console.log(incremento++); // 5, o mesmo numero
console.log(incremento); // 6, x+1
var incremento2 = 8;
console.log(incremento2); // 8
console.log(++incremento2); // 9, ja retorna a soma 
console.log(incremento2); // 9

// + e - tenta transformar string em number
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN
var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 
var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
