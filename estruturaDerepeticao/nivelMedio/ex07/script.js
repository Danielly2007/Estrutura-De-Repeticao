function inverterPalavra() {
    let palavra = document.getElementById('palavra').value
    let invertida = ""
    
    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i]
    }
    document.getElementById('output').innerHTML = "A palavra invertida é: " + invertida
}