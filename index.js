// Text to Binary
const inputElement = document.querySelector(".input-text");
const outputElement = document.getElementById("Output-binary");
function encode(){
    console.log(23324);
    let inputText = inputElement.value;
    let outputArray = [];
    for (var i = 0; i < inputText.length; i++) {
    outputArray.push(inputText.charCodeAt(i).toString(2));
     };
     outputElement.innerHTML = outputArray.join(" ");
}
// Binary to Text
 const decode = () => {
    const BinaryInput = document.querySelector(".input-binary").value;
    const res = BinaryInput.split(' ').map(b => parseInt(b,2)).map(num => String.fromCharCode(num)).join('');
    document.getElementById("Output-text").innerText = res;
 }