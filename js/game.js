// import { readyScreen } from "./playScreen.js";
// import {} from "./inventory.js";

const landingPage = document.getElementById("landing-page");
const startBtn = document.querySelector(".start-btn");
const playScreen = document.querySelector(".play-screen");


const screenWidth = document.querySelector(".width-input");

const inventoryScreen = document.querySelector(".inventory");
const inventory = document.querySelectorAll(".slot");
const inventoryArr = [...inventory];

const dirtEl = document.querySelector(".inventory .dirt")
const cobblestoneEl = document.querySelector(".inventory .cobblestone")
const logEl = document.querySelector(".inventory .log")
const leavesEl = document.querySelector(".inventory .leaves")

// the LandingPage area -----------------------------------------
startBtn.addEventListener("click", () => {
    landingPage.classList.toggle("display-none");
    playScreen.classList.toggle("display-none");
    inventoryScreen.classList.toggle("display-none");
    draw();
});

// the PlayScreen area -----------------------------------------
const blocksObj = {
    0: "stone",
    stone: 0,
    1: "dirt",
    dirt: 1,
    2: "grass",
    grass: 2,
    3: "log",
    log: 3,
    4: "leaves",
    leaves: 4,
    5: "cloud",
    cloud: 5,
    6: "none",
    none: 6,
    7: "cobblestone",
    cobblestone: 7,
};

const mineable = {
    canMine: ["dirt", "grass", "stone", "cobblestone", "log", "leaves"],
    cantMine: [
      "none",
      "cloud",
    ],
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
    
    // add tree logs
    for (let i = 13; i > 11; i--) {
        for (let j = 2; j < 3; j++) {
            
            blocksMatrix[i][j] = 3;
        }
    }

    // add leaves
    for (let i = 11; i > 9; i--) {
        for (let j = 1; j < 4; j++) {
            blocksMatrix[i][j] = 4;
        }
    }
}

function draw() {
    readyScreen();
    for (let i = 0; i < blocksMatrix.length; i++) {
        for (let j = 0; j < blocksMatrix[i].length; j++) {
            const block = document.createElement("div");
            block.classList.add(blocksObj[blocksMatrix[i][j]]);
            block.addEventListener("click", useSlot, false);
            block.setAttribute("x", j);
            block.setAttribute("y", i);
            playScreen.appendChild(block);
            // block.style.height = blockDimensions + "px";
            // block.style.width = blockDimensions + "px";
        }
    }
}

function useSlot(e) {
    if (isSlotSelected()){
        switch (selectedItem) {
            case "pickaxe":
            case "axe":
            case "shovel":
            case "shears":
                isMineable(e);
                break;
            default:
                isPlaceable(e.target);
                break;
        }
    }
}

function isMineable(e) {
    if (tools[selectedItem].includes(e.target.classList.value))
    if (
        mineable.canMine.includes(e.target.classList.value) &&
        isAccessible(e.target)
      ) {}
}

function isAccessible(tile) {
    const x = parseInt(tile.getAttribute("x"));
    const y = parseInt(tile.getAttribute("y"));
    const tileType = tile.classList.value;
    if (
        blocksMatrix[y][x + 1] === 6 ||
        blocksMatrix[y][x - 1] === 6 ||
        blocksMatrix[y - 1][x] === 6 ||
        blocksMatrix[y + 1][x] === 6
    ) {
        add(tileType);
        blocksMatrix[y][x] = 6;
        tile.classList.remove(tileType);
        tile.classList.add(blocksObj[6]);
    }
}

function isSlotSelected() {
    if (selectedItem == "none") {
        return false;
    }
    return true;
}

function isPlaceable(tile) {
    if (items[selectedItem] > 0) {
        const x = parseInt(tile.getAttribute("x"));
        const y = parseInt(tile.getAttribute("y"));
        let tileType = tile.classList.value;
        if (
            (blocksMatrix[y][x + 1] != 6 ||
            blocksMatrix[y][x - 1] != 6 ||
            blocksMatrix[y - 1][x] != 6 ||
            blocksMatrix[y + 1][x] != 6) &&
            tileType === "none"
        ) {
            decrease(selectedItem);
            blocksMatrix[y][x] = blocksObj[selectedItem];
            tile.classList.remove(tileType);
            tile.classList.add(selectedItem);
        }
    } 
}

// the Inventory area ------------------------------------------

let selectedItem = "none";

const tools = {
    pickaxe: ["stone", "cobblestone",],
    axe: ["log",],
    shovel: ["grass", "dirt",],
    shears: ["leaves",],
};

const items = {
    dirt: 0,
    cobblestone: 0,
    log: 0,
    leaves:0,
}

inventoryArr.forEach((slot, i) => {
    slot.addEventListener("click", () => {
        select(i);
    });
});

function select(i) {
    inventory[i].classList.toggle("selected");
    selectedItem = inventory[i].classList[0]
    unselect(i);
}

function unselect(i) {
    inventoryArr.forEach((el, j) => {
        if (i != j) {
            inventory[j].classList.remove("selected");
        }
    });
    if (!inventory[i].classList.contains("selected")) {
        selectedItem = "none"
      }
}

function add(block) {
    switch (block) {
        case "grass":
        case "dirt":
            dirtEl.textContent = `${items.dirt + 1}`;
            items.dirt++;
            break;
        case "stone":
        case "cobblestone":
            cobblestoneEl.textContent = `${items.cobblestone + 1}`;
            items.cobblestone++;
            break;
        case "log":
            logEl.textContent = `${items.log + 1}`;
            items.log++;
            break;
        case "leaves":
            leavesEl.textContent = `${items.leaves + 1}`;
            items.leaves++;
            break;
    }
}

function decrease(block) {
    switch (block) {
        case "dirt":
            dirtEl.textContent = `${items.dirt - 1}`;
            items.dirt--;
            break;
        case "stone":
        case "cobblestone":
            cobblestoneEl.textContent = `${items.cobblestone - 1}`;
            items.cobblestone--;
            break;
        case "log":
            logEl.textContent = `${items.log - 1}`;
            items.log--;
            break;
        case "leaves":
            leavesEl.textContent = `${items.leaves - 1}`;
            items.leaves--;
            break;
    }
}