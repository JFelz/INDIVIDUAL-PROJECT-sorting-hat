const createMember = () => {

    const inputName = document.querySelector("#UserName")
    
    const randNum = Math.floor(Math.random() * 43);
    console.log(randNum);
    
    for (i = 0; i < GoTclasses.length; i++){
    if (randNum === Number(GoTclasses[i].id)){
    
    GoTclasses[i].name = inputName.value;
    
    console.log(GoTclasses[i]);
    
    specCardonDOM.push(GoTclasses[i]);
    console.log(specCardonDOM);
    
    
    
    
    CardsOnDom(specCardonDOM);
    
    if (GoTclasses[i].faction === "Stark") {
      console.log("STARK FILTER");
      arrStark.push(GoTclasses[i]);
    }
    if (GoTclasses[i].faction === "Lannister") {
      console.log("Lannister FILTER");
      arrLann.push(GoTclasses[i]);
    }
    if (GoTclasses[i].faction === "Targaryen") {
      console.log("TARG FILTER");
      arrTarg.push(GoTclasses[i]);
    }
    if (GoTclasses[i].faction === "Baratheon") {
      console.log("BARATH FILTER");
      arrBarath.push(GoTclasses[i]);
    }
    if (GoTclasses[i].faction === "Greyjoy") {
      console.log("Greyjoy FILTER");
      arrGrey.push(GoTclasses[i]);
    }
    if (GoTclasses[i].faction === "Hightower") {
      console.log("HIGHTOWER FILTER");
      arrHigh.push(GoTclasses[i]);
    }
    };
    }}; 

    export default createMember;