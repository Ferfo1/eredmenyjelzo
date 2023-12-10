let team1Score = 0;
let team2Score = 0;

function updateScoreboard() {
    document.getElementById('team1').querySelector('.score').innerText = team1Score;
    document.getElementById('team2').querySelector('.score').innerText = team2Score;
}

function increaseScore(team, increment) {
    if (team === 1) {
        team1Score += 1;
    } else if (team === 2) {
        team2Score += 1;
    }

    updateScoreboard();
}

function decreaseScore(team, decrement) {
    if (team === 1 && team1Score - decrement >= 0) {
        team1Score -= 1;
    } else if (team === 2 && team2Score - decrement >= 0) {
        team2Score -= 1;
    }

    updateScoreboard();
}

function changeName(team) {
    let teamElement = document.getElementById(`team${team}`);
    let newName = prompt("Add meg az új csapatnevet:");
    if (newName) {
        teamElement.querySelector('h2').innerText = newName;
    }
}
