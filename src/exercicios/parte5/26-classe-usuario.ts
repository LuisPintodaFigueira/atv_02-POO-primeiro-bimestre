class Usuario {
  nome: string;
  
  constructor(nome: string) {
    this.nome = nome;
  }
  
  static criarVisitante(): Usuario {
    return new Usuario("Visitante");
  }
}

function main() {
  const usuario1 = new Usuario("João Silva");
  const visitante = Usuario.criarVisitante();
  
  console.log("=== USUÁRIOS ===");
  console.log(`Usuário comum: ${usuario1.nome}`);
  console.log(`Visitante: ${visitante.nome}`);
}

main();