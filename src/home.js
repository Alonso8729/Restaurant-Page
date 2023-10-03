function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');
    //Add paragraph
    const paragraph = document.createElement('p');
    home.appendChild(paragraph);
    paragraph.textContent = "where every dish is a masterpiece on your plate";
    //Add discover menu button
    const button = document.createElement('button');
    button.setAttribute('id','discover-btn');
    button.textContent = "Discover Menu";
    return home
}



function loadHome() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.appendChild(createHome());
    return main;
}

export default loadHome;