export const renderToDom = (selectId, taco) => {
const divId = document.querySelector(selectId);
divId.innerHTML = taco;
};
