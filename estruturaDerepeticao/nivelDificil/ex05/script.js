function converter() {
    let numeroDecimal = parseInt(document.getElementById('decimal').value)
    let binario = ''

    if (numeroDecimal === 0) {
        binario = '0'
    } else {
        while (numeroDecimal > 0) {
            binario = (numeroDecimal % 2) + binario
            numeroDecimal = Math.floor(numeroDecimal / 2)
        }
    }

    document.getElementById('output').innerHTML = `Número em binário: ${binario}`
}