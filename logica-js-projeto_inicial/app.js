alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute; 
let tentativas = 1;

//enquanto o chute não for igual ao número secreto 
while (chute != numeroSecreto) {
    chute = prompt ('Escolha um número de 1 a 100');
    //se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Número secreto correto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++; 
    }
}
