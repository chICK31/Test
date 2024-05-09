let currentType = '';
const types = ['INTJ', 'ENTP', /* list all MBTI types here */];
const basePath = 'Types/';

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}

function getRandomImage() {
    const type = getRandomType();
    const number = Math.floor(Math.random() * 10); // Adjust based on number of images per type
    const path = `${basePath}${type}/${number}.jpg`;
    currentType = type;
    document.getElementById('personImage').src = path;
}

function guessType(type) {
    return type === currentType;
}

function submitGuess() {
    const buttons = document.querySelectorAll('#mbti-buttons button');
    let guessedType = '';
    buttons.forEach(button => {
        if (button.classList.contains('selected')) {
            guessedType = button.textContent;
        }
    });
    const resultText = guessType(guessedType) ? "Good job!" : "Better luck next time!";
    document.getElementById('result').textContent = resultText;
}

document.addEventListener('DOMContentLoaded', () => {
    getRandomImage();
    const buttons = document.querySelectorAll('#mbti-buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });
});
