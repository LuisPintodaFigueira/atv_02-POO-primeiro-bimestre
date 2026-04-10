class Televisao {
  canal: number; // Atributo da classe
  
  constructor(canalInicial: number = 1) {
    this.canal = canalInicial;
  }
  
  setCanal(canal: number): void {
    // canal (parâmetro) vs this.canal (atributo da classe)
    // this é usado para referenciar o objeto atual
    if (canal < 1 || canal > 100) {
      throw new Error("Canal deve estar entre 1 e 100");
    }
    this.canal = canal; // Atribui o parâmetro ao atributo da classe
    console.log(`Canal alterado para ${this.canal}`);
  }
  
  getCanal(): number {
    return this.canal;
  }
}

function main() {
  const tv = new Televisao();
  
  console.log(`Canal inicial: ${tv.getCanal()}`);
  tv.setCanal(5);
  
  console.log("\n=== EXPLICAÇÃO SOBRE THIS ===");
  console.log("'canal' (sem this): refere-se ao parâmetro do método");
  console.log("'this.canal' (com this): refere-se ao atributo da instância da classe");
  console.log("O 'this' é usado para diferenciar o atributo do parâmetro quando têm o mesmo nome");
}

main();