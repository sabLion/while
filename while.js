console.log("Ex. 1")
//contador
let numeros = 1
while(numeros <= 10){
    console.log(numeros)
    numeros ++
}

console.log("Ex. 2")
//tabuada
let num = prompt  ("Escolha um número")
let multiplicador = 1
while (multiplicador <= 10){
    let resultado = num * multiplicador
    console.log(num, ".", multiplicador, "=", resultado)
    multiplicador += 1
}

console.log("Ex. 3")
//contagem regressiva
let contagem = 10
while (contagem >= 1) {
    console.log(contagem)
    contagem --
}

console.log("Ex. 4")
//verificação de senha
let senha = prompt("Digite a senha")
while (senha != 1234){
    senha = prompt ("tente novamente")
    if (senha == 1234){
        console.log("Senha Correta")
    }
}

console.log("Ex. 5")
//contador
let contador = 50
while(contador <= 100){
    console.log(contador)
    contador ++
}

console.log("Ex. 6")
//sequência numérica
let sequencia = 0
while(sequencia <= 100){
    console.log(sequencia)
    sequencia += 5
}

console.log("Ex. 7")
//mostrando mensagem 
let algoritmo = 1
while (algoritmo <= 5){
    console.log("Eu gosto de JavaScript")
    algoritmo ++ 
}

console.log("Ex. 8")
//exibindo o nome na tela
let nome = prompt("Digite o seu nome")
let repeticao = Number(prompt("Digite um número"))
while (repeticao >= 1){
    console.log(nome)
    repeticao --
}