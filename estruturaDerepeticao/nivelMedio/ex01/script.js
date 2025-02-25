function mostrarTabuada() {
    let numero = document.getElementById('numero').value
    let output = document.getElementById('output')
    output.innerHTML = ''

    if (numero) {
        for (let i = 1; i <= 10; i++) {
            output.innerHTML += `${numero} x ${i} = ${numero * i}<br>`
        }
    } else {
        output.innerHTML = 'Por favor, insira um número.'
    }
}