const playScreen = document.querySelector(".play-screen");
const screenWidth = document.querySelector(".width-input");

const blocksObj = {
    0: "stone",
    1: "dirt",
    2: "grass",
    3: "log",
    4: "leaves",
    5: "cloud",
    6: "none",
};

const blocksMatrix = [];

// const blockDimensions = screenWidth.value / 30;

function readyScreen() {
    playScreen.style.width = screenWidth.value + "px";
    // ready an appropirate matrix
    for (let i = 0; i < 20; i++) {
        blocksMatrix.push([]);
        for (let j = 0; j < 30; j++) {
            blocksMatrix[i].push(6);
        }
    }

    // fill in the stone layers
    for (let i = 19; i > 16; i--) {
        for (let j = 0; j <  blocksMatrix[i].length; j++) {
            blocksMatrix[i][j] = 0;
        }
    }

    // fill in the dirt
    for (let i = 16; i > 14; i--) {
        for (let j = 0; j <  blocksMatrix[i].length; j++) {
            blocksMatrix[i][j] = 1;
        }
    }

    // fill in the grass
    for (let i = 14; i > 13; i--) {
        for (let j = 0; j <  blocksMatrix[i].length; j++) {
            blocksMatrix[i][j] = 2;
        }
    }
}

export function draw() {
    readyScreen();
    for (let i = 0; i < blocksMatrix.length; i++) {
        for (let j = 0; j < blocksMatrix[i].length; j++) {
            const block = document.createElement("div");
            block.classList.add(blocksObj[blocksMatrix[i][j]]);
            block.setAttribute("x", j);
            block.setAttribute("y", i);
            playScreen.appendChild(block);
            // block.style.height = blockDimensions + "px";
            // block.style.width = blockDimensions + "px";
        }
    }
}












// const blocksMatrix = [
//     [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,],
//     [6, 6, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,],
//     [6, 6, 6, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 6, 6, 6, 6,],
//     [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 6, 6, 6,],
//     [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,],
//     [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,],
//     [6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,],
//     [6, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,],
//     [6, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,],
//     [6, 6, 3, 6, 6, 6, 6, 2, 2, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6,],
//     [6 ,6 ,3, 6, 2, 2, 2, 1, 1, 2, 2, 6, 6, 6, 6, 6, 4, 6, 6, 6,],
//     [2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 6, 6, 3, 6, 6, 6,],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2,],
//     [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
//     [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
// ];

// export function draw() {
//     for (let i = 0; i < blocksMatrix.length; i++) {
//         for (let j = 0; j < blocksMatrix[i].length; j++) {
//             const block = document.createElement("div");
//             block.classList.add(blocksObj[blocksMatrix[i][j]]);
//             block.classList.add("square");
//             block.setAttribute("x", j);
//             block.setAttribute("y", i);
//             playScreen.appendChild(block)
//         }
//     }
// }

// const blocksMatrix = [
//     ["none","none","cloud","cloud","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none",],
//     ["none","cloud","cloud", "none","none","none","none","none","none","none","none","none","none","none","cloud","cloud","none","none","none","none",],
//     ["none","none","none", "none","none","none","none","none","none","none","none","none","none","cloud","cloud","cloud","cloud","none","none","none",],
//     ["none","none","none", "none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none",],
//     ["none","none","leaves", "none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none",],
//     ["none","leaves","leaves", "leaves","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none",],
//     ["none","leaves","leaves", "leaves","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none",],
//     ["none","none","log", "none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none",],
//     ["none","none","log", "none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none",],
//     ["grass","grass","dirt", "grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass",],
//     ["dirt","dirt","dirt", "dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt",],
//     ["dirt","dirt","dirt", "dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt",],
//     ["dirt","dirt","dirt", "dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt",],
//     ["stone","stone","stone", "stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone",],
//     ["stone","stone","stone", "stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone",],
//     ["stone","stone","stone", "stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone",],
//     ["stone","stone","stone", "stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone",],
//     ["stone","stone","stone", "stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone",],
//     ["stone","stone","stone", "stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone",],
//     ["stone","stone","stone", "stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone","stone",],
// ];