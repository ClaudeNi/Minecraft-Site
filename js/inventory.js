

const inventory = {
    "pickaxe": false,
    "axe": false,
    "shovel": false,
    "dirt": 0,
    "cobblestone": 0,
    "oak log": 0,
    "oak leaves": 0,
};

export function add(block) {
    inventory[block] += 1;
}

export function remove(block) {
    inventory[block] -= 1;
}