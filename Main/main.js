import CardsOnDom from "../utils/cardsOnDom.js";
import GoTclasses from "../utils/data.js";
import exiledCardsOnDom from "../utils/exiledCardsonDom.js";
import hideFilterBtns from "../utils/hideFilterBtns.js";
import hideInputBtns from "../utils/hideInputBtns.js";
import renderToDom from "../utils/renderToDom.js";
import sendToWall from "../utils/sendToWall.js";
import showFilterBtns from "../utils/showFilterBtns.js";
import showInputBtns from "../utils/showInputBtns.js";
import createMember from "../utils/createMember.js";
  
GoTclasses
exiledCardsOnDom();
renderToDom();



theWall = [];
sendToWall();





  
  //Grabs Name input forms
  const sortButtons = document.querySelector(".SortButton")
 
  const userInput = document.querySelector("#UserName");
  const stateName = document.querySelector(".StateYourName");


   
 
hideInputBtns();

showInputBtns();

  

//target the buttons on the HTML

const btn_L = document.querySelector(".btn-Lann");
const btn_T = document.querySelector(".btn-Targ");
const btn_B = document.querySelector(".btn-Barath");
const btn_S = document.querySelector(".btn-Stark");
const btn_G = document.querySelector(".btn-Grey");
const btn_H = document.querySelector(".btn-High");
const btn_All = document.querySelector(".btn-all");


//hide and show buttons

hideFilterBtns();

showFilterBtns();


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


createMember();

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
