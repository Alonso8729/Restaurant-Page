import loadHome from "./home"
import loadContact from "./contact"
import loadMenu from "./menu"


function createHeader() {
    const header = document.createElement('header');
    //Create and append h1 element
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Fresco";
    header.appendChild(title);

    //Create and append nav
    const nav = document.createElement('nav');
    header.appendChild(nav);

    //Create event listeners and append nav's buttons
    //HOME BUTTON
    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setToActive(homeButton);
        loadHome();
    })

    //MENU BUTTON
    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setToActive(menuButton);
        loadMenu();
    })

    //CONTACT BUTTON
    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setToActive(contactButton);
        loadContact();
    })



    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return header;

}

function setToActive(button) {
    const buttons = document.querySelectorAll(".nav-button");
    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active')
        }
    })
    button.classList.add("active");
}


function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    return main;
}


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
    setToActive(document.querySelector('.nav-button'))

    loadHome();
}

export default loadWebsite();