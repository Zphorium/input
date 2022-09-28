
function changeColor() {
var input = document.getElementById('input').value;
var body = document.getElementsByTagName('body')[0];
 if (input === "p125"){
    body.style.backgroundColor = "yellow";
 }
 if (input === "p225"){
    body.style.backgroundColor = "red";
 }
 if (input === "p325"){
    body.style.backgroundColor = "green";
 }
}
