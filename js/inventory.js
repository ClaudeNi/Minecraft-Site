const inventory = document.querySelectorAll(".slot");
const inventoryArr = [...inventory];

const tools = {
    pickaxe: {
        selected: false,
        mine: ["stone", "cobblestone",],
    },
    axe: {
        selected: false,
        mine: ["dirt",],
    },
    shovel: {
        selected: false,
        mine: ["grass", "dirt",],
    },
};

const items = {
    dirt: {
        selected: false,
        count: 0,
    },
    cobblestone: {
        selected: false,
        count: 0,
    },
    log: {
        selected: false,
        count: 0,
    },
    leaves: {
        selected: false,
        count: 0,
    },


}

inventoryArr.forEach((slot, i) => {
    slot.addEventListener("click", () => {
        select(i);
    });
});

function select(i) {
    inventory[i].classList.toggle("selected");
    unselect(i);
}

function unselect(i) {
    inventoryArr.forEach((el, j) => {
        if (i != j) {
            inventory[j].classList.remove("selected");
        }
    })
}

export function add(block) {
    items[block] += 1;
}

export function decrease(block) {
    items[block] -= 1;
}