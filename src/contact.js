function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    //first paragraph
    const p1 = document.createElement('p');
    const locationIcon = document.createElement('i');
    locationIcon.classList.add('fa-solid', 'fa-location-dot');
    p1.appendChild(locationIcon);
    p1.textContent = "Via dei Tribunali, 179/180, 80139 Napoli"
    contact.appendChild(p1);

    //second paragraph
    const p2 = document.createElement('p');
    const clockIcon = document.createElement('i');
    clockIcon.classList.add('fa-solid', 'fa-clock');
    p2.appendChild(clockIcon);
    p2.textContent = "Open daily between the hours: 12:00-00:00";
    contact.appendChild(p2);

    //third paragraph
    const p3 = document.createElement('p');
    const volumeIcon = document.createElement('i');
    volumeIcon.classList.add('fa-solid', 'fa-phone-volume');
    p3.appendChild(volumeIcon);
    p3.textContent = "Open daily between the hours: 12:00-00:00";
    contact.appendChild(p3);

    //FORM
    const form = createForm();
    contact.appendChild(form);

    return contact;
}

function createForm() {
    const form = document.createElement('form');
    form.method = 'get';

    //Create and append header
    const title = document.createElement('h1');
    h1.textContent = "CONTACT US";
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
    email.placeholder = 'email';
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
    message.placeholder = 'message';
    message.name = 'message';
    form.appendChild(message);

    //Create and append SEND BUTTON 
    const button = document.createElement('button');
    button.setAttribute('id', 'send-btn');
    button.textContent = 'SEND';
    form.appendChild(button);

    return form;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;