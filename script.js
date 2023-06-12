const question = document.querySelector('.question');
const aQues = document.querySelector('#a-ques');
const bQues = document.querySelector('#b-ques');
const cQues = document.querySelector('#c-ques');
const dQues = document.querySelector('#d-ques');
const submitBtn = document.querySelector('.submit-btn');

const quizData = [
    {
        question: 'Where does the sun rise from?',
        a: 'South',
        b: 'West',
        c: 'East',
        d: 'North',
        correct: 'c'
    },
    {
        question: 'Which was the most popular programming language up until 2022?',
        a: 'Python',
        b: 'JavaScript',
        c: 'C++',
        d: 'Java',
        correct: 'b'
    },
    {
        question: 'What does CSS stand for?',
        a: 'Compiling Style Sheets',
        b: 'Compile Style Sheets',
        c: 'Cascading Style Sheets',
        d: 'Comma Style Sheets',
        correct: 'c'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '2018',
        b: '2003',
        c: '1994',
        d: 'None of the above',
        correct: 'd'
    },
    {
        question: 'React is a framework of which programming language?',
        a: 'JavaScript',
        b: 'Python',
        c: 'COBOL',
        d: 'C++',
        correct: 'a'
    },
]

let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];

    question.innerText = currentQuizData.question;
    aQues.innerText = currentQuizData.a;
    bQues.innerText = currentQuizData.b;
    cQues.innerText = currentQuizData.c;
    dQues.innerText = currentQuizData.d;

}

submitBtn.addEventListener('click', () => {
    currentQuiz++;

    loadQuiz();
})