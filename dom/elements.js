//createElement - cria um novo elemento HTML
let section = document.querySelector('.section_messages');

function sendMessage() {
    let input = document.querySelector('.input_message');
    let message = input.value;
    let messageElement = document.createElement('div');
    let messageText = document.createElement('p');
    messageText.innerText = message;
    messageElement.append(messageText);

    section.append(messageElement);
}

function clearMessages() {
    section.innerHTML = " ";
}

let sendButton = document.querySelector('#send');
sendButton.addEventListener("click", ()=> (sendMessage()));

let clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", clearMessages);

//append - adiciona um ou mais elementos HTML ao final de um elemento pai

//appendChild - adiciona um novo elemento HTML ao final de um elemento pai

//removeChild - remove um elemento filho de um elemento pai

//replaceChild - substitui um elemento filho de um elemento pai por outro elemento

//insertBefore - insere um novo elemento HTML antes de um elemento filho de um elemento pai