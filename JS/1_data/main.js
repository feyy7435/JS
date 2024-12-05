const books = [
    {
      "title": "Le seigneur des anneaux",
      "author": "J.J.R. Tolkien",
      "year": 1954,
      "genres": [
        "Fantastique",
        "Aventure"
      ],
      "bd": false
    },
    {
      "title": "Akira",
      "author": "Katsuhiro Ōtomo",
      "year": 1982,
      "genres": [
        "Science fiction",
        "Post apocalyptique",
        "Cyberpunk"
      ],
      "bd": true
    },
    {
      "title": "Dune",
      "author": "Franck Herbert",
      "year": 1965,
      "genres": [
        "Science fiction",
        "Action",
        "Spirituel"
      ],
      "bd": false
    },
    {
      "title": "Shangri-La",
      "author": "Mathieu Bablet",
      "year": 2016,
      "genres": [
        "Science fiction",
        "Aventure",
        "Dystopie"
      ],
      "bd": true
    }
  ];

  const genres = [
    "Fantastique",
    "Drame",
    "Onirique",
    "Science fiction",
    "Action",
    "Cyberpunk",
    "Aventure",
    "Ecologie",
    "Huis clos",
    "Thriller",
    "Humour",
    "Post apocalyptique",
    "Spirituel",
    "Dystopie"
  ]

  let table = document.createElement("table")
  let thead = document.createElement("thead")
  let tbody = document.createElement("tbody")
  const body = document.querySelector("body")

function createTableRow(data) {
    let row = document.createElement("tr");
    data.forEach(text => {
        let cellule = document.createElement(data === headers ? "th" : "td")
        cellule.textContent = text
        row.appendChild(cellule)
    })
    return row
}

let headers = ["title", "author", "year", "genre", "bd"]
thead.appendChild(createTableRow(headers))

books.forEach(item => {
    let rowData = Object.values(item)
    tbody.appendChild(createTableRow(rowData))
})
table.appendChild(thead)
table.appendChild(tbody)
body.appendChild(table)

let inputGrp = document.createElement("input")
inputGrp.placeholder = "Title"
let inputTitre = document.createElement("input")
inputTitre.placeholder = "Author"
let inputAnnee = document.createElement("input")
inputAnnee.placeholder = "Year"
let inputGenre = document.createElement("input")
inputGenre.placeholder = "Genres"
let inputBD = document.createElement("input")
inputBD.placeholder = "BD"
let inputBtn = document.createElement("button")
inputBtn.textContent = "Ajouter"

body.appendChild(inputGrp)
body.appendChild(inputTitre)
body.appendChild(inputAnnee)
body.appendChild(inputGenre)
body.appendChild(inputBD)
body.appendChild(inputBtn)


inputBtn.addEventListener("click", () => {
    let nouveau = {
        "title": inputGrp.value,
        "author": inputTitre.value,
        "year": parseInt(inputAnnee.value),
        "genre": inputGenre.value,
        "bd": inputBD.value,
    }

    books.push(nouveau)
    tbody.appendChild(createTableRow(Object.values(nouveau)))

    inputGrp.value = ""
    inputTitre.value = ""
    inputAnnee.value = ""
    inputGenre.value = ""
    inputBD.value = ""
});



