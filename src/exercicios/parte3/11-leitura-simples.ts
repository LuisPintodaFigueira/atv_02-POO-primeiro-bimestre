import { perguntar, fecharIO } from "../io";
import { obrigatorio } from "../validators";

async function main() {
  console.log("=== LEITURA DE DADOS ===");
  
  try {
    const nome = await perguntar("Nome: ");
    const idade = await perguntar("Idade: ");
    const cidade = await perguntar("Cidade: ");
    
    console.log("\n=== RESUMO ===");
    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Cidade: ${cidade}`);
  } catch (erro: any) {
    console.log("Erro:", erro.message);
  } finally {
    fecharIO();
  }
}

main();