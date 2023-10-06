let player = "João";
let wins = 100;
let defeat = 9;
let winsTotal = wins - defeat;
let level = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];

function verifyLevel(winsTotal) {
  let LevelPlayer = undefined; // Ou você pode usar null

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

  console.log("O Herói " + player + " tem um saldo de " + winsTotal + " e está no nível de " + LevelPlayer);
}

// Chame a função para obter o nível correto
verifyLevel(winsTotal);
