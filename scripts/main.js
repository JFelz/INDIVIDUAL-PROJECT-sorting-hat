import { renderToDo } from "../utils/renderToDom.js";
import { GoTclasses } from "../data/classes.js";

const renderToDom = (selectId, html) => {
  const divId = document.querySelector(selectId);
  divId.innerHTML = html;
  };

renderToDom(".here", GoTclasses.name);

//input button that creates a new array with user info

const createMember = () =>{
const btnName = document.querySelector("#Name");

const newMember = {
id: 1,
name: btnName.value,
}
}



//display user info on card and place it in respective order.


//create form
//1.) target user input box and store info
