const items = document.querySelectorAll("ul li");

// Ciclo for classico
for (let i = 0; i < items.length; i++) {
    console.log("ciclo array (nodelist)", i);
}

// con forEach
const cb = (element, index) => {
    // console.log("ciclo array (nodelist)", element, index);
    const text = element.innerHTML;
    // console.log(text);
    element.innerHTML = text.toUpperCase();
    element.style.color = "red";
};

items.forEach(cb);

// ------

const things = [
    "pulire i pavimenti",
    "lavare i piatti",
    "buttare la spazzatura",
    "stirare",
    "studia JS",
];

const ul = document.querySelector("#dinamica");

// Trasformo "things" in "htmlThings" con .forEach()
// const htmlThings = [];

// things.forEach((e,i) => {
//   htmlThings[i] = '<li>' + e + '</li>';
// })

// Sono la stessa cosa!
// '<li>' + element + '</li>'
// `<li>${element}</li>`

const render = () => {
    const random = Math.ceil(Math.random() * 3);
    const htmlThings = things.map(
        (element) => `<li class="colore${random}">${element}</li>`
    );

    ul.innerHTML = htmlThings.join("");
};

render();

document.querySelector("button").addEventListener("click", () => {
    const random = Math.floor(Math.random() * 99);
    things.push(`diamo i numeri!! ${random}`);
    render();
});

// console.log(htmlThings, things);
// <li>pulire i pavimenti</li>
// ...

// --------
// Sezione commenti
const utente = "https://randomuser.me/api/portraits/lego/0.jpg"
const email = document.querySelector("#email").value;
const nome = document.querySelector("#nome").value;

const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const commentsList = document.querySelector("#comments");

const comments = [];
console.log(email, nome);

const renderComments = () => {
    // Versione "separata"
    // const commentItems = comments.map(
    //   (comment) => `<li>
    //     <h4>Utente anonimo (vigliacco)</h4>
    //     <p>${comment}</p>
    //   </li>`
    // );

    // commentsList.innerHTML = commentItems.join("");

    // Versione "one-liner"
    commentsList.innerHTML = comments
        .map(
            (comment) => `<li>
        <img class="utente" src="${utente}" alt="">
        <h4 class="email">${email}</h4>
        <h4 class="nome">${nome}</h4>
        <p class="commento">${comment}</p>
        </li>`
        )
        .join("");
};

submit.addEventListener("click", () => {
    comments.push(input.value, email.value, nome.value);
    input.value = "";
    email.value = "";
    nome.value = "";
    renderComments();
});




/* index.html - struttura base degli esempi
index.js - logica, querySelectorAll e basi di templating
Esercizio
Dato un array di citazio`ni, tramite un pulsante verrà visualizzata una citazione casuale per volta

Migliorare la "sezione commenti" vista oggi insieme, aggiungendo oltre al testo del commento:
il nome dell'utente
l'email
una foto profilo (un URL: https://randomuser.me/photos) */

/*

const quotes = [
    "Io sono tuo padre!",
    "guerra nessuno fatto grande",
    "fare o non fare... non c'è provare",
    "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
    "Sto più in alto di te!",
    ".... (cit. Darth Maul)",
    "Eri come un fratello per me! (pianto)",
];


let quotItems = 0;
console.log(quotItems);
//

const paragraph = document.querySelector(".paragraph");

const button = document.querySelector(".button")






button.addEventListener("click", () => {
    quotItems = Math.floor(Math.random() * 8);
    let casual = quotes[quotItems];
    paragraph.innerHTML = `la frase casuale è:  ${casual}.`;



})
 */