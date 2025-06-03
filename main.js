import { questions } from "./questions.js";

let boutons = document.querySelectorAll("button");
let currentQuestion;
let pastQuestions = [];
let cntJ1 = 0;
let cntJ2 = 0;

boutons.forEach(bouton => {
    bouton.addEventListener("click", () => reponseQuestion(bouton));
});

function pickRandomQuestion(){
    let n = Math.floor(Math.random() * questions.length);
    if(pastQuestions.includes(n)){
      return pickRandomQuestion();
    } else {
      pastQuestions.push(n);
      console.log(pastQuestions.length)
      return questions[n];
    }
}

export function randomQuestionDisplay(){
    let selectedQuestion = pickRandomQuestion();
    currentQuestion = selectedQuestion;
    let valeurs = Object.values(selectedQuestion);
    let cles = Object.keys(selectedQuestion);
    let texte = document.getElementById("questionText");
    texte.innerText = selectedQuestion["question"];
    let i = 1;
    boutons.forEach(bouton => {
        bouton.innerText = valeurs[i];
        bouton.classList.add(cles[i]);
        i++;
    });
}

function reponseQuestion(bouton){
    let classes = bouton.classList;
    if(classes.contains(currentQuestion.bonneReponse)){
      randomQuestionDisplay();
    }
}

randomQuestionDisplay();