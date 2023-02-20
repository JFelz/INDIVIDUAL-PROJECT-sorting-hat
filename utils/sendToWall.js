const sendToWall = (event) => {
    if (event.target.id.includes("wallBtn")){
      const [, personaId] = event.target.id.split("--");
    
      console.log("Object id: " + personaId);
    
     
     const personaIndex = specCardonDOM.findIndex((item) => Number(personaId) === item.id);
      
    
      const exiledPersona = specCardonDOM.splice(personaIndex, 1);
      console.log(specCardonDOM.item);
      theWall.push(exiledPersona);
    
     
      
    };
    exiledCardsOnDom(theWall);
    console.log(theWall);
    CardsOnDom(specCardonDOM);
    };

    export default sendToWall;