class Saudacao {
  // Assinaturas de sobrecarga
  exibir(nome: string): void;
  exibir(nome: string, titulo: string): void;
  
  // Implementação real
  exibir(nome: string, titulo?: string): void {
    if (titulo) {
      console.log(`${titulo} ${nome}, seja bem-vindo(a)!`);
    } else {
      console.log(`${nome}, seja bem-vindo(a)!`);
    }
  }
}

function main() {
  const saudacao = new Saudacao();
  
  console.log("=== SOBRECARGA DE MÉTODO ===");
  saudacao.exibir("Carlos");
  saudacao.exibir("Maria", "Dra.");
}

main();