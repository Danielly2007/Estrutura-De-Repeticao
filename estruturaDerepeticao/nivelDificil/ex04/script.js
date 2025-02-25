function calcularFatorial(n) {
    if (n === 0 || n === 1) return 1
    let fatorial = 1
    for (let i = 2; i <= n; i++) {
        fatorial *= i
    }
    return fatorial
}

function combinar(n, k) {
    return calcularFatorial(n) / (calcularFatorial(k) * calcularFatorial(n - k))
}

let output = document.getElementById('output');
let linhas = 5

for (let i = 0; i < linhas; i++) {
    let linha = ''
    for (let j = 0; j <= i; j++) {
        linha += combinar(i, j) + ' '
    }
    output.innerHTML += linha + '<br>'
}