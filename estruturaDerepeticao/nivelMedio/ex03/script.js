function calcularFatorial() {
    let numero = document.getElementById('numero').value
    let fatorial = 1
    
    for (let i = 1; i <= numero; i++) {
        fatorial *= i
    }
    document.getElementById('output').innerHTML = "O fatorial de " + numero + " é: " + fatorial
}
