function calcularFatorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * calcularFatorial(n - 1);
    }
}

let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = calcularFatorial(numero);

alert(`O fatorial de ${numero} é ${fatorial}`);
