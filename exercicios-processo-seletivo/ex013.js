let team = [];

function addPlayer(playerName, playerAge, playerPosition, playerScore) {
    let player = {
        name: playerName,
        age: playerAge,
        position: playerPosition,
        score: playerScore
    };
    team.push(player);
}

function searchByPosition(playerPosition) {
    let xPositionPlayers = [];
    for (let i = 0; i < team.length; i++) {
        if (playerPosition == team[i].position) xPositionPlayers.push(team[i]);
    }
    if (xPositionPlayers.length == 0) {
        console.warn('Nenhum jogador na posição informada!');
    } else {
        for (let i = 0; i < xPositionPlayers.length; i++) {
            console.log(xPositionPlayers[i]);
        }
    }
}

function teamList() {
    for (let i = 0; i < team.length; i++) {
        console.log(team[i]);
    }
}

function teamMediumScore() {
    let totalScore = team.reduce((sum, player) => sum + player.score, 0);
    let averageScore = totalScore / team.length;
    return averageScore;
}

let options = 0;
while (options != 5) {
    options = parseInt(prompt('1 - Adicionar jogador\n2 - Buscar por posição\n3 - Listar time\n4 - Calcular pontuação média\n5 - Sair'));

    switch (options) {
        case 1:
            let playerName = prompt('Digite o nome do jogador');
            let playerAge = parseInt(prompt('Digite a idade do jogador'));
            let playerPosition = prompt('Digite a posição do jogador (com letras minúsculas)\nata -> para atacante\nmei -> para meia\ndef -> para defensor\ngol -> para goleiro');
            let playerScore = parseInt(prompt('Digite a pontuação do jogador (de 1 a 10)'));
            addPlayer(playerName, playerAge, playerPosition, playerScore);
            break;

        case 2:
            let position = prompt('Qual posição você quer buscar no elenco?');
            searchByPosition(position);
            break;

        case 3:
            teamList();
            break;

        case 4:
            console.log(`Pontuação média da equipe: ${teamMediumScore()}`);
            break;

        case 5:
            console.log('Saindo...');
            break;

        default:
            console.warn('Opção inválida!');
    }
}