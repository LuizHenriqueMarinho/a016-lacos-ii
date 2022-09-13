// # Exercício 1

// Um analista quer conseguir ver quantos gols cada um de seus 
// 5 atacantes marcou nas últimas 5 temporadas,
// e quer que você construa um código que mostre isso.

// Crie um laco `for` que itere pelo array deixado no arquivo `script.js`, 
// e em sequência itere pelo array que existe dentro do primeiro array. 
// Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:

// ```bash
// Jogador 1: 13, 15, 25, 34, 35
// Jogador 2: 30, 48, 30, 12, 47
// ```

const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

// for(let i = 0; i<array.length; i++) //usando for in
// {
//     for(let j = 0; j<array[i].length; j++) //usando método tradicional 
//     {
//         console.log("Jogador " + (i+1) + ": " + " (temporada " + (j+1) + " : " + array[i][j] + ")")
//     }
// }
let cont = 0
for(let i in array) //usando for in
{   
    console.log("Jogador " + (Number(i) + 1) + ": ")
    for(let j of array[i]) //usando for in e fot of
    {
        cont ++
        console.log("(temporada " + (cont) + " : " + j + ")")
        if(cont === 5)
        {
            cont = 0
        }
    }
}

