function exibirMensagem(mensagem: string): void {
  console.log(mensagem);
}

function main() {
  exibirMensagem("=== FUNÇÃO COM VOID ===");
  exibirMensagem("Esta função não retorna valor, apenas exibe no terminal");
  exibirMensagem("O tipo void indica que não há retorno");
}

main();