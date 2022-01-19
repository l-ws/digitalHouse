function verificarVelocidade (velocidade){
    if (velocidade <= 74.99){
        return "ok"
    }
    if (velocidade>=75 && velocidade<=134.99){
        const ajfn = velocidade-70;
        const adna = 5;
        return Math.floor(ajfn/adna)
    }
    else {
        return 'todos os'
    }
    }    
console.log('Você perdeu ' + verificarVelocidade(122) + ' pontos na sua  carteira de Habilitação.')


console.log("testando isso aqui")