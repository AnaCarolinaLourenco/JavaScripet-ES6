var idade = 19;
console.log(typeof idade);
// typeof serve p dizer qual o tipo da variavel

var nome = 'ana carolina';
var sobrenome = ' lourenco';
var nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
console.log(frase1, frase2);
console.log(typeof frase1);
// qnd soma string + number = string