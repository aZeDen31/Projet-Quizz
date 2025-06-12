let questions = [];
fetch('./question.json')
	.then(response => response.json())
	.then(data => {
		questions = data;
		randomQuestionDisplay();

		if (window.location.pathname.endsWith("quizz.html")) {
			randomQuestionDisplay();
		}
	});


let boutons = document.querySelectorAll("button");
let currentQuestion;
let pastQuestions = [];
let cntJ1 = 0;
let cntJ2 = 0;
let cntGlobal = 0;
let joueur1 = true;
let body = document.getElementById("body");

let test = 0;

boutons.forEach(bouton => {
	if (bouton.classList.contains("question")) {
		bouton.addEventListener("click", () => reponseQuestion(bouton));
	}
});

document.querySelectorAll('p.BG').forEach(btn => {
	btn.addEventListener('click', () => chgntBG(btn));
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
	defWinner();
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
		bouton.classList.add("bonneReponse");
		setTimeout(() => {
			randomQuestionDisplay(); // Tire une nouvelle question.
			bouton.classList.remove("bonneReponse")
		}, 500);


	} else {
		cntGlobal++;
		joueur1 = !joueur1
		bouton.classList.add("mauvaiseReponse")
		setTimeout(() => {
			if (cntGlobal < 10) {
				randomQuestionDisplay(); // Tire une nouvelle question.
				bouton.classList.remove("mauvaiseReponse");
			}
			defWinner();
		}, 500);
	}
}

function defWinner() {
	// Définit le gagnant quand 10 questions ont été posées.
	if (cntGlobal == 10) {
		sessionStorage.setItem('gagnant', "Blabla");
		if (cntJ1 > cntJ2) {
			sessionStorage.setItem('gagnant', "Joueur 1");
			console.log(sessionStorage.getItem('gagnant'))
		} else if (cntJ1 < cntJ2) {
			sessionStorage.setItem('gagnant', "Joueur 2");
			console.log(sessionStorage.getItem('gagnant'))
		} else {
			sessionStorage.setItem('gagnant', "Egalité");
			console.log(sessionStorage.getItem('gagnant'))
		}
		window.location.href = "end.html";
	}
}

function changementContour(boutonSelect) {
	if (boutonSelect.classList.contains("BGRouge")) {
		let el = document.getElementById("rouge");
		let autre = document.getElementById("rose")
		removeLastClass(el);
		el.classList.add("selected");
		removeLastClass(autre);
		autre.classList.add("notSelected")
	} else {
		let el = document.getElementById("rose")
		let autre = document.getElementById("rouge")
		removeLastClass(el);
		el.classList.add("selected")
		removeLastClass(autre);
		autre.classList.add("notSelected")
	}
}

function chgntBG(boutonSelect) {
	if (boutonSelect.classList.contains("BGRouge")) {
		body.className = "rouge"
		sessionStorage.setItem("couleur", "rouge");
	} else {
		body.className = "rose";
		sessionStorage.setItem("couleur", "rose");
	}
}

function removeLastClass(el) {
	el.classList.remove("selected", "notSelected");
}

document.addEventListener("DOMContentLoaded", () => {
	console.log(sessionStorage.getItem("couleur"));
	body.className = (sessionStorage.getItem("couleur") || "rose");
});

if (window.location.pathname.endsWith("end.html")) {
	if(sessionStorage.getItem("gagnant") != "Egalité"){
		document.getElementById("texte-gagnant").innerText = "Le vainqueur est le 🎉 " + sessionStorage.getItem("gagnant") + " 🎉"
	} else {
		document.getElementById("texte-gagnant").innerText = "Les deux joueurs ont obtenu une égalité !"
	}
}

