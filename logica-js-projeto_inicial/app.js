alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao número secreto 
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número de 1 a 10');
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

