var body = document.querySelector("body")

let shoes = [
    {
      "brand": "Nike",
      "model": "AirForce 1",
      "size": 39
    },
    {
      "brand": "Adidas",
      "model": "Superstar",
      "size": 36
    },
    {
      "brand": "Asics",
      "model": "Japan S PF",
      "size": 42
    }
];


  function displayShoes(filteredShoes = shoes) {
    const shoesList = document.getElementById('shoes');
   shoesList.innerHTML = '<h2>Liste des chaussures</h2>'; 
    
    if (filteredShoes.length === 0) {
      shoesList.innerHTML += '<p>Aucun site web trouvé.</p>';
      return;
    }
  
    filteredShoes.forEach((shoes, index) => {
        shoesList.innerHTML += `
          <div class="bookmark">
             Brand: ${shoes.brand} - Model: ${shoes.model} - Taille: ${shoes.size}
          </div>
        `;
      });
  }
  
  function addShoes() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const size = document.getElementById('size').value;
  
    if (brand && model && size) {
      shoes.push({ brand, model, size });
      displayShoes();
      clearForm();
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    displayShoes();
  });
  