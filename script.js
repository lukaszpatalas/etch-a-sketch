function createDiv() {
    const container = document.querySelector(".container");
    for(let a = 0; a < 16 * 16; a++) {
        const div = document.createElement("div");
        container.appendChild(div);
    }
}

createDiv();