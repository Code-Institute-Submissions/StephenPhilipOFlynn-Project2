const questions = [
    {
    question: "Ireland",
    answers: [
    { text: "Wellington", correct: false},
    { text: "Glasgow", correct: false},
    { text: "Dublin", correct: true},
    { text: "Ottawa", correct: false},
],
},
{
    question: "Egypt",
    answers: [
    { text: "Taipei", correct: false},
    { text: "Bratislava", correct: false},
    { text: "Dakar", correct: false},
    { text: "Cairo", correct: true},
],
},
{
    question: "Iran",
    answers: [
    { text: "Tehran", correct: true},
    { text: "Beirut", correct: false},
    { text: "Islamabad", correct: false},
    { text: "Jerusalem", correct: false},
    ],
},
{
    question: "Kosovo",
    answers: [
    { text: "Tehran", correct: false},
    { text: "Pristina", correct: true},
    { text: "Sofia", correct: false},
    { text: "Brussels", correct: false},
    ],
},
{
    question: "Mauritius",
    answers: [
    { text: "Belmopan", correct: false},
    { text: "Mogadishu", correct: false},
    { text: "Port Louis", correct: true},
    { text: "Luanda", correct: false},
    ],
},
{
    question: "Colombia",
    answers: [
    { text: "Havana", correct: false},
    { text: "Bogata", correct: true},
    { text: "Caracas", correct: false},
    { text: "Banjul", correct: false},
    ],
},
{
    question: "Azerbaijan",
    answers: [
    { text: "Baku", correct: true},
    { text: "Podgorica", correct: false},
    { text: "Belgrade", correct: false},
    { text: "Pretoria", correct: false},
    ],
},
{
    question: "Mongolia",
    answers: [
    { text: "Berlin", correct: false},
    { text: "Minsk", correct: false},
    { text: "Ulaanbaatar", correct: true},
    { text: "Amman", correct: false},
    ],
},
{
    question: "Costa Rica",
    answers: [
    { text: "Havana", correct: false},
    { text: "Bern", correct: false},
    { text: "Port Moresby", correct: false},
    { text: "St Jose", correct: true},
    ],
},
{
    question: "Thailand",
    answers: [
    { text: "Bangkok", correct: true},
    { text: "Yaounde", correct: false},
    { text: "Rangoon", correct: false},
    { text: "Tunis", correct: false},    
    ],
},
{
    question: "Nigeria",
    answers: [
    { text: "Nairobi", correct: false},
    { text: "Abuja", correct: true},
    { text: "Conakry", correct: false},
    { text: "Majuro", correct: false},    
    ],
},
{
    question: "Jamaica",
    answers: [
    { text: "Rabat", correct: false},
    { text: "Libreville", correct: false},
    { text: "Porto-Novo", correct: false},
    { text: "Kingston", correct: true},    
    ],
},
{
    question: "Chile",
    answers: [
    { text: "Lisbon", correct: false},
    { text: "Santiago", correct: true},
    { text: "Kampala", correct: false},
    { text: "Montevideo", correct: false},    
    ],
},
{
    question: "Sweden",
    answers: [
    { text: "Stockholm", correct: true},
    { text: "Oslo", correct: false},
    { text: "Helsinki", correct: false},
    { text: "Harare", correct: false},    
    ],
},
{
    question: "Croatia",
    answers: [
        { text: "Algiers", correct: false},
        { text: "Yerevan", correct: false},
        { text: "Tripoli", correct: false},
        { text: "Zagreb", correct: true},
    ],
},
{
    question: "Peru",
    answers: [
        { text: "Victoria", correct: false},
        { text: "Lima", correct: true},
        { text: "Managua", correct: false},
        { text: "Porto-Novo", correct: true},
    ],
},
{
    question: "South Korea",
    answers: [
        { text: "Suva", correct: false},
        { text: "Beijing", correct: false},
        { text: "Pyongyang", correct: false},
        { text: "Seoul", correct: true},
    ],
},
{
    question: "Saudi Arabia",
    answers: [
        { text: "Riyadh", correct: true},
        { text: "San Salvador", correct: false},
        { text: "Damascus", correct: false},
        { text: "Beirut", correct: false},
    ],
},
{
    question: "Australia",
    answers: [
        { text: "Lome", correct: false},
        { text: "Melbourne", correct: false},
        { text: "Canberra", correct: true},
        { text: "Banjul", correct: false},
    ],
},
{
    question: "Uganda",
    answers: [
        { text: "Kampala", correct: true},
        { text: "Doha", correct: false},
        { text: "Thimphu", correct: false},
        { text: "Moroni", correct: false},
    ],
},
{
    question: "Slovakia",
    answers: [
        { text: "Honiara", correct: false},
        { text: "Malabo", correct: false},
        { text: "Prague", correct: false},
        { text: "Bratislava", correct: true},
    ],
},
{
    question: "France",
    answers: [
        { text: "Berlin", correct: false},
        { text: "Paris", correct: true},
        { text: "Vienna", correct: false},
        { text: "Dublin", correct: false},
    ],
},
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();
















