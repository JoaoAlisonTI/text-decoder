// Pegue o valor do input ou textarea
let valor = document.getElementById('meuInput').value;

// Substitua todas as ocorrências de 'a' e 'b' por 'aio' e 'bio' respectivamente
let valor2 = valor.replace(/a/g, 'aio')

console.log(valor2)