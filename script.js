function start() {
    const divs = createDiv();
    toggleColor(divs);
}

function createDiv() {
    const container = document.querySelector(".container");
    for (let a = 0; a < 16 * 16; a++) {
        const div = document.createElement("div");
        container.appendChild(div);
    }
    return container.childNodes;
}

function toggleColor(divs) {
    for (div of divs) {
        if (div.tagName === "DIV") {
            div.addEventListener('mouseover', function () {
                this.classList.add("hoverColor");
            });
            div.addEventListener('mouseout', function() {
                this.classList.remove("hoverColor");
            });
        }
    }
}

start();