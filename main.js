import { questions } from "./questions.js";

export function randomQuestionDisplay(){
    let n;
    let selectedQuestion = questions[Math.floor(Math.random() * questions.length)]
    let boutons = document.querySelectorAll("button");
    let valeurs = Object.values(selectedQuestion);
    let texte = document.getElementById("questionText");
    texte.innerText = selectedQuestion["question"];
    let i = 1;
    boutons.forEach(bouton => {
        bouton.innerText = valeurs[i];
        i++;
    });
}

randomQuestionDisplay();

