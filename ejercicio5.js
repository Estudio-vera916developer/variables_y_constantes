function bmi(peso, alt) {
    return peso / (alt ** 2);
  }
  
  let peso = prompt("introduce tu peso en kilos:");
  let altura = prompt("Introduce en metros tu tamaño:");
  
  let imc = bmi(peso, altura);
  
  alert("Tu IMC es de " + imc);