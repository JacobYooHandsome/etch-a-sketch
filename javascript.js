const canvas = document.querySelector(".container");

createCanvas();

let mouseDown = false;
let eraser = false;

const canvasBtn = document.querySelector("#grid");
canvasBtn.addEventListener('click', createCanvas);

const eraseBtn = document.querySelector('#erase');
eraseBtn.addEventListener('click', () => eraser = !eraser);

function createCanvas() {
    clearCanvas();
    let size = parseInt(prompt("How many pixels do you want your canvas to be?"));
    if (size > 100) {
        size = 100;
    }
    else if (size <= 0) {
        size = 1;
    }
    let px = 700 / size;
    for (let i = 0; i < size; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.cssText = "display: flex; justify-content: center;"
        for (let i = 0; i < size; i++) {
            const newerDiv = document.createElement("div");
            newerDiv.style.cssText = `width: ${px}px; height: ${px}px;`
            newerDiv.classList.add("pixel");
            newerDiv.interactedTimes = 0;
            newerDiv.addEventListener("mouseover", () => {
                if (mouseDown && !eraser) {
                    if (newerDiv.classList.contains("shade1")) {
                        newerDiv.classList.remove("shade1");
                        newerDiv.classList.add("shade2");
                    }
                    else if (newerDiv.classList.contains("shade2")) {
                        newerDiv.classList.remove("shade2");
                        newerDiv.classList.add("shade3");
                    }
                    else if (newerDiv.classList.contains("shade3")) {
                        newerDiv.classList.remove("shade3");
                        newerDiv.classList.add("shade4");
                    }
                    else {
                        newerDiv.classList.add("shade1");
                    }
                }
                else if (mouseDown && eraser) {
                    newerDiv.className = '';
                    newerDiv.classList.add("pixel");
                }
            });
            newerDiv.addEventListener("click", () => {
                if (newerDiv.classList.contains("shade1")) {
                        newerDiv.classList.remove("shade1");
                        newerDiv.classList.add("shade2");
                }
                else if (newerDiv.classList.contains("shade2")) {
                    newerDiv.classList.remove("shade2");
                    newerDiv.classList.add("shade3");
                }
                else if (newerDiv.classList.contains("shade3")) {
                    newerDiv.classList.remove("shade3");
                    newerDiv.classList.add("shade4");
                }
                else {
                    newerDiv.classList.add("shade1");
                }
            });
            newDiv.appendChild(newerDiv);
        }
        canvas.appendChild(newDiv);
    }
}

function clearCanvas() {
    while(canvas.firstElementChild) {
        canvas.firstElementChild.remove();
    }
}

document.addEventListener('mousedown', () => mouseDown = true);
document.addEventListener('mouseup', () => mouseDown = false);