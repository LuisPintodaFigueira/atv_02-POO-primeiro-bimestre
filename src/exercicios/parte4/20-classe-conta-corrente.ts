class ContaCorrente {
  titular: string;
  saldo: number;
  
  constructor(titular: string, saldoInicial: number = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }
  
  depositar(valor: number): void {
    if (valor <= 0) {
      throw new Error("Valor de depósito deve ser positivo");
    }
    this.saldo += valor;
    console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso`);
  }
  
  sacar(valor: number): void {
    if (valor <= 0) {
      throw new Error("Valor de saque deve ser positivo");
    }
    if (valor > this.saldo) {
      throw new Error("Saldo insuficiente");
    }
    this.saldo -= valor;
    console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso`);
  }
  
  consultarSaldo(): number {
    return this.saldo;
  }
  
  exibirDados(): void {
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
  }
}

function main() {
  const conta = new ContaCorrente("Lucas Oliveira", 1000);
  conta.exibirDados();
  conta.depositar(500);
  conta.sacar(200);
  console.log(`Saldo atual: R$ ${conta.consultarSaldo().toFixed(2)}`);
}

main();