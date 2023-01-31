export const renderToDom = (selectId, html) => {
const divId = document.querySelector(selectId);
divId.innerHTML = html;
};
