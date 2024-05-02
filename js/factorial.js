// Calcular el valor aproximado de 20! utilizando la fórmula de Stirling
function factorialStirling(n) {
    return Math.sqrt(2 * Math.PI * n) * Math.pow((n/Math.E), n);
}

function factorial(n) {
    if (n === 0 || n === 1)
        return 1;
    else
        return n * factorial(n-1);
}

var n = 20;

var approximation = factorialStirling(n);

var trueValue = factorial(n);

var error = (trueValue - approximation) / trueValue;

console.log("Aproximación de Stirling para 20!: " + approximation);
console.log("Valor verdadero de 20! calculado con JavaScript: " + trueValue);
console.log("Error relativo: " + error);

var resultadoElement = document.getElementById('resultado');

resultadoElement.innerHTML = "<p>Valor aproximado de 20! utilizando la aproximación de Stirling: " + approximation + "</p>";
resultadoElement.innerHTML += "<p>Valor verdadero de 20! calculado con JavaScript: " + trueValue + "</p>";
resultadoElement.innerHTML += "<p>Error relativo: " + error.toFixed(10) + "</p>";