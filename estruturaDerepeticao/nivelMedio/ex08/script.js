let primos = []
for (let num = 2; num <= 20; num++) {
    let isPrimo = true
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrimo = false
            break
        }
    }
    if (isPrimo) primos.push(num)
}
document.getElementById('output').innerHTML = "Os números primos de 1 a 20 são: " + primos.join(', ')
