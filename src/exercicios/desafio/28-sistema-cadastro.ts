import { perguntar, fecharIO } from "../io";
import { obrigatorio, parseNumeroInteiro, entre } from "../validators";

class Aluno {
  private nome: string;
  private matricula: string;
  private idade: number;
  private notaFinal: number;
  
  constructor(nome: string, matricula: string, idade: number, notaFinal: number) {
    this.nome = nome;
    this.matricula = matricula;
    this.idade = idade;
    this.notaFinal = notaFinal;
  }
  
  calcularSituacao(): string {
    return this.notaFinal >= 6 ? "Aprovado" : "Reprovado";
  }
  
  exibirDados(): void {
    console.log("\n=== DADOS DO ALUNO ===");
    console.log(`Nome: ${this.nome}`);
    console.log(`Matrícula: ${this.matricula}`);
    console.log(`Idade: ${this.idade} anos`);
    console.log(`Nota final: ${this.notaFinal}`);
    console.log(`Situação: ${this.calcularSituacao()}`);
  }
}

async function main() {
  console.log("=== SISTEMA DE CADASTRO DE ALUNOS ===");
  
  try {
    const nome = await perguntar("Nome do aluno: ");
    const nomeValidado = obrigatorio(nome, "Nome");
    
    const matricula = await perguntar("Matrícula: ");
    const matriculaValidada = obrigatorio(matricula, "Matrícula");
    
    const idadeStr = await perguntar("Idade: ");
    const idadeNum = parseNumeroInteiro(idadeStr, "Idade");
    const idadeValidada = entre(idadeNum, 0, 120, "Idade");
    
    const notaStr = await perguntar("Nota final (0-10): ");
    const notaNum = parseNumeroInteiro(notaStr, "Nota final");
    const notaValidada = entre(notaNum, 0, 10, "Nota final");
    
    const aluno = new Aluno(
      nomeValidado,
      matriculaValidada,
      idadeValidada,
      notaValidada
    );
    
    aluno.exibirDados();
    
  } catch (erro: any) {
    console.log("Erro no cadastro:", erro.message);
  } finally {
    fecharIO();
  }
}

main();