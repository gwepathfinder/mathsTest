
let score = 0;
let correctAnswer = 0;

document.getElementById('submit').addEventListener('click', checkAnswer);
document.getElementById('next-question').addEventListener('click', generateQuestion);

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const operations = ['+', '-', '*', '/'];
    const randomOperation = operations[Math.floor(Math.random() * operations.length)];

    correctAnswer = eval(num1 + randomOperation + num2);

    document.getElementById('question').innerText = `What is ${num1} ${randomOperation} ${num2}?`;
    document.getElementById('answer').value = '';
    document.getElementById('message').innerText = '';

}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('message').innerText ='Yee! Correct! Click Next Question';
        
    } else {
        document.getElementById('message').innerText = `Oops Wrong! The correct answer was (${correctAnswer}). Click Next Question.`;
    }
    document.getElementById('score').innerText = `Score: ${score}`;
}

generateQuestion();

