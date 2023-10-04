function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    //Create and append main header
    const mainHeader = document.createElement('h1');
    mainHeader.classList.add('menu-title');
    mainHeader.textContent = "MENU"
    menu.appendChild.mainHeader

    //Create and append first category
    const firstCat = document.createElement('h2');
    firstCat.classList.add('category');
    firstCat.textContent = "PASTA";
    menu.appendChild(firstCat);
    //Create and append PASTA dishes
    //first item
    const firstPastaTitle = document.createElement('span');
    firstPastaTitle.classList.add('item-title');
    firstPastaTitle.textContent = "Rigatoni Pomodorini - $24";
    menu.appendChild(firstPastaTitle);
    const firstPastaDesc = document.createElement('p');
    firstPastaDesc.classList.add('item-desc');
    firstPastaDesc.textContent = "Sun-Dried Tomatoes, Garlic, Basil, Chili, Parmesan";
    menu.appendChild(firstPastaDesc);

    //second item
    const secondPastaTitle = document.createElement('span');
    secondPastaTitle.classList.add('item-title');
    secondPastaTitle.textContent = "Gnocchi Zucchini - $21";
    menu.appendChild(secondPastaTitle);
    const secondPastaDesc = document.createElement('p');
    secondPastaDesc.classList.add('item-desc');
    secondPastaDesc.textContent = "Cream, Blue Cheese, Pecorino, Parmesan";
    menu.appendChild(secondPastaDesc);

    //third item
    const thirdPastaTitle = document.createElement('span');
    thirdPastaTitle.classList.add('item-title');
    thirdPastaTitle.textContent = "Spaghetti Carbonara - $23";
    menu.appendChild(thirdPastaTitle);
    const thirdPastaDesc = document.createElement('p');
    thirdPastaDesc.classList.add('item-desc');
    thirdPastaDesc.textContent = "Cream, Black Pepper, Egg Yolk, Parmesan";
    menu.appendChild(thirdPastaDesc);

    //Create and append second category
    const secondCat = document.createElement('h2');
    secondCat.classList.add('category');
    secondCat.textContent = "PIZZA";
    menu.appendChild(secondCat);

    //Create and append PIZZA dishes
    //first item
    const firstPizzaTitle = document.createElement('span');
    firstPizzaTitle.classList.add('item-title');
    firstPizzaTitle.textContent = "Pizza Margherita - $18";
    menu.appendChild(firstPizzaTitle);
    const firstPizzaDesc = document.createElement('p');
    firstPizzaDesc.classList.add('item-desc');
    firstPizzaDesc.textContent = "Tomato Sauce, Mozzarella, Basil";
    menu.appendChild(firstPizzaDesc);

    //second item
    const secondPizzaTitle = document.createElement('span');
    secondPizzaTitle.classList.add('item-title');
    secondPizzaTitle.textContent = "Bacon - $20";
    menu.appendChild(secondPizzaTitle);
    const secondPizzaDesc = document.createElement('p');
    secondPizzaDesc.classList.add('item-desc');
    secondPizzaDesc.textContent = "Bechamel, Mozzarella, Brie";
    menu.appendChild(secondPizzaDesc);

    //third item
    const thirdPizzaTitle = document.createElement('span');
    thirdPizzaTitle.classList.add('item-title');
    thirdPizzaTitle.textContent = "Pizza Pepperoni - $21";
    menu.appendChild(thirdPizzaTitle);
    const thirdPizzaDesc = document.createElement('p');
    thirdPizzaDesc.classList.add('item-desc');
    thirdPizzaDesc.textContent = "Tomato Sauce, Mozzarella, Veal Pepperoni";
    menu.appendChild(thirdPizzaDesc);

    //Create and append third category
    const thirdCat = document.createElement('h2');
    thirdCat.classList.add('category');
    thirdCat.textContent = "DESSERT";
    menu.appendChild(thirdCat);

    const dessertTitle = document.createElement('span')
    dessertTitle.classList.add('item-title');
    dessertTitle.textContent = "Sfogliatelle - $11";
    menu.appendChild(dessertTitle);

    const desertDesc = document.createElement('p');
    desertDesc.classList.add('item-desc');
    desertDesc.textContent = "Pastry shells filled with a sweet ricotta and citrus-flavored filling";
    menu.appendChild(desertDesc);

    return menu;

}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;