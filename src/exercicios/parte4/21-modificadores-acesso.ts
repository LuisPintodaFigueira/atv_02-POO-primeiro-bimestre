class Base {
  public publico: string;      // Acessível em qualquer lugar
  private privado: string;     // Acessível apenas dentro da classe
  protected protegido: string; // Acessível na classe e subclasses
  
  constructor() {
    this.publico = "Atributo público";
    this.privado = "Atributo privado";
    this.protegido = "Atributo protegido";
  }
  
  // Método público para acessar atributo privado
  getPrivado(): string {
    return this.privado; // OK - dentro da classe
  }
}

class Derivada extends Base {
  mostrarAcessos(): void {
    console.log(this.publico);    // OK - público
    console.log(this.protegido);  // OK - herdado
    // console.log(this.privado);  // ERRO - privado não acessível
  }
}

function main() {
  const obj = new Base();
  console.log(obj.publico);       // OK - público
  // console.log(obj.privado);    // ERRO - privado
  // console.log(obj.protegido);  // ERRO - protegido
  
  console.log("\n=== EXPLICAÇÕES ===");
  console.log("public: Acessível por qualquer código (dentro/fora da classe e subclasses)");
  console.log("private: Acessível APENAS dentro da própria classe");
  console.log("protected: Acessível dentro da classe e suas subclasses");
}

main();