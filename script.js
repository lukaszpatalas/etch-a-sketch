function createDiv() {
    const container = document.querySelector(".container");
    for(let a = 0; a < 16 * 16; a++) {
        const div = document.createElement("div");
        container.appendChild(div);
    }
    return container.childNodes;
}

function start() {
    const createdDivs = createDiv();
}


/* for (child in container.childNodes) {
    if (container.childNodes.hasOwnProperty(child)) {
        console.log(child);
    }
} */

createDiv();