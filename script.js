function main() {
    const divs = createDiv(16);
    toggleColor(divs);
    setSize();
}

function createDiv(size) {
    const container = document.querySelector(".container");
    for (let a = 0; a < size * size; a++) {
        const div = document.createElement("div");
        div.classList.add("div");
        container.appendChild(div);
    }
    return container.childNodes;
}

function toggleColor(divs) {
    for (div of divs) {
        if (div.tagName === "DIV") {
            div.addEventListener('mouseover', (e) => {
                e.currentTarget.classList.add("hoverColor");
            });
            div.addEventListener('mouseout', (e) => {
                e.currentTarget.classList.remove("hoverColor");
            });
        }
    }
}

function setSize() {
    const sizeButton = document.querySelector("#size");
    sizeButton.addEventListener('click', () => {
        const size = prompt("How many grids per side?");
        removeDivs();
        createDiv(size); 
    })
}

function removeDivs() {
    const container = document.querySelector(".container");
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

main();