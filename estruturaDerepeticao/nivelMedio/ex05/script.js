function encontrarMaior() {
    let nums = [
        parseInt(document.getElementById('num1').value),
        parseInt(document.getElementById('num2').value),
        parseInt(document.getElementById('num3').value),
        parseInt(document.getElementById('num4').value),
        parseInt(document.getElementById('num5').value)
    ]
    let maior = Math.max(...nums)
    document.getElementById('output').innerHTML = "O maior número é: " + maior
}
