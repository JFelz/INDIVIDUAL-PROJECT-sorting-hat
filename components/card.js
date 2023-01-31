export const CardsOnDom = (persona) => {
  let domString = "";
  
  for (const persona of GoTclasses) {
    domString += 

  `<div class="card" style="width: 18rem;">
  <img src="${persona.imgUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">${persona.name}</p>
    <p class="card-text">${persona.faction}</p>
    <p class="card-text">${persona.class}</p>
    <p class="card-text">${persona.weapon}</p>
    <p class="card-text">${persona.specAbility}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>`
  }
  
  renderToDom(".blue-card", domString);
  
  };
