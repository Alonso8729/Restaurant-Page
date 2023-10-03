import loadHome from "./home"
import loadContact from "./contact"
import loadMenu from "./menu"






function createFooter() {
    const footer = document.createElement('footer');
    const paragraph = document.createElement('p');
    const span = document.createElement('span');
    span.textContent = "Alonso";
    paragraph.textContent = "Built by";
    paragraph.appendChild(span);
    footer.appendChild(paragraph);

    return footer;
}

function loadWebsite() {
    const content = document.querySelector("#content");
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    //button that sets home active by adding class called active
    //

    loadHome();
}

export default loadWebsite();