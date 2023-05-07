
// list of questions
const questions = [
    {
    question: “Ireland”
    answers: [
    { text: “Wellington”, correct: false},
    { text: “Glasgow”, correct: false},
    { text: “Dublin”, correct: true},
    { text: "Ottawa", correct: false},
]
},
{
    question: “Egypt”
    answers: [
    { text: “Taipei”, correct: false},
    { text: “Bratislava”, correct: false},
    { text: “Dakar”, correct: false},
    { text: "Cairo", correct: true},
]
},
{
    question: “Iran”
    answers: [
    { text: “Tehran”, correct: true},
    { text: “Beirut”, correct: false},
    { text: “Islamabad”, correct: false},
    { text: "Jerusalem", correct: false},
    ]
},
{
    question: “Kosovo”
    answers: [
    { text: “Tehran”, correct: false},
    { text: “Pristina”, correct: true},
    { text: “Sofia”, correct: false},
    { text: "Brussels", correct: false},
    ]
},
{
    question: “Mauritius”
    answers: [
    { text: “Belmopan”, correct: false},
    { text: “Mogadishu”, correct: false},
    { text: “Port Louis”, correct: true},
    { text: "Luanda", correct: false},
    ]
},
{
    question: “Colombia”
    answers: [
    { text: “Havana”, correct: false},
    { text: “Bogata”, correct: true},
    { text: “Caracas”, correct: false},
    { text: "Banjul", correct: false},
    ]
},
{
    question: “Azerbaijan”
    answers: [
    { text: “Baku”, correct: true},
    { text: “Podgorica”, correct: false},
    { text: “Belgrade”, correct: false},
    { text: "Pretoria", correct: false},
    ]
},
{
    question: “Mongolia”
    answers: [
    { text: “Berlin”, correct: false},
    { text: “Minsk”, correct: false},
    { text: “Ulaanbaatar”, correct: true},
    { text: "Amman", correct: false},
    ]
},
{
    question: “Costa Rica”
    answers: [
    { text: “Havana”, correct: false},
    { text: “Bern”, correct: false},
    { text: “Port Moresby”, correct: false},
    { text: "St Jose", correct: true},
    ]
},
{
    question: “Thailand”
    answers: [
    { text: "Bangkok", correct: true},
    { text: “Yaounde”, correct: false},
    { text: “Rangoon”, correct: false},
    { text: “Tunis”, correct: false},    
    ]
},
{
    question: “Nigeria”
    answers: [
    { text: "Nairobi", correct: false},
    { text: “Abuja”, correct: true},
    { text: “Conakry”, correct: false},
    { text: “Majuro”, correct: false},    
    ]
},
{
    question: “Jamaica”
    answers: [
    { text: "Rabat", correct: false},
    { text: “Libreville”, correct: false},
    { text: “Porto-Novo”, correct: false},
    { text: “Kingston”, correct: true},    
    ]
},
{
    question: “Chile”
    answers: [
    { text: "Lisbon", correct: false},
    { text: “Santiago”, correct: true},
    { text: “Kampala”, correct: false},
    { text: “Montevideo”, correct: false},    
    ]
},
{
    question: “Sweden”
    answers: [
    { text: "Stockholm", correct: true},
    { text: "Oslo", correct: false},
    { text: “Helsinki”, correct: false},
    { text: “Harare”, correct: false},    
    ]
},
{
    question: “Croatia”
    answers: [
        { text: "Algiers", correct: false},
        { text: “Yerevan”, correct: false},
        { text: “Tripoli”, correct: false},
        { text: "Zagreb", correct: true},
    ]
},
{
    question: “Peru”
    answers: [
        { text: "Victoria", correct: false},
        { text: “Lima”, correct: true},
        { text: “Managua”, correct: false},
        { text: "Porto-Novo", correct: true},
    ]
},
{
    question: “South Korea”
    answers: [
        { text: "Suva", correct: false},
        { text: “Beijing”, correct: false},
        { text: “Pyongyang”, correct: false},
        { text: "Seoul", correct: true},
    ]
},
{
    question: “Saudi Arabia”
    answers: [
        { text: "Riyadh", correct: true},
        { text: “San Salvador”, correct: false},
        { text: “Damascus”, correct: false},
        { text: "Beirut", correct: false},
    ]
},
{
    question: “Australia”
    answers: [
        { text: "Lome", correct: false},
        { text: “Melbourne”, correct: false},
        { text: “Canberra”, correct: true},
        { text: "Banjul", correct: false},
    ]
},
{
    question: “Uganda”
    answers: [
        { text: "Kampala", correct: true},
        { text: “Doha”, correct: false},
        { text: “Thimphu”, correct: false},
        { text: "Moroni", correct: false},
    ]
},
{
    question: “Slovakia”
    answers: [
        { text: "Honiara", correct: false},
        { text: “Malabo”, correct: false},
        { text: “Prague”, correct: false},
        { text: "Bratislava", correct: true},
    ]
},
{
    question: “France”
    answers: [
        { text: "Berlin", correct: false},
        { text: “Paris”, correct: true},
        { text: “Vienna”, correct: false},
        { text: "Dublin", correct: false},
    ]
},
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answer.Button.appendChild(button);
    });
}

