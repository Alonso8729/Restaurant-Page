import loadContact from "./contact";
import { setToActive } from "./website";


function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');
    //Add paragraph
    const paragraph = document.createElement('p');
    home.appendChild(paragraph);
    paragraph.textContent = "where every dish is a masterpiece on your plate";
    //Add discover menu button
    const button = document.createElement('button');
    button.setAttribute('id', 'discover-btn');
    button.textContent = "RESERVE A TABLE";
    home.appendChild(button);
    button.addEventListener("click", () => {
        loadContact();
        const contactButton = document.getElementById("contact-btn");
        setToActive(contactButton);
    });

    return home
}



function loadHome() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;