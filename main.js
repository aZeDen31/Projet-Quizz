const questions = [
  {
    question: "Quel était l'un des instruments de torture les plus utilisés pendant l'Inquisition espagnole ?",
    reponseA: "Le chevalet",
    reponseB: "La guillotine",
    reponseC: "La chaise électrique",
    reponseD: "Le bûcher",
    bonneReponse: "reponseA"
  },
  {
    question: "Quelle civilisation antique utilisait le supplice du taureau d'airain ?",
    reponseA: "Les Romains",
    reponseB: "Les Grecs",
    reponseC: "Les Perses",
    reponseD: "Les Égyptiens",
    bonneReponse: "reponseB"
  },
  {
    question: "Dans quelle prison française célèbre la torture a-t-elle été systématiquement utilisée pendant la guerre d'Algérie ?",
    reponseA: "La Santé",
    reponseB: "Montluc",
    reponseC: "La prison de Serkadji",
    reponseD: "La villa Susini",
    bonneReponse: "reponseD"
  },
  {
    question: "Quel texte international interdit explicitement la torture en toutes circonstances ?",
    reponseA: "La Déclaration universelle des droits de l'homme",
    reponseB: "Le Pacte international relatif aux droits civils et politiques",
    reponseC: "La Convention contre la torture de l'ONU",
    reponseD: "La Convention de Genève",
    bonneReponse: "reponseC"
  },
  {
    question: "Quel organe de l'ONU est chargé de surveiller l'application de la Convention contre la torture ?",
    reponseA: "Le Conseil de sécurité",
    reponseB: "Le Comité contre la torture",
    reponseC: "La Cour pénale internationale",
    reponseD: "Le Haut-Commissariat aux droits de l'homme",
    bonneReponse: "reponseB"
  },
  {
    question: "Quel pays a été accusé d'avoir pratiqué des “interrogatoires renforcés” assimilables à de la torture après les attentats du 11 septembre 2001 ?",
    reponseA: "Russie",
    reponseB: "Chine",
    reponseC: "États-Unis",
    reponseD: "Arabie saoudite",
    bonneReponse: "reponseC"
  },
  {
    question: "Dans combien de pays environ la torture est-elle encore pratiquée selon Amnesty International (estimation récente) ?",
    reponseA: "Moins de 10",
    reponseB: "Environ 30",
    reponseC: "Plus de 70",
    reponseD: "Plus de 150",
    bonneReponse: "reponseC"
  },
  {
    question: "Quel philosophe français a dénoncé la torture dans ses écrits sur la guerre d'Algérie ?",
    reponseA: "Michel Foucault",
    reponseB: "Jean-Paul Sartre",
    reponseC: "Albert Camus",
    reponseD: "Jacques Derrida",
    bonneReponse: "reponseB"
  },
  {
    question: "Quel pays a été condamné par la Cour européenne des droits de l'homme en 1978 pour traitements inhumains infligés à des prisonniers en Irlande du Nord ?",
    reponseA: "La France",
    reponseB: "L'Espagne",
    reponseC: "Le Royaume-Uni",
    reponseD: "L'Italie",
    bonneReponse: "reponseC"
  },
  {
    question: "Quel est l'objectif principal du Protocole d'Istanbul ?",
    reponseA: "Prévoir l'usage légitime de la force",
    reponseB: "Encadrer les interrogatoires dans les zones de guerre",
    reponseC: "Former les agents de police à la détection du mensonge",
    reponseD: "Documenter et enquêter sur les cas de torture",
    bonneReponse: "reponseD"
  },
  {
    question: "Quel instrument de torture médiéval était surnommé « la vierge de fer » ?",
    reponseA: "Une ceinture de contention",
    reponseB: "Un sarcophage hérissé de pointes",
    reponseC: "Un banc d'étirement",
    reponseD: "Un collier de fer chauffé",
    bonneReponse: "reponseB"
  },
  {
    question: "Quel pays a adopté en 2005 le McCain Amendment interdisant la torture par ses forces armées ?",
    reponseA: "Le Canada",
    reponseB: "Les États-Unis",
    reponseC: "Le Royaume-Uni",
    reponseD: "L'Australie",
    bonneReponse: "reponseB"
  }
];


function randomQuestionDisplay(){
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