startQuiz();

// array of countries and their capitals 

const countries = [
    {name: "Azerbaijan", capital: "Baku"},
    {name: "Afghanistan", capital: "Kabul"},
    {name: "Albania", capital: "Tirana"},
    {name: "Algeria", capital: "Algiers"},
    {name: "Armenia", capital: "Yerevan"},
    {name: "Australia", capital: "Canberra"},
    {name: "Austria", capital: "Vienna"},
    {name: "Argentina", capital: "Buenos Aires"},
    {name: "Barbados", capital: "Bridgetown"},
    {name: "Belgium", capital: "Brussels"},
    {name: "Belarus", capital: "Minsk"},
    {name: "Bulgaria", capital: "Sofia"},
    {name: "Bolivia", capital: "Sucre"},
    {name: "Brazil", capital: "Brasilia"},
    {name: "Canada", capital: "Ottawa"},
    {name: "Central African Republic", capital: "Bangui"},
    {name: "Chile", capital: "Santiago"},
    {name: "China", capital: "Beijing"},
    {name: "Congo, Democratic Republic of the", capital: "Kinshasa"},
    {name: "Costa Rica", capital: "San Jose"},
    {name: "Cyprus", capital: "Nicosia"},
    {name: "Cameroon", capital: "Yaounde"},
    {name: "Ivory Coast", capital: "Yamoussoukro"},
    {name: "Colombia", capital: "Bogota"},
    {name: "Czech Republic", capital: "Prague"},
    {name: "Djibouti", capital: "Djibouti"},
    {name: "England", capital: "London"},
    {name: "Egypt", capital: "Cairo"},
    {name: "Ecuador", capital: "Quito"},
    {name: "El Salvador", capital: "San Salvador"},
    {name: "Eritrea", capital: "Asmara"},
    {name: "Estonia", capital: "Tallinn"},
    {name: "Ethiopia", capital: "Addis Ababa"},
    {name: "Equatorial Guinea", capital: "Malabo"},
    {name: "Fiji", capital: "Suva"},
    {name: "Finland", capital: "Helsinki"},
    {name: "France", capital: "Paris"},
    {name: "Gabon", capital: "Libreville"},
    {name: "Greece", capital: "Athens"},
    {name: "Germany", capital: "Berlin"},
    {name: "Ghana", capital: "Accra"},
    {name: "Guyana", capital: "Georgetown"},
    {name: "Haiti", capital: "Port-Au-Prince"},
    {name: "Honduras", capital: "Tegucigalpa"},
    {name: "Hungary", capital: "Budapest"},
    {name: "Iceland", capital: "Reykjavik"},
    {name: "India", capital: "New Delhi"},
    {name: "Italy", capital: "Rome"},
    {name: "Israel", capital: "Jerusalem"},
    {name: "Indonesia", capital: "Jakarta"},
    {name: "Ireland", capital: "Dublin"},
    {name: "Iraq", capital: "Baghdad"},
    {name: "Iran", capital: "Tehran"},
    {name: "Jamaica", capital: "Kingston"},
    {name: "Japan", capital: "Tokyo"},
    {name: "Jordan", capital: "Amman"},
    {name: "India", capital: "New Delhi"},
    {name: "Kazakhstan", capital: "Nur-Sultan"},
    {name: "Kenya", capital: "Nariobi"},
    {name: "Kosovo", capital: "Pristina"},
    {name: "Kuwait", capital: "Kuwait City"},
    {name: "Latvia", capital: "Riga"},
    {name: "Lebanon", capital: "Beirut"},
    {name: "Libya", capital: "Tripoli"},
    {name: "Liechtenstein", capital: "Vaduz"},
    {name: "Lithuania", capital: "Vilinius"},
    {name: "Liberia", capital: "Monrovia"},
    {name: "Maldives", capital: "Male"},
    {name: "Mexico", capital: "Mexico City"},
    {name: "Monaco", capital: "Monaco"},
    {name: "Morocco", capital: "Rabat"},
    {name: "Mongolia", capital: "Ulaanbaatar"},
    {name: "Mozambique", capital: "Maputo"},
    {name: "Namibia", capital: "Windhoek"},
    {name: "Nepal", capital: "Kathmandu"},
    {name: "Niger", capital: "Niamey"},
    {name: "Netherlands", capital: "Amsterdam"},
    {name: "Norway", capital: "Oslo"},
    {name: "North Korea", capital: "Pyongyang"},
    {name: "Oman", capital: "Muscat"},
    {name: "Pakistan", capital: "Islamabad"},
    {name: "Palestine", capital: "Jerusalem"},
    {name: "Panama", capital: "Panama City"},
    {name: "Peru", capital: "Lima"},
    {name: "Paraguay", capital: "Asuncion"},
    {name: "Poland", capital: "Warsaw"},
    {name: "Portugal", capital: "Lisbon"},
    {name: "Qatar", capital: "Doha"},
    {name: "Romania", capital: "Bucharest"},
    {name: "Russia", capital: "Moscow"},
    {name: "Rwanda", capital: "Kigali"},
    {name: "Saudi Arabia", capital: "Riyadh"},
    {name: "Scotland", capital: "Edinburgh"},
    {name: "Senegal", capital: "Dakar"},
    {name: "Serbia", capital: "Belgrade"},
    {name: "Seychelles", capital: "Victoria"},
    {name: "Singapore", capital: "Singapore"},
    {name: "Slovenia", capital: "Ljubljana"},
    {name: "Slovakia", capital: "Bratislava"},
    {name: "Spain", capital: "Madrid"},
    {name: "Solomon Islands", capital: "Honiara"},
    {name: "Somalia", capital: "Mogadishu"},
    {name: "South Korea", capital: "Seoul"},
    {name: "South Sudan", capital: "Juba"},
    {name: "Suriname", capital: "Paramaribo"},
    {name: "Syria", capital: "Damascus"},
    {name: "Sweden", capital: "Stockholm"},
    {name: "Switzerland", capital: "Bern"},
    {name: "Thailand", capital: "Bangkok"},
    {name: "Tanzania", capital: "Dodoma"},
    {name: "Togo", capital: "Lome"},
    {name: "Trinidad and Tobago", capital: "Port of Spain"},
    {name: "Turkey", capital: "Ankara"},
    {name: "Tunisia", capital: "Tunis"},
    {name: "Turkmenistan", capital: "Ashgabat"},
    {name: "Tuvalu", capital: "Funafuti"},
    {name: "United Arab Emirates", capital: "Abu Dhabi"},
    {name: "Uganda", capital: "Kampala"},
    {name: "Ukraine", capital: "Kiev"},
    {name: "Uzbekistan", capital: "Tashkent"},
    {name: "United States of America", capital: "Washington, D.C."},
    {name: "Uruguay", capital: "Montevideo"},
    {name: "Vietnam", capital: "Hanoi"},
    {name: "Venezuela", capital: "Caracas"},
    {name: "Wales", capital: "Cardiff"},
    {name: "Yemen", capital: "Sana'a"},
    {name: "Zambia", capital: "Lusaka"},
    {name: "Zimbabwe", capital: "Harare"},
]

















]