class Temperatura {
  private _celsius: number;
  
  constructor(celsiusInicial: number = 0) {
    this._celsius = celsiusInicial;
  }
  
  get celsius(): number {
    return this._celsius;
  }
  
  set celsius(valor: number) {
    if (valor < -273.15) {
      throw new Error("Temperatura não pode ser menor que -273.15°C (zero absoluto)");
    }
    this._celsius = valor;
  }
}

function main() {
  const temp = new Temperatura();
  
  try {
    temp.celsius = 25;
    console.log(`Temperatura: ${temp.celsius}°C`);
    
    temp.celsius = -300; // Isso vai lançar erro
  } catch (erro: any) {
    console.log("Erro:", erro.message);
  }
}

main();