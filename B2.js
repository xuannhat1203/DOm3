let button = document.getElementById("btn");
let spans = document.getElementsByTagName("span");
console.log(spans);
let count = 1;
for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        for (let j = 0; j < spans.length; j++) {
            spans[j].style.position = "relative";
            spans[j].style.left = "80px";
            spans[j].style.bottom = "30px";
        }
        if (count % 2 !== 0) {
            let input = document.createElement("input");
            input.type = "text";
            input.placeholder = "search";
            input.style.width = "178px";
            input.style.height = "30px";
            button.appendChild(input);
            button.style.width = "200px";
            button.style.height = "42px";
            button.appendChild(spans[i]);
        } else {
            let input = button.getElementsByTagName("input")[0];
            button.removeChild(input);
            button.style.width = "50px";
            for (let j = 0; j < spans.length; j++) {
                spans[j].style.position = "relative";
                spans[j].style.left = "0px";
                spans[j].style.bottom = "0px";
            }
        }
        count++;
    }
}