//Mensagem inicial
let nome = "Hero"
console.log ("Parabéns por chegar até aqui, " + nome + ". Você se provou um grande herói. Vamos ver quantos pontos você coletou até agora!")

//varíaveis do XP (valores fantasia para multiplicadores de pontos)
let monstrosDerrotados = 15
let itensColetados = 7
let questsCompletas = 3
let xp =  ((monstrosDerrotados * 120) + (itensColetados * 50) + (questsCompletas * 300))

//funções de repetição e condicional
contabilizar()
classe()

//contando pontuação de 500 em 500 pontos
function contabilizar(){
    let xpFinal = 0
    console.log("Vejamos...")
    for (let i = 0; i <= xp; i+=500){
        xpFinal += 1
        console.log(i + "...")
    }
    console.log("Você coletou " + xp + " pontos no total!")
}

//condicional de nível
function classe(){
    let nivel = ""
    if (xp <= 1000){
        nivel = "Ferro"

    } else if ((xp >= 1001) && (xp <= 2000)){
        nivel = "Bronze"

    } else if ((xp >= 2001) && (xp <= 5000)){
        nivel = "Prata"

    } else if ((xp >= 5001) && (xp <= 7000)){
        nivel = "Ouro"

    } else if ((xp >= 7001) && (xp <= 8000)){
        nivel = "Platina"

    } else if ((xp >= 8001) && (xp <= 9000)){
        nivel = "Ascendente"

    } else if ((xp >= 9001) && (xp <= 10000)){
        nivel = "Imortal"
        
    } else {
        nivel = "Radiante"
    } 

    console.log("Incrível, " + nome + "! Agora você está no nível " + nivel + "!")
}
