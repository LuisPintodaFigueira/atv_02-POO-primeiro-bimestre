class Calculadora {
  somar(a: number, b: number): number {
    return a + b;
  }
  
  subtrair(a: number, b: number): number {
    return a - b;
  }
  
  multiplicar(a: number, b: number): number {
    return a * b;
  }
}

function main() {
  const calc = new Calculadora();
  
  console.log("=== CALCULADORA ===");
  console.log(`10 + 5 = ${calc.somar(10, 5)}`);
  console.log(`10 - 5 = ${calc.subtrair(10, 5)}`);
  console.log(`10 * 5 = ${calc.multiplicar(10, 5)}`);
}

main();