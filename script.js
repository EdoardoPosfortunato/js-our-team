const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


//////////   FUNZIONI    ////////


// Funzione che dato un oggetto restituisce tutte le sue chiavi e i suoi vaolori prointi per essere inseriti in HTML 


let createCard = (object) => {

  const { name, role, email, img } = object;

  return `<div class="card col-12 mx-5 my-3" style="width: 18rem;">
            <img class="card-img-top" src="${img}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${role}</p>
              <p class="card-text">${email}</p>
            </div>
          </div>`

}


// funzione che scorre i vari oggetti dell'array e che restrituisce una stringa da inserire in un div dato

let renderCard = (array, HTMLelem) => {

  let totalCards = '';
  
  for (let element of array) {

    // console.log(createCard(currElement))
    totalCards += createCard(element)
    

  }

  return HTMLelem.innerHTML = totalCards;
}


// Esecuzione Logica


let impiegati = document.getElementById(`cardDivision`)

renderCard(teamMembers, impiegati)









/* let marioBianchi = {
  name: "Marco Bianchi",
  role: "Designer",
  email: "marcobianchi@team.com",
  img: "img/male1.png"
}



let impiegati = document.getElementById(`cardDivision`)

const print = renderCard(teamMembers, impiegati)
console.log(print)

const marioRossi = teamMembers[0]

console.log(marioRossi)

cartaMarioRossi = createCard(marioRossi);

impiegati.innerHTML = cartaMarioRossi */

