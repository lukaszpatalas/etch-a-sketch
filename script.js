function createDiv() {
    const container = document.querySelector(".container");
    for (let a = 0; a < 16 * 16; a++) {
        const div = document.createElement("div");
        container.appendChild(div);
    }
    return container.childNodes;
}

// Think of the way how to pass this parameter to toggle in standalone function
// https://stackoverflow.com/questions/9812445/can-i-pass-this-as-a-parameter-to-another-function-in-javascript

function start() {
    const createdDivs = createDiv();
    // Zmien na for each
    for (div of createdDivs) {
        if (div.tagName === "DIV") {
            div.addEventListener('click', function() {
                this.classList.toggle("hoverColor");
            });
        }
    }
}

function toggleColor(div) {
    div.classList.toggle("hoverColor");
}

start();