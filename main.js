import { questions } from "./questions.js";

let boutons = document.querySelectorAll("button");
let currentQuestion;
let pastQuestions = [];
let cntJ1 = 0;
let cntJ2 = 0;
let cntGlobal = 0;
let joueur1 = true;
sessionStorage.setItem('gagnant', "");

let test = 0;

boutons.forEach(bouton => {
	bouton.addEventListener("click", () => reponseQuestion(bouton));
});

// Fonction qui choisit une question au hasard. Je cherche à savoir si n (le numéro de la question) est déjà apparu pour ne pas avoir de doublon au niveau des questions
function pickRandomQuestion() {
	let n = Math.floor(Math.random() * questions.length);
	if (pastQuestions.includes(n)) {
		return pickRandomQuestion();
	} else {
		pastQuestions.push(n);
		console.log("Longueur : " + pastQuestions.length);
		return questions[n];
	}
}

// La fonction met la question en haut de l'écran et ajoute les réponses sur les boutons
export function randomQuestionDisplay() {
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

// Fonction simple qui vérifie si le bouton sur lequel on clique est la bonne réponse
function reponseQuestion(bouton) {
	let classes = bouton.classList;
	let scoreJ1 = document.getElementById("scoreJ1");
	let scoreJ2 = document.getElementById("scoreJ2");
	if (classes.contains(currentQuestion.bonneReponse)) {
		cntGlobal++;
		joueur1 ? cntJ1++ : cntJ2++;
		joueur1 ? scoreJ1.innerText = "Joueur 1 : " + cntJ1 : scoreJ2.innerText = "Joueur 2 : " + cntJ2 // Met à jour le texte du score en bas de la page
		joueur1 = !joueur1
		randomQuestionDisplay(); // Tire une nouvelle question.
	} else {
		cntGlobal++;
		joueur1 = !joueur1
		randomQuestionDisplay();
	}

	/*if(cntGlobal == 10){
		cntJ1 > cntJ2 ? sessionStorage.setItem('gagnant', "Joueur 1") : cntJ1 < cntJ2 ? sessionStorage.setItem('gagnant', "Joueur 2") : sessionStorage.setItem("gagnant", "Egalité");
	}*/

	if (cntGlobal == 10) {
		if (cntJ1 > cntJ2) {
			sessionStorage.setItem('gagnant', "Joueur 1");
		} else if (cntJ1 < cntJ2) {
			sessionStorage.setItem('gagnant', "Joueur 2");
		} else {
			sessionStorage.setItem('gagnant', "Egalité");
		}
	}
}
randomQuestionDisplay();

