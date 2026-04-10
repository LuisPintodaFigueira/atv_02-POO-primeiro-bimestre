function main() {
  const nomeAluno = "Carlos Souza";
  const nota1 = 8.5;
  const nota2 = 7.5;
  const media = (nota1 + nota2) / 2;
  
  console.log(`=== DADOS DO ALUNO ===`);
  console.log(`Nome do aluno: ${nomeAluno}`);
  console.log(`Nota 1: ${nota1}`);
  console.log(`Nota 2: ${nota2}`);
  console.log(`Média: ${media.toFixed(2)}`);
}

main();