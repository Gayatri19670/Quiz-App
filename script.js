console.log('Quiz-App');

const quizData = [{
        question: 'A webpage displays a picture. What tag was used to display that picture ?',
        a: 'picture',
        b: 'image',
        c: 'img',
        d: 'src',
        correct: 'c'
    },

    {
        question: 'tag makes the enclosed text bold. What is other tag to make text bold ? ',
        a: '<strong>',
        b: '<dar>',
        c: '<black>',
        d: '<emp>',
        correct: 'a'
    },
    {
        question: 'Tags and test that are not directly displayed on the page are written in _____ section.',
        a: '<html>',
        b: '<head>',
        c: '<title>',
        d: '<body>',
        correct: 'b'
    },
    {

        question: 'Which tag inserts a line horizontally on your web page ?',
        a: '<hr>',
        b: '<line>',
        c: '<line direction=”horizontal”>',
        d: '<tr>',
        correct: 'a'
    },
    {
        question: 'tag makes the enclosed text bold. What is other tag to make text bold ? ',
        a: '<strong>',
        b: '<dar>',
        c: '<black>',
        d: '<emp>',
        correct: 'a'
    },
    {
        question: ' tag makes the enclosed text bold. What is other tag to make text bold ? ',
        a: '<strong>',
        b: '<dar>',
        c: '<black>',
        d: '<emp>',
        correct: 'a'
    },
    {
        question: 'tag makes the enclosed text bold. What is other tag to make text bold ? ',
        a: '<strong>',
        b: '<dar>',
        c: '<black>',
        d: '<emp>',
        correct: 'a'
    },
    {
        question: 'tag makes the enclosed text bold. What is other tag to make text bold ? ',
        a: '<strong>',
        b: '<dar>',
        c: '<black>',
        d: '<emp>',
        correct: 'a'
    },
    {
        question: ' tag makes the enclosed text bold. What is other tag to make text bold ? ',
        a: '<strong>',
        b: '<dar>',
        c: '<black>',
        d: '<emp>',
        correct: 'a'
    },
    {
        question: 'tag makes the enclosed text bold. What is other tag to make text bold ? ',
        a: '<strong>',
        b: '<dar>',
        c: '<black>',
        d: '<emp>',
        correct: 'a'
    },

];

const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
//console.log(questionEl, quizData);

let currentQuiz = 0;

//loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}


submitBtn.addEventListener("click", () => {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        alert("You finished! Get yourself an Orange Lemonade");
    }
});