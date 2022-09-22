// Text to Binary
const inputElement = document.querySelector(".input-text");
const outputElement = document.getElementById("Output-binary");
// console.log(input,output);

inputElement.addEventListener("input", (event)=>{
    let inputText = event.target.value; 
    let outputArray = [];
    for (var i = 0; i < inputText.length; i++) {
        outputArray.push(inputText.charCodeAt(i).toString(2));
    }
    outputElement.innerHTML = outputArray.join(" ");
});