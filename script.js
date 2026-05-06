//récupération de éléments du DOM
const inputText = document.getElementById("phrase");

const bouton1 = document.getElementById("btn1");
const outputBtn1 = document.getElementById("pBtn1");

const bouton2 = document.getElementById("btn2");
const outputBtn2 = document.getElementById("pBtn2");

const bouton3 = document.getElementById("btn3");
const outputBtn3 = document.getElementById("pBtn3");

const bouton4 = document.getElementById("btn4");
const outputBtn4 = document.getElementById("pBtn4");

const bouton5 = document.getElementById("btn5");
const outputBtn5 = document.getElementById("pBtn5");

const bouton6 = document.getElementById("btn6");
const outputBtn6 = document.getElementById("pBtn6");

const bouton7 = document.getElementById("btn7");
const outputBtn7 = document.getElementById("pBtn7");

const explication = document.getElementById("explication");

const msgErreur = document.getElementById("erreurMsg");

//fonction gestion erreur

function gereErreur(text){
	if(!text.trim()){
		msgErreur.classList.add('block');
		return true;
	}else{
		msgErreur.classList.remove('block');
		return false;
	}
}

//fonction acton pour les bouttons 1,2,3,4 et 7
function remplaceExpression(regex,symbol,output){
	const monText = inputText.value;
	if(gereErreur(monText)) return;
	const modifiedText = monText.replace(regex,symbol);
	outputBtn1.textContent = "";
	outputBtn2.textContent = "";
	outputBtn3.textContent = "";
	outputBtn4.textContent = "";
	outputBtn5.textContent = "";
	outputBtn6.textContent = "";
	outputBtn7.textContent = "";
	output.textContent = modifiedText;
}

//bouton1,2,3,4 et 7 en action
bouton1.addEventListener('click',()=>{
		remplaceExpression(/[aeiouy]/gi,"*",outputBtn1);
		afficheExplication(regexTexts[0]);
	});
bouton2.addEventListener('click',()=>{
	remplaceExpression(/[0-9]/g,'X',outputBtn2);
	afficheExplication(regexTexts[1]);
});
bouton3.addEventListener('click',()=>{
		remplaceExpression(/[a-z]/g,'-',outputBtn3);
		afficheExplication(regexTexts[2]);
	});
bouton4.addEventListener('click',()=>{
		remplaceExpression(/\s/g,'_',outputBtn4);
		afficheExplication(regexTexts[3]);
	});
bouton7.addEventListener('click',()=>{
		remplaceExpression(/[0-9]/g,'*',outputBtn7);
		afficheExplication(regexTexts[6]);
	});
