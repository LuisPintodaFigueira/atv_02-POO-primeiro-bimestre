function somar(a: number, b: number): number {
  return a + b;
}

function subtrair(a: number, b: number): number {
  return a - b;
}

function multiplicar(a: number, b: number): number {
  return a * b;
}

function dividir(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Divisão por zero não permitida");
  }
  return a / b;
}

function main() {
  console.log("=== FUNÇÕES TIPADAS ===");
  console.log(`Somar 10 + 5 = ${somar(10, 5)}`);
  console.log(`Subtrair 10 - 5 = ${subtrair(10, 5)}`);
  console.log(`Multiplicar 10 * 5 = ${multiplicar(10, 5)}`);
  console.log(`Dividir 10 / 5 = ${dividir(10, 5)}`);
}

main();
