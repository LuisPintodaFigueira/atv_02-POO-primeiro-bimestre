import { perguntar, fecharIO } from "../io";
import { parseNumeroInteiro, entre } from "../validators";

async function main() {
    console.log("=== VALIDAÇÃO DE IDADE (0-120) ===");

    try {
        const idadeStr = await perguntar("Digite sua idade: ");
        const idadeNum = parseNumeroInteiro(idadeStr, "Idade");
        const idadeValida = entre(idadeNum, 0, 120, "Idade");

        console.log(`Idade válida: ${idadeValida} anos`);
    } catch (error: any) {
        console.log("Erro:", error.message);
    } finally {
        fecharIO();
    }
}

main();