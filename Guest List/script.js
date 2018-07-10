const guestArray = [];
const addGuest = text => guestArray.push(`<li>${text}</li>`);
const addGuestToEnd = text => guestArray.push(`<li>${text}</li>`);
const addGuestToStart = text => guestArray.unshift(`<li>${text}</li>`);
const removeFirst = () => guestArray.shift();
const removeLast = () => guestArray.pop();
const reverseList = () => guestArray.reverse();

function drawGuests(){
    document.getElementById("guests").innerHTML = guestArray.join(' ');
}

function editGuest(action) {
    let text = document.getElementById("name").value;
    switch (action) {
        case 'add':
            addGuest(text);
            break;
        case 'addEnd':
            addGuestToEnd(text);
            break;
        case 'addStart':
            addGuestToStart(text);
            break;
        case 'removeFirst':
            removeFirst();
            break;
        case 'removeLast':
            removeLast();
            break;
        case 'reverseList':
            reverseList();
            break;
    }
    drawGuests();
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", e => {
        editGuest(e.target.id);
    })
});
