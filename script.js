const generateBtn = document.getElementById('generate-btn');
const palette = document.getElementById('palette');
const motivateMsg = document.getElementById('motivate-msg');

// Function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate and display a palette
function generatePalette() {
    palette.innerHTML = ''; // Clear previous palette
    for (let i = 0; i < 5; i++) {
        const colorBlock = document.createElement('div');
        colorBlock.classList.add('color-block');
        const color = getRandomColor();
        colorBlock.style.backgroundColor = color;

        // Copy color code to clipboard on click
        colorBlock.addEventListener('click', () => {
            navigator.clipboard.writeText(color);
            alert(`Copied ${color} to clipboard!`);
        });

        palette.appendChild(colorBlock);
    }
    checkMotivation();
}

// Function to toggle motivational message
function checkMotivation() {
    motivateMsg.classList.remove('hidden');
    setTimeout(() => {
        motivateMsg.classList.add('hidden');
    }, 5000);
}

// Add event listener to the Generate button
generateBtn.addEventListener('click', generatePalette);
