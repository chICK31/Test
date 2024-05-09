let currentType = '';  // This will store the type of the current image being guessed
const types = ['INTJ', 'ENTJ', 'INTP', 'ENTP', 'INFJ', 'ENFJ', 'INFP', 'ENFP', 'ISTJ', 'ESTJ', 'ISFJ', 'ESFJ', 'ISTP', 'ESTP', 'ISFP', 'ESFP'];
const basePath = 'Types/';

function getRandomImage() {
            const type = types[Math.floor(Math.random() * types.length)];
            const number = Math.floor(Math.random() * 10); // Adjust based on number of images per type
    const path = `${basePath}${type}/${number}.jpg`;
            currentType = type; // Save the current type being displayed
    document.getElementById('personImage').src = path;
}

function selectType(type) {
            selectedType = type; // This is the type guessed by the user
}

function submitGuess() {
            const guessedType = selectedType; // Type guessed by the user
    const resultText = (guessedType === currentType) ? "Good job!" : "Better luck next time!"; // Compare against currentType
    getRandomImage(); // Load a new image for the next round after checking the guess
    document.getElementById('result').textContent = resultText;
}

document.addEventListener('DOMContentLoaded', getRandomImage);
