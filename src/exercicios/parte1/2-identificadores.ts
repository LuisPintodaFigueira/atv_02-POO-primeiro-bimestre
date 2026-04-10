function main() {
  console.log("=== IDENTIFICADORES VÁLIDOS ===");
  console.log("1. nomeAluno");
  console.log("2. _valor");
  console.log("3. idade123");
  console.log("4. $preco");
  console.log("5. media_final");
  
  console.log("\n=== IDENTIFICADORES INVÁLIDOS ===");
  console.log("1. 123nome - Não pode começar com número");
  console.log("2. nome-aluno - Hífen não é permitido");
  console.log("3. nome aluno - Espaço não é permitido");
  console.log("4. class - Palavra reservada do JavaScript/TypeScript");
  console.log("5. nome@aluno - Caractere especial @ não é permitido");
}

main();