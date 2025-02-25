let output = document.getElementById('output')
let armstrongNumbers = []

for (let num = 100; num <= 999; num++) {
    let sum = 0
    let digits = num.toString().split('')
    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(parseInt(digits[i]), 3)
    }
    if (sum === num) {
        armstrongNumbers.push(num)
    }
}

output.innerHTML = "Números de Armstrong: " + armstrongNumbers.join(", ")