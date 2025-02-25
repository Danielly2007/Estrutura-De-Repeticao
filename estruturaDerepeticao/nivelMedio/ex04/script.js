let fib = [0, 1]
let i = 2
while (fib.length < 10) {
    fib[i] = fib[i - 1] + fib[i - 2]
    i++;
}
document.getElementById('output').innerHTML = "Os 10 primeiros números de Fibonacci são: " + fib.join(', ')
