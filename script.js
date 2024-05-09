let selectedType = '';
const types = ['INTJ', 'ENTJ', 'INTP', 'ENTP', 'INFJ', 'ENFJ', 'INFP', 'ENFP', 'ISTJ', 'ESTJ', 'ISFJ', 'ESFJ', 'ISTP', 'ESTP', 'ISFP', 'ESFP'];
const basePath = 'Types/';

function getRandomImage() {
        const type = types[Math.floor(Math.random() * types.length)];
        const number = Math.floor(Math.random() * 10); // Adjust based on number of images per type
    const path = `${basePath}${type}/${number}.jpg`;
        selectedType = type;
        document.getElementById('personImage').src = path;
}

function selectType(type) {
        selectedType = type;
}

function submitGuess() {
        const guessedType = selectedType;
        getRandomImage(); // Load a new image for the next round
    const resultText = (guessedType === selectedType) ? "Good job!" : "Better luck next time!";
        document.getElementById('result').textContent = resultText;
}

document.addEventListener('DOMContentLoaded', getRandomImage);
