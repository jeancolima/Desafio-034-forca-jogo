let lives = 6;
let correctLetters = 0;
let containLetter = false;
const hangedHead = document.querySelector('.hanged-head');
const hangedBody = document.querySelector('.hanged-body');
const hangedLeftArm = document.querySelector('.hanged-left-arm');
const hangedRightArm = document.querySelector('.hanged-right-arm');
const hangedLeftLeg = document.querySelector('.hanged-left-leg');
const hangedRightLeg = document.querySelector('.hanged-right-leg');
const listSecretWordLetters = document.querySelectorAll('.word-letter p');
const listKeyboardLetters = document.querySelectorAll('.keyboard-letters-row li');
const youWinContainer = document.querySelector('.you-win-container');
const gameOverContainer = document.querySelector('.game-over-container');

listKeyboardLetters.forEach((e) => {
    e.addEventListener('click', () => {
        checkLetter(e);
    });
});

function checkLetter(e) {
    for (let i = 0; i < listSecretWordLetters.length; i++) {
        if (e.textContent == listSecretWordLetters[i].textContent) {
            listSecretWordLetters[i].style.opacity = "1";
            e.style.backgroundColor = "var(--third-color)";
            containLetter = true;
            correctLetters++;

            if (correctLetters == 11) {
                youWinContainer.style.display = "flex";
            }
        };
    };

    if (containLetter == false) {
        lives--;

        changeBody();

        if (lives <= 0) {
            gameOverContainer.style.display = "flex";
        };
        e.style.backgroundColor = "var(--secondary-color)";
    };

    containLetter = false;
    e.style.pointerEvents = "none";
};

function changeBody() {
    switch (lives) {
        case 5:
            hangedHead.style.display = "block";
            break;
        case 4:
            hangedBody.style.display = "block";
            break;
        case 3:
            hangedLeftArm.style.display = "block";
            break;
        case 2:
            hangedRightArm.style.display = "block";
            break;
        case 1:
            hangedLeftLeg.style.display = "block";
            break;
        case 0:
            hangedLeftArm.style.display = "block";
            break;
    }
}