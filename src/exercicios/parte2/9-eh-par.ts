function ehPar(numero: number): boolean {
  return numero % 2 === 0;
}

function main() {
  console.log("=== VERIFICADOR DE NÚMEROS PARES ===");
  
  const numero1 = 4;
  const numero2 = 7;
  
  console.log(`${numero1} é par? ${ehPar(numero1)}`);
  console.log(`${numero2} é par? ${ehPar(numero2)}`);
}

main();