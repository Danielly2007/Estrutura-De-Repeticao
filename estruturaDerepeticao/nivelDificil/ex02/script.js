let numeroAleatorio = Math.floor(Math.random() * 100) + 1
let tentativas = 0

function adivinhar() {
    let guess = parseInt(document.getElementById('guess').value)
    let output = document.getElementById('output')
    tentativas++
        if (guess > numeroAleatorio) {
                output.innerHTML = "Muito alto! Tente novamente."
        } else if (guess < numeroAleatorio) {
                output.innerHTML = "Muito baixo! Tente novamente."
        } else {
                output.innerHTML = `Parabéns! Você acertou em ${tentativas} tentativas!`
        }
    }
