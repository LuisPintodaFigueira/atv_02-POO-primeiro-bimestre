import { perguntar, fecharIO } from "../io";
import { parseNumeroInteiro } from "../validators";

async function main() {
  console.log("=== SOMA DE DOIS NÚMEROS ===");
  
  try {
    const num1Str = await perguntar("Digite o primeiro número: ");
    const num2Str = await perguntar("Digite o segundo número: ");
    
    const num1 = parseNumeroInteiro(num1Str, "Primeiro número");
    const num2 = parseNumeroInteiro(num2Str, "Segundo número");
    
    const soma = num1 + num2;
    
    console.log(`\n${num1} + ${num2} = ${soma}`);
  } catch (erro: any) {
    console.log("Erro:", erro.message);
  } finally {
    fecharIO();
  }
}

main();