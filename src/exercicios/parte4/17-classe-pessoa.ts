class Pessoa {
  nome: string;
  idade: number;
  
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
  
  apresentar(): void {
    console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

function main() {
  const pessoa1 = new Pessoa("Rafaela Mendes", 28);
  pessoa1.apresentar();
}

main();