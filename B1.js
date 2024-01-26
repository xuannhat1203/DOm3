let button1 = document.getElementById("btn");
let button2 = document.getElementById("btn2");
let input = document.getElementsByClassName("arround");
console.log(input);
button2.onclick = function(){
    let i = 0;
    let interval = setInterval(function() {
        if (i >= input.length) {
            clearInterval(interval);
            return;
        }
        input[i].style.backgroundColor = "aqua";
        i++;
    }, 1000);
}
button1.onclick = function(){
    let i = input.length - 1;
    let interval = setInterval(function() {
        if (i < 0) {
            clearInterval(interval);
            return;
        }
        input[i].style.backgroundColor = "white";
        i--;
    }, 1000);
}