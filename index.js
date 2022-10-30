// Text to Binary
const inputElement = document.querySelector(".input-text");
const outputElement = document.getElementById("Output-binary");
function encode(){
    let inputText = inputElement.value;
    let outputArray = [];
    for (var i = 0; i < inputText.length; i++) {
    outputArray.push(inputText.charCodeAt(i).toString(2));
     };
     outputElement.innerHTML = outputArray.join(" ");
};
// Binary to Text
 const decode = () => {
    const BinaryInput = document.querySelector(".input-binary").value;
    const res = BinaryInput.split(' ').map(b => parseInt(b,2)).map(num => String.fromCharCode(num)).join('');
    document.getElementById("Output-text").innerText = res;
 };
 // m/s to km/h
 const km = () => {
   const ms = document.querySelector(".MS").value;
   const outputKmh = document.getElementById("Output-kmh");
   const kmh = ms * 3.6;
   outputKmh.innerHTML = kmh;
 }