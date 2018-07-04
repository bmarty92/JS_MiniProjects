
function calc(action){
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let ans = null;
    switch (action) {
        case 'sum':
            ans = number1 + number2;
            break;
        case 'subtract':
            ans = number1 - number2;
            break;
        case 'divide':
            ans = number1 / number2;
            break;
        case 'multiply':
            ans = number1 * number2;
            break;
        case 'modulus':
            ans = number1 % number2;
            break;
        case 'clear':
            number1 = null;
            number2 = null;
            break;
    }
    document.getElementById("answer").innerHTML = ans;
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", e => {
        calc(e.target.id);
    })
});





