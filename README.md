// Exemplo de uso da calculadora de partidas ranqueadas

// Defina o nome do jogador, número de vitórias e número de derrotas
let player = "João";
let wins = 100;
let defeat = 9;

// Calcule o saldo de vitórias e derrotas
let winsTotal = wins - defeat;

// Crie uma função para verificar o nível do jogador
function verifyLevel(winsTotal) {
  let level = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
  let LevelPlayer = undefined;

  if (winsTotal <= 10) {
    LevelPlayer = level[0]; // "Ferro"
  } else if (winsTotal > 10 && winsTotal <= 20) {
    LevelPlayer = level[1]; // "Bronze"
  } else if (winsTotal > 20 && winsTotal <= 50) {
    LevelPlayer = level[2]; // "Prata"
  } else if (winsTotal > 50 && winsTotal <= 80) {
    LevelPlayer = level[3]; // "Ouro"
  } else if (winsTotal > 80 && winsTotal <= 90) {
    LevelPlayer = level[4]; // "Diamante"
  } else if (winsTotal > 90 && winsTotal <= 100) {
    LevelPlayer = level[5]; // "Lendário"
  } else if (winsTotal > 100) {
    LevelPlayer = level[6]; // "Imortal"
  }

  if (LevelPlayer === undefined) {
    LevelPlayer = "Nível desconhecido";
  }

  return LevelPlayer;
}

// Chame a função para obter o nível correto
let nivelDoHeroi = verifyLevel(winsTotal);

// Exiba o resultado no console
console.log("O Herói " + player + " tem um saldo de " + winsTotal + " e está no nível de " + nivelDoHeroi);
