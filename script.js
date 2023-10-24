let secretNumber;
let attempts = 0;

function generateRandomNumber() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    attempts++;

    if (guess < secretNumber) {
        setMessage('Too low! Try again.');
    } else if (guess > secretNumber) {
        setMessage('Too high! Try again.');
    } else {
        setMessage(`Congratulations! You've guessed the number ${secretNumber} in ${attempts} attempts.`);
        disableInputAndButton();
    }

    document.getElementById('attemptCount').textContent = attempts;
}

function setMessage(message) {
    document.getElementById('message').textContent = message;
}

function disableInputAndButton() {
    document.getElementById('guess').disabled = true;
    document.querySelector('button').disabled = true;
}

window.onload = function () {
    generateRandomNumber();
};
