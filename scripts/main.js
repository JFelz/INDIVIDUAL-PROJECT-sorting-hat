import { renderToDom } from "../utils/renderToDom.js";
import { GoTclasses } from "../data/classes.js";
import { CardsOnDom } from "../components/card.js";





//input button that creates a new array with user info

const createMember = () =>{
const btnName = document.querySelector("#Name");




//display user info on card and place it in respective order.

const renderCards = () => {
let refCards = "";

GoTclasses.forEach((persona) => {
  refCards += CardsOnDom(persona);
});

renderToDom(".blue-card", refCards);

}


//create form
//1.) target user input box and store info
