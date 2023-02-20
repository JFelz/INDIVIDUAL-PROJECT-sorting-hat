import CardsOnDom from "../utils/cardsOnDom.js";
import GoTclasses from "../utils/data.js";

  
  const renderToDom = (selectId, renderToHtml) => {
  const divId = document.querySelector(selectId);
  divId.innerHTML = renderToHtml;
  };







const exiledCardsOnDom = (wall) => {
  let domString = "";
  
  for (const brick of wall) {
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

theWall = [];

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





  
  //Grabs Name input forms
  const sortButtons = document.querySelector(".SortButton")
 
  const userInput = document.querySelector("#UserName");
  const stateName = document.querySelector(".StateYourName");


   const hideInputBtns = () => {
    sortButtons.hidden = true;
    userInput.hidden = true;
    stateName.hidden = true;
   };
 
  hideInputBtns();

  const showInputBtns = () => {
    sortButtons.hidden = false;
    userInput.hidden = false;
    stateName.hidden = false;
   };

  

//target the buttons on the HTML

const btn_L = document.querySelector(".btn-Lann");
const btn_T = document.querySelector(".btn-Targ");
const btn_B = document.querySelector(".btn-Barath");
const btn_S = document.querySelector(".btn-Stark");
const btn_G = document.querySelector(".btn-Grey");
const btn_H = document.querySelector(".btn-High");
const btn_All = document.querySelector(".btn-all");


//hide and show buttons

const hideFilterBtns = () => {
let filtBtns = [];
filtBtns.push(btn_T, btn_S, btn_L, btn_H, btn_G, btn_B, btn_All);

for (i in filtBtns){
  filtBtns[i].hidden = true;
}}; 

hideFilterBtns();


const showFilterBtns = () => {
  let filtBtns = [];
  filtBtns.push(btn_T, btn_S, btn_L, btn_H, btn_G, btn_B, btn_All);
  
  for (i in filtBtns){
    filtBtns[i].hidden = false;
  }};

//show upon click
const showBtn = document.querySelector(".Show");
showBtn.addEventListener('click', () =>{
  showInputBtns();
  showFilterBtns();
})

let specCardonDOM = [];
let arrStark = [];
let arrLann = [];
let arrTarg = [];
let arrBarath = [];
let arrGrey = [];
let arrHigh = [];


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

console.log(specCardonDOM);
console.log(arrStark);




const sortBtn = document.querySelector(".SortButton");
sortBtn.addEventListener('click', createMember);


//Once button clicked, DOM shows that filtered array
btn_L.addEventListener('click', () => {
  CardsOnDom(arrLann);
});

btn_T.addEventListener("click", () => {
  CardsOnDom(arrTarg);
})

btn_B.addEventListener('click', () => {
  CardsOnDom(arrBarath);
})

btn_S.addEventListener('click', () => {
  CardsOnDom(arrStark);
})
btn_G.addEventListener('click', () => {
  CardsOnDom(arrGrey);
})
btn_H.addEventListener('click', () => {
  CardsOnDom(arrHigh);
})
btn_All.addEventListener('click', () => {
  CardsOnDom(specCardonDOM);
})
