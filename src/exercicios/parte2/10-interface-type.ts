interface Aluno {
  id: number;
  nome: string;
  email?: string; // opcional
  ativo: boolean;
}

type Turma = "1TADS" | "2TADS" | "3TADS";

function matricularAluno(aluno: Aluno, turma: Turma): void {
  console.log(`\n=== MATRÍCULA REALIZADA ===`);
  console.log(`Aluno: ${aluno.nome} (ID: ${aluno.id})`);
  console.log(`Turma: ${turma}`);
  console.log(`Status: ${aluno.ativo ? "Ativo" : "Inativo"}`);
  if (aluno.email) {
    console.log(`Email: ${aluno.email}`);
  }
}

function main() {
  const aluno1: Aluno = {
    id: 1,
    nome: "Marina Santos",
    email: "marina@email.com",
    ativo: true
  };
  
  const turma: Turma = "2TADS";
  
  matricularAluno(aluno1, turma);
}

main();