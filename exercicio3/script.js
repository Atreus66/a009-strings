/*# Exercício 3

A partir da frase a seguir, faça o que se pede

```
Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
```

a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”*/


//Crie a const para a frase aqui

const frase = `\"Jorge tem uma casa verde e com portão azul, com os dizeres: BOAS VINDAS, mas não deixe o gato sair\"`
console.log(frase)

// Aqui está ocorrendo a substituição das cores
const novaFrase = frase.replace ("verde","rosa")
console.log(novaFrase)
const fraseFinal = novaFrase.replace("azul","laranja")
console.log(fraseFinal)

// Aqui está verificando as cores "verde" E "Laranja" separadamente 

console.log(fraseFinal.includes("verde"))
console.log(fraseFinal.includes("laranja"))

const parte1 = "Jorge tem uma casa rosa e com portão laranja, com os dizeres:"
const parte2 = "BOAS VINDAS, mas não deixe o gato sair"
console.log(parte1, parte2.toUpperCase())

//const novaString2 = frase.replace("mas não deixe o gato sair", (`${"mas não deixe o gato sair" .toUppercase()}`))
//console.log(novaString2)

console.log(`${"oi".toUpperCase()}`)
//dentro da tua ${}, bota uma aspa dupla ${"texto".toUpperCase()}

const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

console.log(frase.replace("mas não deixe o gato sair", `${"mas não deixe o gato sair".toUpperCase()}`))