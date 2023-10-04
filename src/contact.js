function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');


    contact.appendChild(createParagraph("fa-location-dot", "Via dei Tribunali, 179/180, 80139 Napoli"));
    contact.appendChild(createParagraph("fa-clock", "Open daily between the hours: 12:00-00:00"));
    contact.appendChild(createParagraph("fa-phone-volume", "+39 081 1874 5627"));

    //FORM
    contact.appendChild(createForm());

    return contact;
}

function createForm() {
    const form = document.createElement('form');
    form.method = 'get';

    //Create and append header
    const title = document.createElement('h1');
    title.textContent = "CONTACT US";
    form.appendChild(title);

    //Create and append NAME input
    const name = document.createElement('input');
    name.type = 'text';
    name.placeholder = "NAME";
    name.required = true;
    form.appendChild(name);

    //Create and append EMAIL input
    const email = document.createElement('input');
    email.type = 'email'
    email.id = 'email';
    email.name = 'email';
    email.placeholder = 'EMAIL';
    email.required = true;
    form.appendChild(email);

    //Create and append TELEPHONE input
    const tel = document.createElement('input');
    tel.type = 'tel';
    tel.placeholder = "TELEPHONE";
    tel.name = 'tel';
    tel.id = 'tel';
    form.appendChild(tel);

    //Create and append MESSAGE input
    const message = document.createElement('input');
    message.type = 'text';
    message.id = 'message'
    message.placeholder = 'MESSAGE';
    message.name = 'message';
    form.appendChild(message);

    //Create and append SEND BUTTON 
    const button = document.createElement('button');
    button.setAttribute('id', 'send-btn');
    button.textContent = 'SEND';
    form.appendChild(button);

    return form;
}

function createParagraph(iconClass, text) {
    const p = document.createElement('p');
    const icon = document.createElement('i');
    icon.classList.add('fa-solid', iconClass);
    p.textContent = text;

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    iconContainer.appendChild(icon);
    iconContainer.appendChild(p);

    return iconContainer;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;