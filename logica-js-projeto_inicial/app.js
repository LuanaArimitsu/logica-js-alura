alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
<<<<<<< HEAD
let chute; 
=======
let chute;
>>>>>>> 6b7460d7de2af77e0d286c2d84ed9feb90e849cb
let tentativas = 1;

//enquanto o chute não for igual ao número secreto 
while (chute != numeroSecreto) {
<<<<<<< HEAD
    chute = prompt ('Escolha um número de 1 a 100');
=======
    chute = prompt('Escolha um número de 1 a 10');
>>>>>>> 6b7460d7de2af77e0d286c2d84ed9feb90e849cb
    //se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

//código muito usado no mercado de trabalho
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Número secreto correto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


//if(tentativas > 1){
//    alert(`Número secreto correto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//   alert(`Número secreto correto ${numeroSecreto} com ${tentativas} tentativa`);
//}

