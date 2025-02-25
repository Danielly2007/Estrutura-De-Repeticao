function contarVogais() {
    let palavra = document.getElementById('palavra').value.toLowerCase()
    let vogais = 'aeiou'
    let count = 0
    
    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            count++
        }
    }
    document.getElementById('output').innerHTML = "A palavra tem " + count + " vogais."
}