//fonction pour le bouton 5
function colorExpression(regex,output){
	const monText = inputText.value;
	if(gereErreur(monText)) return;
	const firstMaching = monText.match(regex)[0];
	const coloredExpression = monText.replace(regex,`<span style="color: red">${firstMaching}</span>`);
	outputBtn1.textContent = "";
	outputBtn2.textContent = "";
	outputBtn3.textContent = "";
	outputBtn4.textContent = "";
	outputBtn5.textContent = "";
	outputBtn6.textContent = "";
	outputBtn7.textContent = "";
	output.innerHTML = coloredExpression;
}
//fonction pour le bouton 6
function colorAllExpression(regex,output){
	const monText = inputText.value;
	if(gereErreur(monText)) return;
	const firstMaching = monText.match(regex);
	console.log(firstMaching);
	const coloredExpression = monText.replace(regex,(el)=> `<span style="color: red">${el}</span>`);
	outputBtn1.textContent = "";
	outputBtn2.textContent = "";
	outputBtn3.textContent = "";
	outputBtn4.textContent = "";
	outputBtn5.textContent = "";
	outputBtn6.textContent = "";
	outputBtn7.textContent = "";
	output.innerHTML = coloredExpression;
}
//bouton 5 et 6 en action
bouton5.addEventListener('click', ()=>{
	colorExpression(/[abc123XYZ]/,outputBtn5);
	afficheExplication(regexTexts[4]);
});
bouton6.addEventListener('click', ()=>{
	colorAllExpression(/[abc123XYZ]/g,outputBtn6);
	afficheExplication(regexTexts[5]);
})
// liste des regex et texte correspondant dans un tableau
const regexTexts = [
	{	
		id : 1,
		expression : "/[aeiouy]/gi",
		text : 
		` : recherche toutes les voyelles (global + insensible à la casse), donc A, E, I, O, U, Y également.
		
		REMARQUE : /[aeiouy]/ : recherche une seule voyelle (parmi a,e,i,o,u,y), la première rencontrée, puis s’arrête.
		
		/[aeiouy]/g : recherche toutes les voyelles (global) correspondant à cette liste, sans s’arrêter après la première.`
	},
	{
		id : 2,
		expression : "/[0-9]/g",
		text : 
		` : tous les chiffres individuels dans ton texte.
		
		Pour capturer un chiffre composé de 2 digits, il faudrait /[0-9]+/g.
		
		[0-9] veut dire : Classe de caractères : recherche un chiffre entre 0 et 9.
		
		[0-9] est strictement équivalent à \\d (dans la plupart des langages regex.)`
	},
	{
		id : 3,
		expression : "/[a-z]/g",
		text : 
		` : Recherche tous les minuscules.
		
		/[a-z]/ sans le g recherche un seul minuscule et donne la première occurence c'est à dire que la recherche s'arrête à la première trouvaille.
		
		Pour trouver les caractères avec accent on peut utiliser ceci : /[a-zàâäéèêëïîôöùûüçÿ]/gi.
		
		OU /\p{L}/gu : minuscules ET majuscules, avec ou sans accents, toutes langues confondues.
		OU /\p{Ll}/gu  : minuscules seulement (y compris accentuées).
		`
	},
	{
		id : 4,
		expression : "/\s/g",
		text :
		` : Rechercher tous les caractères blancs (espaces, tabulations, retours à la ligne, etc.).
		
		/\s+/g : Une ou plusieurs blancs consécutifs (groupe).Si dans "a  b" /\s/g capture " " et " ", /\s+/g lui capture un double espace "  ". 
		
		/\S/g : Tous les caractères non blancs (l'inverse).`
	},
	{
		id : 5,
		expression : "/[abc123XYZ]/",
		text :
		` : /[abc123XYZ]/ est une classe de caractères (entre [ et ]). Elle correspond à un seul caractère qui peut être :a ou b ou c ou 1 ou 2 ou 3 ou X ou Y ou Z
		La regex trouve un seul caractère parmi la liste donnée.
		Elle ne correspond pas à des chaînes comme "abc" (car elle cherche un seul caractère, sauf si on utilise + ou *)`
	},
	{
		id : 6,
		expression: "/[abc123XYZ]/g",
		text :
		` : trouve toutes les occurrences de n’importe quel caractère qui est soit a, b, c, 1, 2, 3, X, Y, ou Z.`
	},
	{
		id: 7,
		expression : "/[0-9]/g",
		text :
		` : C'est ce qui est utilisé ici. La regex cherche tous les chiffres individuels dans ton texte.
		
		Pour capturer un chiffre composé de 2 digits ou plus, il faudrait /[0-9]+/g.
		
		[0-9] veut dire : Classe de caractères : recherche un chiffre entre 0 et 9.
		[0-9] est strictement équivalent à \\d (dans la plupart des langages regex.)`
	}	
];

//fonction Affichage explication

function afficheExplication(regexText){
	explication.textContent = "";
	const paragraphe = document.createElement('p');
	const span1 = document.createElement('span');
	span1.classList.add('green');
	span1.textContent = regexText.expression;
	paragraphe.appendChild(span1);
	const span2 = document.createElement('span');
	span2.innerText = regexText.text;
	paragraphe.appendChild(span2);
	explication.appendChild(paragraphe);
}

