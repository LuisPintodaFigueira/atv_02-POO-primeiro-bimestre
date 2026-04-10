class Produto {
  nome: string;
  preco: number;
  estoque: number;
  
  constructor(nome: string, preco: number, estoque: number) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }
  
  adicionarEstoque(qtd: number): void {
    if (qtd <= 0) {
      throw new Error("Quantidade deve ser positiva");
    }
    this.estoque += qtd;
    console.log(`Adicionado ${qtd} unidades. Estoque atual: ${this.estoque}`);
  }
  
  removerEstoque(qtd: number): void {
    if (qtd <= 0) {
      throw new Error("Quantidade deve ser positiva");
    }
    if (qtd > this.estoque) {
      throw new Error("Estoque insuficiente");
    }
    this.estoque -= qtd;
    console.log(`Removido ${qtd} unidades. Estoque atual: ${this.estoque}`);
  }
  
  exibirProduto(): void {
    console.log(`Produto: ${this.nome}`);
    console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    console.log(`Estoque: ${this.estoque} unidades`);
  }
}

function main() {
  const produto = new Produto("Notebook", 2500.00, 10);
  produto.exibirProduto();
  produto.adicionarEstoque(5);
  produto.removerEstoque(3);
}

main();