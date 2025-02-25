let output = document.getElementById('output')
let linhas = 5
        
for (let i = 1; i <= linhas; i++) {
    let espacos = ' '.repeat(linhas - i)
    let asteriscos = '*'.repeat(2 * i - 1)
     output.innerHTML += espacos + asteriscos + "\n"
 }
