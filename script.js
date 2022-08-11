function createDiv() {
    const container = document.querySelector(".container");
    for (let a = 0; a < 16 * 16; a++) {
        const div = document.createElement("div");
        container.appendChild(div);
    }
    container.childNodes[3].classList.toggle("hoverColor");
    return container.childNodes;
}

function start() {
    const createdDivs = createDiv();

    for (let a = 3; a < 10; a++) {
        if (createdDivs.hasOwnProperty(a)) {
            console.log(createdDivs[a]);
        }
    }
}

function toggleColor(div) {
    div.classList.toggle("hoverColor");
}

/* for (child in container.childNodes) {
    if (container.childNodes.hasOwnProperty(child)) {
        console.log(child);
    }
} */

start();