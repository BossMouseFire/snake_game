window.onload = function () {
    let bonusDiv = document.getElementById("mainBonus");
    bonusDiv.style.top = String(getRandomInt(75, 675)) + "px";
    bonusDiv.style.left = String(getRandomInt(350, 950)) + "px";
}
let getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
let NewTorsoSnake = () => {
    let snake = document.getElementsByClassName("snake");
    torsoTop = parseInt(window.getComputedStyle(snake[0]).top);
    torsoLeft = parseInt(window.getComputedStyle(snake[0]).left);
    let headTop = parseInt(window.getComputedStyle(snake[snake.length - 1]).top);
    let headLeft = parseInt(
        window.getComputedStyle(snake[snake.length - 1]).left
    );
    let head = document.getElementById("main");
    let torsoDiv = document.createElement("div");
    torsoDiv.className += "snake";
    if (headTop - 30 < 80 || headLeft + 30 > 950 || torsoTop - 30 < 80) {
        torsoDiv.style.left = String(torsoLeft - 30) + "px";
        torsoDiv.style.top = String(torsoTop) + "px";
        torsoDiv.style.backgroundColor = "#eb4034";
    } else {
        torsoDiv.style.left = String(torsoLeft + 30) + "px";
        torsoDiv.style.top = String(torsoTop) + "px";
        torsoDiv.style.backgroundColor = "#eb4034";
    }
    head.prepend(torsoDiv);
};

let BonusGet = () => {
    let bonusDiv = document.getElementById("mainBonus");
    //тест рандома
    let a1 = parseInt(document.getElementById('headSnake').style.top);
    let a2 = parseInt(document.getElementById('headSnake').style.left);
    let a3 = parseInt(document.getElementById('mainBonus').style.top);
    let a4 = parseInt(document.getElementById('mainBonus').style.left);
    if (Math.abs(a4 - a2) <= 25 && Math.abs(a3 - a1) <= 25) {
        NewTorsoSnake();
        bonusDiv.style.top = String(getRandomInt(75, 675)) + "px";
        bonusDiv.style.left = String(getRandomInt(350, 950)) + "px";
    }
}