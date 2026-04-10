enum PerfilUsuario {
  ADMIN = "Administrador",
  USUARIO = "Usuário",
  CONVIDADO = "Convidado"
}

function main() {
  // String
  const texto: string = "Olá TypeScript";
  console.log(`String: ${texto}`);
  
  // Number
  const numero: number = 42;
  console.log(`Number: ${numero}`);
  
  // Boolean
  const ativo: boolean = true;
  console.log(`Boolean: ${ativo}`);
  
  // Array de números
  const numeros: number[] = [1, 2, 3, 4, 5];
  console.log(`Array de números: ${numeros}`);
  
  // Array de strings
  const frutas: string[] = ["Maçã", "Banana", "Laranja"];
  console.log(`Array de strings: ${frutas}`);
  
  // Tupla (latitude, longitude)
  const coordenadas: [number, number] = [-23.5505, -46.6333];
  console.log(`Tupla (latitude, longitude): ${coordenadas[0]}, ${coordenadas[1]}`);
  
  // Enum
  console.log(`Enum - Perfil ADMIN: ${PerfilUsuario.ADMIN}`);
  console.log(`Enum - Perfil USUARIO: ${PerfilUsuario.USUARIO}`);
  console.log(`Enum - Perfil CONVIDADO: ${PerfilUsuario.CONVIDADO}`);
}

main();