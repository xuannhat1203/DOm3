let image = document.getElementById("image");
let h1Elements = document.getElementsByTagName("h1");
let i = 1;
let j = 0.1;
function changeH1Value() {
  h1Elements[0].innerText = i.toString() + "%";
  image.style.opacity = j;
  i++;
  j+=0.01;
  if(i==101){
    clearInterval(intervalId);
    return;
  }
}
let intervalId = setInterval(changeH1Value, 20);