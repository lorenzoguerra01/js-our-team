// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
// BONUS 3:
// Permettere l'aggiunta di un nuovo membro del team

const members = [
    {
        image: 'wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnett',
        role: 'Founder & CEO'
    },
    {
        image: 'angela-caroll-chief-editor.jpg',
        name: 'Angela Caroll',
        role: 'Chief Editor'
    },
    {
        image: 'walter-gordon-office-manager.jpg',
        name: 'Walter Gordon',
        role: 'Office Manager'
    },
    {
        image: 'angela-lopez-social-media-manager.jpg',
        name: 'Angela Lopez',
        role: 'Social Media Manager'
    },
    {
        image: 'scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        role: 'Developer'
    },
    {
        image: 'barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        role: 'Graphic Designer'
    },
];

const reply = document.getElementById("reply")

for (let i = 0; i < members.length; i++) {
    const card = document.createElement('div');
    card.classList.add("card", "p-3", "text-center")
    card.style.width = `calc(100% / 3})`;
    card.innerHTML = `
    <img src="img/${members[i].image}">
    <div>${members[i].name}</div>
    <div>${members[i].role}</div>
    `;
    reply.appendChild(card);
}