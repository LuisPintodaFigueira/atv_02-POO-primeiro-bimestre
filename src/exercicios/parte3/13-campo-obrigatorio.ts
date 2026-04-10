import { perguntar, fecharIO } from "./io";
import { obrigatorio } from "./validators";

async function main() {
  console.log("=== VALIDAÇÃO DE CAMPO OBRIGATÓRIO ===");
  
  try {
    const nome = await perguntar("Digite seu nome: ");
    const nomeValidado = obrigatorio(nome, "Nome");
    
    console.log(`Nome válido: ${nomeValidado}`);
  } catch (erro: any) {
    console.log("Erro:", erro.message);
  } finally {
    fecharIO();
  }
}

main();
