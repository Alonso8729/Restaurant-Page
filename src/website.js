






function loadWebsite() {
    const content = document.querySelector("#content");
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());


    loadHome();
}

export default loadWebsite();