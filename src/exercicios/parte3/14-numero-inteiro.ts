import { perguntar, fecharIO } from "./io";
import { parseNumeroInteiro } from "./validators";

async function main() {
  console.log("=== VALIDAÇÃO DE NÚMERO INTEIRO ===");
  
  try {
    const valor = await perguntar("Digite um número inteiro: ");
    const numeroInteiro = parseNumeroInteiro(valor, "Número");
    
    console.log(`Número inteiro válido: ${numeroInteiro}`);
  } catch (erro: any) {
    console.log("Erro:", erro.message);
  } finally {
    fecharIO();
  }
}

main();