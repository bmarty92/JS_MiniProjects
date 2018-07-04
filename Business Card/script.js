// funkcija kuri yra kvieciama visada rasoma auksciau funkcijos kuri ja kviecia

const writeItems = (name, email, address, number, description)=> {
    document.getElementById("output-name").innerHTML =  name;
    document.getElementById("output-email").innerHTML = email;
    document.getElementById("output-address").innerHTML = address;
    document.getElementById("output-number").innerHTML = number;
    document.getElementById("output-description").innerHTML = description;
};

const getItems = ()=> {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const address = localStorage.getItem('address');
    const number = localStorage.getItem('number');
    const description = localStorage.getItem('description');
    writeItems(name, email, address, number, description);
};

const generateBusinessCard = ()=> {
    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const number = document.getElementById("number").value;
    const description = document.getElementById("description").value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('address', address);
    localStorage.setItem('number', number);
    localStorage.setItem('description', description);
    writeItems(name, email, address, number, description);
};

document.getElementById("submit").addEventListener("click", generateBusinessCard );

window.addEventListener("load", getItems );





