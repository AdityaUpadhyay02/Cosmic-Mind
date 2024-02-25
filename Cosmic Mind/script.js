// script.js
document.getElementById('calculateButton').addEventListener('click', calculateResults);

function calculateResults() {
    const form = document.getElementById('mentalHealthTestForm');
    const resultMessage = document.getElementById('resultMessage');

    // Add up the scores from the selected radio buttons
    let score = 0;
    const radioInputs = form.querySelectorAll('input[type="radio"]:checked');
    radioInputs.forEach(input => {
        score += parseInt(input.value);
    });

    // Display a result message based on the score
    if (score <= 5) {
        resultMessage.textContent = 'You appear to have low levels of distress.';
    } else if (score <= 10) {
        resultMessage.textContent = 'You may be experiencing moderate distress. Consider seeking support.';
    } else {
        resultMessage.textContent = 'You appear to have high levels of distress. It is recommended to seek professional help.';
    }

    // Display the results section
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'block';
}
