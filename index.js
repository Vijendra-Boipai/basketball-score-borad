let homeTotalScore = 0;
let guestTotalScore = 0;

function homePlusOne() {
    homeTotalScore++
    document.getElementById("home-score").textContent = homeTotalScore
}

function homePlusTwo() {
    homeTotalScore += 2
    document.getElementById("home-score").textContent = homeTotalScore
}


function homePlusThree() {
    homeTotalScore +=3
    document.getElementById("home-score").textContent = homeTotalScore
}

function guestPlusOne() {
    guestTotalScore++
    document.getElementById("guest-score").textContent = guestTotalScore
}


function guestPlusTwo() {
    guestTotalScore += 2
    document.getElementById("guest-score").textContent = guestTotalScore
}

function guestPlusThree() {
    guestTotalScore += 3
    document.getElementById("guest-score").textContent = guestTotalScore
}