let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "In welcher Programmiersprache ist der Linux-Kernel hauptsächlich geschrieben?",
        "answer_1": "Python",
        "answer_2": "C",
        "answer_3": "Java",
        "answer_4": "Ruby",
        "right_answer": 2
    },
    {
        "question": "Was bedeutet der Begriff „Cloud Computing“?",
        "answer_1": "Speicherung von Daten auf einem lokalen Server",
        "answer_2": "Verwendung von Remote-Servern zur Speicherung und Verarbeitung von Daten",
        "answer_3": "Installation von Software auf Computern",
        "answer_4": "Verwendung von Speichermedien wie Festplatten",
        "right_answer": 2
    }
];

let rightAnswers = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {

    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('amountOfQuestion').innerHTML = questions.length;
    document.getElementById('amountOfRightAnswers').innerHTML = rightAnswers;
    document.getElementById('header-image').src = './img/award.jpg';
}

function updateProgressBar() {
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%`;
}

function updateToNextQuestion() {
        let question = questions[currentQuestion];
        document.getElementById('current-question').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1']
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){
    let question = questions[currentQuestion];
    console.log('selected answer is', selection);
    let = selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber', selectedQuestionNumber);
    console.log('Current question is', question['right_answer']);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightAnswers++;
    } else {
        console.log('Falsche Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++; // z.B von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('header-image').src = './img/logo1.jpg';
    document.getElementById('endScreen').style = 'display: none'; // Endscreen ausblenden
    document.getElementById('questionBody').style = ''; // Question Body wieder anzeigen
    rightAnswers = 0;
    currentQuestion = 0;
    init();
    
  
}