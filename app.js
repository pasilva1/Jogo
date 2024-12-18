alert('Olá mundo');
let quantidadeFuncionarios = 100
let numeroSecreto = parseInt(Math.random() * quantidadeFuncionarios + 1);
console.log(`O Número secreto do sistema é : ${numeroSecreto}`);
let chute; 
let tentativas = 1;

// enquanto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${quantidadeFuncionarios}`);
    // se chete for igual ao número secreto
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

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // Operador ternário JavaScript
alert(`Parabéns !!! Você descobriu, e o número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Parabéns !!! Você descobriu, e o número secreto é ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Parabéns !!! Você descobriu, e o número secreto é ${numeroSecreto} com ${tentativas} tentativa`);
// }


