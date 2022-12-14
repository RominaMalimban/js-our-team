// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const arrayTeam = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },

    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },

    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },

    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        foto: "scott-estrada-developer.jpg"
    },

    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    },
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// for (let i = 0; i < arrayTeam.length; i++){
//     let memberIesimo = arrayTeam[i];

//     for(let key in memberIesimo){
//         console.log(`${key} ${memberIesimo[key]}`);
//     }
// };

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe:
let container = document.querySelector(".container");

for (let i = 0; i < arrayTeam.length; i++){
    let memberIesimo = arrayTeam[i];

    let newElement = createElement();

    for(let key in memberIesimo){
        console.log(`${key} ${memberIesimo[key]}`);

        newElement.append(` ${memberIesimo[key]}`);
        container.append(newElement);
    }
};