const exiledCardsOnDom = () => {
    let domString = "";
    
    for (const brick of array) {
      domString += 
  
    `<div class="card" style="max-width: 33%;">
    <img src="${brick.imgUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${brick.faction}</h5>
      <p class="card-text"><b>Name</b>: ${brick.name}</p>
      <p class="card-text"><b>Class</b>: ${brick.class}</p>
      <p class="card-text"><b>Weapon</b>: ${brick.weapon}</p>
      <p class="card-text"><b>Special Ability</b>: ${brick.specAbility}</p>
    </div>
    </div>`
    };
    
    renderToDom('.container-2', domString);
  
  };

  export default exiledCardsOnDom;