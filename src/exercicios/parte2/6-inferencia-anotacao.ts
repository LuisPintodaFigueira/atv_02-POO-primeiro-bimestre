function main() {
  console.log("=== INFERÊNCIA DE TIPO ===");
  // Variável com tipo inferido (TypeScript infere que é string)
  let nomeInferido = "João";
  console.log(`nomeInferido: ${nomeInferido} (tipo inferido: string)`);
  
  // Variável com tipo anotado explicitamente
  let idadeAnotada: number = 25;
  console.log(`idadeAnotada: ${idadeAnotada} (tipo anotado: number)`);
  
  console.log("\n=== QUANDO A INFERÊNCIA É SUFICIENTE ===");
  // A inferência é suficiente quando o valor é óbvio
  let mensagem = "Hello World"; // TypeScript sabe que é string
  let contador = 0; // TypeScript sabe que é number
  console.log("Exemplos onde a inferência é suficiente: let mensagem = 'Hello World' e let contador = 0");
  
  console.log("\n=== QUANDO A ANOTAÇÃO DEIXA O CÓDIGO MAIS CLARO ===");
  // Anotação deixa mais claro quando o valor inicial não revela o tipo pretendido
  let valor: number = 0; // Especifica explicitamente que é number
  let funcaoRetorno: (a: number, b: number) => number;
  console.log("Exemplo: let valor: number = 0 (deixa claro que mesmo com 0, é number)");
}

main();