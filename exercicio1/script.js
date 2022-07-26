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
const nomeComida1 = prompt("Qual sua comida favorita?")
const nomeComida2 = prompt("Qual sua comida favorita?")
const nomeComida3 = prompt("Qual sua comida favorita?")

console.log(`Essas são as comidas favoritas do ${user} \n${nomeComida1} \n${nomeComida2} \n${nomeComida3}`)