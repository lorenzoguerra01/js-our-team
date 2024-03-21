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

for (let i = 0; i < members.length; i++) {
    const card = document.createElement('div');
    card.classList.add("card", "p-3", "text-center")
    card.style.width = `calc(100% / 3 - 15px)`;
    card.innerHTML = `
    <img src="img/${members[i].image}">
    <div class = "fw-bold">${members[i].name}</div>
    <div>${members[i].role}</div>
    `;
    reply.appendChild(card);
}

let elBtnSubmit = document.getElementById("submit")

elBtnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const photoVal = document.getElementById('photo').value;
    const nameVal = document.getElementById('name').value;
    const roleVal = document.getElementById('role').value;

    const newMember = {
        image: photoVal,
        name: nameVal,
        role: roleVal
    };
    let error = document.getElementById("error")
    if (nameVal === "" || roleVal === "") {
        error.classList.remove("d-none")
    } else {
        members.push(newMember);
        console.log(members);
        const card = document.createElement('div');
        card.classList.add("card", "p-3", "text-center")
        card.style.width = `calc(100% / 3 - 15px)`;
        if (newMember.image === "") {
            card.innerHTML = ` <img src=" https://picsum.photos/400/400" alt="img-member"></img>`
        } else {
            card.innerHTML = `<img src="img/${newMember.image}">`
        }
        card.innerHTML += `
            <div class = "fw-bold">${newMember.name}</div>
            <div>${newMember.role}</div>
            `;
        reply.appendChild(card);
        error.classList.add("d-none")
    }
})