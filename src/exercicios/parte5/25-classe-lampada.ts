class Lampada {
  private ligada: boolean = false;
  
  ligar(): void {
    this.ligada = true;
    console.log("Lâmpada ligada");
  }
  
  desligar(): void {
    this.ligada = false;
    console.log("Lâmpada desligada");
  }
  
  estaLigada(): boolean {
    return this.ligada;
  }
}

function main() {
  const lampada = new Lampada();
  
  console.log(`Lâmpada está ligada? ${lampada.estaLigada()}`);
  lampada.ligar();
  console.log(`Lâmpada está ligada? ${lampada.estaLigada()}`);
  lampada.desligar();
  console.log(`Lâmpada está ligada? ${lampada.estaLigada()}`);
}

main();