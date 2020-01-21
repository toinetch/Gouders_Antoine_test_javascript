//EXO 2
console.log('exo 2');
let maBoolean = true;
console.log(maBoolean);

//EXO 3
console.log('exo 3');
let monArray = [];
console.log(monArray);

//EXO 4
console.log('exo 4');
let monObjet = {};
console.log(monObjet);

//EXO 5
console.log('exo 5');
let monString = "";
console.log(monString);

//EXO 6
console.log('exo 6');
let monInt = 1;
console.log(monInt);

//EXO 7
console.log('exo 7');
let monObjet2 = {
    nom : "objet",
    maMethode(){}
}
console.log(monObjet2);

//EXO 8
console.log('exo 8');
let maFonction = (para1, para2)=> {}
console.log(maFonction);

//EXO 9
console.log('exo 9');
if(monInt < 8){
    console.log(`${monInt} est plus petit que 8`);
}
else{
    console.log(`${monInt} est plus grand que 8`);
}

//EXO 10
console.log('exo 10');
for(let i = 0; i <= 9; i++){
    console.log(i);
}

//EXO 11
console.log('exo 11');


//EXO 12
console.log('exo 12');
let maPhrase = "hello coding 11";

console.log(maPhrase);


//EXO 13
console.log('exo 13');

//EXO 14
console.log('exo 14');
function longueur(){
    let a = 'Hello Coding 11';
    alert(a);
    console.log(a.length);
}
longueur();

//EXO 15
console.log('exo 15');
function nbAleatoire(){
    alert(parseInt(Math.random()*((1+100)-1)+1));
}
nbAleatoire();

//EXO 16
console.log('exo 16');
function nbAleatoireChoix(){
    let a = parseInt(prompt('entrez un nb'));
    let b = parseInt(prompt('entrez un 2eme nb'));
    if (a < b){
        alert(parseInt(Math.random()*((1+b)-a)+a));
    }
    else if (b < a){
        alert(parseInt(Math.random()*((1+a)-b)+b));
    }
}
nbAleatoireChoix();

//EXO 17
console.log('exo 17');



//EXO 18
console.log('exo 18');
let Objet = {
    nom : '',
    age : '',
    modeling(){
        this.nom = 'antoine';
        this.age = '24';
        alert(`Bonjour ${this.nom} tu as ${this.age} ans`);
    }
}
Objet.modeling();

//EXO 19
console.log('exo 19');
let Objet2 = {
    addkey(){
        Objet.taille = "179cm";
        console.log(Objet);
    }
}
Objet2.addkey();

//EXO 20
console.log('exo 20');
let carre = {
    size : '',
    borderaspect : '',
    epaisseur : '',
    couleur : '',
    addKey2(){
        this.size = prompt('choisis');
        this.borderaspect = prompt('solid dotted');
        this.epaisseur = prompt('integer');
        this.couleur = prompt('blue red green');
    }
}
carre.addKey2();

//EXO 21
console.log('exo 21');

//EXO 22
console.log('exo 22');
let sect = document.getElementsByTagName('section');
let titre = document.getElementsByTagName('h1');
let text = document.createTextNode("Bonjour");
sect.id = 'management';
//sect.appendChild(text);

//EXO 23
console.log('exo 23');
let sousTitre = document.createElement('h2');
sect.

//EXO 24
console.log('exo 24');
