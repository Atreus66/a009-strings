/*# Exercício 1

Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
    ```
    Estas são as comidas favoritas de nomeDoUsuario
    - Comida1
    - Comida2
    - Comida3
    ```
    
Você deve usar apenas um `console.log()` para isso*/


const user = prompt("Qual o seu nome?")
const nomeComida1 = prompt("Qual sua primeira comida favorita?")
const nomeComida2 = prompt("Qual sua segunda comida favorita?")
const nomeComida3 = prompt("Qual sua terceira comida favorita?")

console.log(`Essas são as comidas favoritas do ${user} \n${nomeComida1} \n${nomeComida2} \n${nomeComida3}`)

/*let suaComida = 'Digite sua primeira comida favorita'
const nome = prompt("Digite seu nome")
const comida1 = prompt(suaComida)
const comida2 = prompt(suaComida.replace("primeira", "segunda"))
const comida3 = prompt(suaComida.replace("primeira", "terceira"))
const mensagem = `Estas são as comidas favoritas de ${nome} \n- ${comida1} \n- ${comida2} \n- ${comida3}`
console.log(mensagem)*/