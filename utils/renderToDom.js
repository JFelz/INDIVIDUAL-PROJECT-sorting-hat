const renderToDom = (selectId, renderToHtml) => {
    const divId = document.querySelector(selectId);
    divId.innerHTML = renderToHtml;
    };

    export default renderToDom;