// // ------------Exercício 1----------------
// function calculaIdade(anoNascimento){
//     return 2022-anoNascimento
// }

// console.log(calculaIdade(1989))


// // ------------Exercício 2----------------
// function calculaDiferencaAno(anoInicial,anoFinal){
//     result = anoFinal-anoInicial
//     if(result>=0){
//         console.log(result)
//     }else{
//         console.log(result*-1)
//     }
    
// }
// calculaDiferencaAno(2000,1900)
// calculaDiferencaAno(10,1000)


// // ------------Exercício 3----------------
// function valorAPagar(macas){
//     if (macas<12){
//         preco = macas*1.3
//     }else{
//         preco = macas
//     }
//     return preco  
// }

// console.log(valorAPagar(9))
// console.log(valorAPagar(15))


// // ------------Exercício 4----------------
// function calculaValorSalario(salario,vendas){
//     if (vendas<=1500){
//         comissao=vendas*0.03
//     }else{
//         comissao=vendas*0.05
//     }
//     let total = salario+comissao
//     return total
// }

// console.log(calculaValorSalario(2000,10000))

// // ------------Exercício 5----------------
// function notaDaPosicao(lista,posicao){
//     return lista[posicao]
// }

// let notas=[5,7,10,3,9,8]

// console.log(notaDaPosicao(notas,0))
// console.log(notaDaPosicao(notas,2))
// console.log(notaDaPosicao(notas,5))


// // ------------Exercício 6----------------
// function notaDaPosicao(lista,posicao){
//     if (lista[posicao]>=7){
//         result="Aprovado"
//     }else{
//         result="Reprovado"
//     }
//     return result
// }

// let notas=[5,7,10,3,9,8]

// console.log(notaDaPosicao(notas,0))
// console.log(notaDaPosicao(notas,2))
// console.log(notaDaPosicao(notas,5))


// ------------Exercício 7----------------
function addNota(lista,nota){
    if (nota>0 && nota<=10){
    lista.push(nota)}
    return lista
}

provas=[7,8.8,9,10,7.5]

// console.log(addNota(provas,9.9))
console.log(addNota(provas,11))

