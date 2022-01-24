let valorTotal = 0;
let vendasMaquina = 0;
function picoles(picoles){
    let picole = picoles * 1.3
    console.log('Você vendeu R$' + picole + ' de picoles' )
    return valorTotal = valorTotal + picole
}
;
function skimos(skimos){
    let skimo = skimos * 2
    console.log('Você vendeu R$' + skimo + ' de skimos')
    return valorTotal = valorTotal + skimo}

function coberturas(coberturas){
let cobertura = coberturas * 2.25
    console.log('Você vendeu R$' + cobertura + ' de coberturas')
    return valorTotal += cobertura  
}

function laranjinhas (laranjinhas){
    let laranjinha = laranjinhas * 1
    console.log('Você vendeu R$' + laranjinha + ' de laranjinhas')
    return valorTotal += laranjinha 
}
function cremosinhos(cremosinhos){
    let cremosinho = cremosinhos * 1.2
    console.log('Você vendeu R$' + cremosinho + ' de cremosinhos')
    return valorTotal += cremosinho 
}
function vendasCartao (a){
    return vendasMaquina += a
}
vendasCartao(7+0)
picoles(39-24+0)
skimos(12-7)
coberturas(6-4)
laranjinhas(12-1)
cremosinhos(0)
console.log('O total de vendas foi '+ valorTotal)
console.log(valorTotal) 
console.log('O valor a receber é')
console.log(valorTotal -vendasMaquina)








