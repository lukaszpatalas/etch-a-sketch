function main() {
    const divs = createDiv(16);
    toggleColor(divs);
    setSize();
}

function createDiv(size) {
    let gridSize = size;
    const container = document.querySelector(".container");
    if (gridSize > 100) {
        gridSize = 16;
    }
    let root = document.documentElement;
    for (let a = 0; a < gridSize * gridSize; a++) {
        const div = document.createElement("div");
        div.classList.add("div");
        root.style.setProperty('--width', `calc(800px/${gridSize})`);
        root.style.setProperty('--height', `calc(800px/${gridSize})`);
        root.style.setProperty('--grid-size', `${gridSize}`);
        container.appendChild(div);
    }
    return container.childNodes;
}

function toggleColor(divs) {
    let root = document.documentElement;
    for (div of divs) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        if (div.tagName === "DIV") {
            div.addEventListener('mouseover', (e) => {
                root.style.setProperty('--hover-color', `#${randomColor}`);
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
        const size = prompt("How many grids per side? MAX 100");
        removeDivs();
        const divs = createDiv(size);
        toggleColor(divs);
    })
}

function removeDivs() {
    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

main();