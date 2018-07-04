

function triangle(number) {
    let result = ' ';
    for (let i = 0; i <= number; i++) {
        for (let j = 0; j < i; j++) {
            result = result + '*';
        }
        result = `${result}<br>`;
    }
    return result;
}


function pyramid(number){
    result = ' ';
    for (let i = 0; i <= number; i++) {
        let space = '';
        let star = '';
        for (let k = number; k > i; k--){
            space = space + '&nbsp';
        }
        for (let j = 0; j < i; j++) {
            star = star + '*' + '&nbsp';
        }
        result = result + space + star;
        result = `${result}<br>`;
    }
    return result;
}

 function revPyramid(number){
    result = ' ';
    for (let i = 0; i < number; i++) {
        let space = '';
        let star = '';
        for (let k = 1; k <= i; k++){
            space = space + '&nbsp';
        }
        for (let j = number; j > i; j--) {
            star = star + '*' + '&nbsp';
        }
        result = result + space + star;
        result = `${result}<br>`;
    }
    return result;
 }






function draw(action){
    let number = Number(document.getElementById("number").value);
    switch (action) {
        case 'triangle':
            document.getElementById("answer").innerHTML = triangle(number);
            break;
        case 'pyramid':
            document.getElementById("answer").innerHTML = pyramid(number);
            break;
        case 'rev-pyramid':
            document.getElementById("answer").innerHTML = revPyramid(number);
            break;
        case 'clear':
            document.getElementById("answer").innerHTML = null;
            document.getElementById("number").value = null;
            break;
    }

}


document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", e => {
        draw(e.target.id);
    })
});




