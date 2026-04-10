function main() {
  // Variável com var
  var nomeVar = "João";
  console.log(`var: ${nomeVar}`);
  
  // Variável com let
  let nomeLet = "Maria";
  console.log(`let (antes da alteração): ${nomeLet}`);
  
  // Alterando valor da variável com let
  nomeLet = "Ana";
  console.log(`let (depois da alteração): ${nomeLet}`);
  
  // Constante com const
  const PI = 3.14159;
  console.log(`const: ${PI}`);
  
  console.log("\n=== EXPLICAÇÕES ===");
  console.log("1. const não pode ser reatribuído porque é uma constante, seu valor é fixo após a declaração.");
  console.log("2. Diferença de escopo entre var e let:");
  console.log("   - var tem escopo de função ou global");
  console.log("   - let tem escopo de bloco ({})");
}

main();