// script-certain.js – Fixed reward per correct answer
let pullCount = 0;
const maxPulls = 10;
let currentAnswer;

function generateTask() {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 90) + 10;
    currentAnswer = a * b;
    document.getElementById('mathTask').textContent = `What is ${a} × ${b}?`;
    document.getElementById('answer').value = '';
    document.getElementById('reward').textContent = '';
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === currentAnswer && pullCount < maxPulls) {
        pullCount++;
        const fixedReward = "You got: 0.5€ (fixed reward)";
        document.getElementById('reward').textContent = fixedReward;

        const history = document.getElementById('history');
        const entry = document.createElement('div');
        entry.textContent = `Pull ${pullCount}: ${fixedReward}`;
        history.appendChild(entry);

        if (pullCount < maxPulls) {
            generateTask();
        } else {
            document.getElementById('mathTask').textContent = 'You have completed all 10 rounds. Thank you!';
        }
    } else {
        document.getElementById('reward').textContent = "Incorrect. Please try again.";
    }
}

window.onload = generateTask;
