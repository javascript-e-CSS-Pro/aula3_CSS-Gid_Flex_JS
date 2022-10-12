
function executarsoma() {
    const num1 = document.querySelector ("#numero1")
    const num2 = document.querySelector ("#numero2")
    
    const valor1 = Number(num1.value)
    const valor2 = Number(num2.value)

    const resultado = soma(valor1, valor2)

    const resultado1 = document.querySelector("#resultado")


    resultado1.innerHTML = resultado

}

function soma(numero1, numero2){
    const resultado = numero1 + numero2

    return resultado
}



