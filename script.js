let iteration = 0;
let color = "#4c4c4c";

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
        if (div.tagName === "DIV") {
            div.addEventListener('mouseover', (e) => {
                if (iteration < 10) {
                    switch (iteration) {
                        case 0:
                        color = "#e5e5e5";
                        break;
                        case 1:
                        color = "#ccc";
                        break;
                        case 2:
                        color = "#b2b2b2";
                        break;
                        case 3:
                        color = "#999";
                        break;
                        case 4:
                        color = "#7f7f7f";
                        break;
                        case 5:
                        color = "#666";
                        break;
                        case 6:
                        color = "#4c4c4c";
                        break;
                        case 7:
                        color = "#333";
                        break;
                        case 8:
                        color = "#191919";
                        break;
                        case 9:
                        color = "#000";
                        break;
                    }
                }
                root.style.setProperty('--hover-color', `${color}`);
                e.currentTarget.classList.add("hoverColor");
                iteration++;
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