import { perguntar, fecharIO } from "../io";
import { obrigatorio, parseNumeroInteiro, entre } from "../validators";

async function main() {
  console.log("=== CADASTRO SIMPLES ===");
  
  try {
    const nome = await perguntar("Nome: ");
    const nomeValidado = obrigatorio(nome, "Nome");
    
    const idadeStr = await perguntar("Idade: ");
    const idadeNum = parseNumeroInteiro(idadeStr, "Idade");
    const idadeValidada = entre(idadeNum, 0, 120, "Idade");
    
    const notaStr = await perguntar("Nota final (0-10): ");
    const notaNum = parseNumeroInteiro(notaStr, "Nota final");
    const notaValidada = entre(notaNum, 0, 10, "Nota final");
    
    console.log("\n=== DADOS VÁLIDOS ===");
    console.log(`Nome: ${nomeValidado}`);
    console.log(`Idade: ${idadeValidada}`);
    console.log(`Nota final: ${notaValidada}`);
  } catch (erro: any) {
    console.log("Erro:", erro.message);
  } finally {
    fecharIO();
  }
}

main();