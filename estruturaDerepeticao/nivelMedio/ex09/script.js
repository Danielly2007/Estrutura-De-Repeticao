function calcularMedia() {
    let nota1 = parseFloat(document.getElementById('nota1').value)
    let nota2 = parseFloat(document.getElementById('nota2').value)
    let nota3 = parseFloat(document.getElementById('nota3').value)
    let media = (nota1 + nota2 + nota3) / 3
    document.getElementById('output').innerHTML = "A média das notas é: " + media.toFixed(2)
}