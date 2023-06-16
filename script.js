const heading = document.querySelector('.heading');
const quizBox = document.querySelector('.quiz-content');
const descBox = document.querySelector('.desc-box');
const question = document.querySelector('.question');
const answerEls = document.querySelectorAll(".answer");
const answers = document.querySelector('.answers');
const radioBtns = document.querySelectorAll("input[type=radio]");
const aQues = document.querySelector('#a-ques');
const bQues = document.querySelector('#b-ques');
const cQues = document.querySelector('#c-ques');
const dQues = document.querySelector('#d-ques');
const info = document.querySelector('.info');
const loadBtn = document.querySelector('.load-btn');
const buttonsBox = document.querySelector('.buttons');
const backBtn = document.querySelector('.back-btn');
const submitBtn = document.querySelector('.submit-btn');
const reloadBtn = document.querySelector('.reload-btn');
const resultBox = document.querySelector('.result-box');
const resultInfo = document.querySelectorAll('.result-info');
const resultInfo1 = document.querySelector('.result-info1');
const resultInfo2 = document.querySelector('.result-info2');
const resultInfo3 = document.querySelector('.result-info3');
const resultInfo4 = document.querySelector('.result-info4');


const quizData = [
    {
        question: 'What is the difference between CSS and JavaScript?',
        a: 'CSS is used to style the appearance of web pages, while JavaScript is used to add interactivity to web pages.',
        b: ' CSS is used to define the structure of web pages, while JavaScript is used to add interactivity to web pages.',
        c: 'CSS is used to create dynamic web pages, while JavaScript is used to style the appearance of web pages.',
        d: 'CSS is used to add interactivity to web pages, while JavaScript is used to define the structure of web pages.',
        correct: 'a'
    },
    {
        question: 'What is the most common programming language used for web development?',
        a: 'JavaScript',
        b: 'Java',
        c: 'Python',
        d: 'C++',
        correct: 'a'
    },
    {
        question: 'What is the purpose of a web server',
        a: 'To store website files',
        b: 'To deliver website files to users',
        c: 'To process website requests',
        d: 'All of the above',
        correct: 'd'
    },
    {
        question: 'What is the difference between HTML and CSS?',
        a: 'HTML is used to create the structure of a web page, while CSS is used to style it.',
        b: 'HTML is used to style a web page, while CSS is used to create its structure.',
        c: 'HTML and CSS both are used to create the structure of a web page.',
        d: 'HTML and CSS both are used to style a web page.',
        correct: 'a'
    },
    {
        question: 'What is the HTTP request method used to get a resource from a server?',
        a: 'POST',
        b: 'GET',
        c: 'PUT',
        d: 'DELETE',
        correct: 'b'
    },
    {
        question: 'What is the purpose of a database?',
        a: 'To retrieve data',
        b: 'To update data',
        c: 'To store data',
        d: 'All of the above',
        correct: 'd'
    },
    {
        question: 'What is the difference between a static website and a dynamic website?',
        a: 'A static website is created using HTML and CSS, while a dynamic website is created using a programming language such as JavaScript.',
        b: 'A static website is stored on a web server, while a dynamic website is stored on a database.',
        c: 'A static website cannot be changed, while a dynamic website can be changed.',
        d: 'Both static and dynamic websites are stored on a web server.',
        correct: 'c'
    },
    {
        question: 'What is the purpose of a web browser?',
        a: 'To manage web servers.',
        b: 'To host web pages.',
        c: 'To create web pages.',
        d: 'To interpret HTML, CSS, and JavaScript code and display web pages.',
        correct: 'd'
    },
    {
        question: 'What is the purpose of a domain name?',
        a: 'To identify a website on the internet.',
        b: 'To host web pages.',
        c: 'To interpret HTML, CSS, and JavaScript code.',
        d: 'To manage web servers.',
        correct: 'a'
    },
    {
        question: 'What is the purpose of a URL?',
        a: 'To create a web  on the internet.',
        b: 'To manage databases.',
        c: 'To manage web servers.',
        d: 'To identify a specific resource on a website',
        correct: 'd'
    },
]

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deSelect();
    const currentQuizData = quizData[currentQuiz];

    question.innerText = currentQuizData.question;
    aQues.innerText = currentQuizData.a;
    bQues.innerText = currentQuizData.b;
    cQues.innerText = currentQuizData.c;
    dQues.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    info.style.display = 'block';
    info.innerText = 'Please Select an option first!';
    return answer;
}

function deSelect(){
        answerEls.forEach((answerRadio) => {
            answerRadio.checked = false;
        });
}

function showInfo(){
    resultBox.style.display = 'flex';
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer);
    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
            info.style.display = 'none';
        } else {
            question.innerText = `You have scored correctly ${score} out of ${quizData.length} questions!`;
            showInfo();
            submitBtn.style.display = 'none';
            backBtn.style.display = 'none';
            reloadBtn.style.display = 'block';
            info.style.display = 'none';
            answers.style.display = 'none';
        }
      }
});

loadBtn.addEventListener('click', () => {
    descBox.style.display = 'none';
    heading.style.display = 'none';  
    quizBox.style.display = 'flex';  
    buttonsBox.style.display = 'flex';  
});

backBtn.addEventListener('click', () => {
    if(currentQuiz < 1){
        this.disabled = true;
    } else{
        currentQuiz--;
        score--;
        loadQuiz();
    }
});

reloadBtn.addEventListener('click', () => {
    location.reload();
    resultBox.style.display = 'none';
});

