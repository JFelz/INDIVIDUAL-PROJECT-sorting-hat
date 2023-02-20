const CardsOnDom = (taco) => {
    let domString = "";
    
    for (const persona of taco) {
      domString += 
  
    `<div class="card" style="max-width: 33%;">
    <img src="${persona.imgUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${persona.faction}</h5>
      <p class="card-text"><b>Name</b>: ${persona.name}</p>
      <p class="card-text"><b>Class</b>: ${persona.class}</p>
      <p class="card-text"><b>Weapon</b>: ${persona.weapon}</p>
      <p class="card-text"><b>Special Ability</b>: ${persona.specAbility}</p>
      <button id="wallBtn--${persona.id}" class="btn btn-danger">Send to the Wall</button>
    </div>
    </div>`
    };
    
    renderToDom('.container-1', domString);
  
  document.querySelector(".container-1").addEventListener('click', sendToWall);
  
  };

  export default CardsOnDom;