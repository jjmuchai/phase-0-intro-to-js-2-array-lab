// Write your solution here!
// Initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// Destructive functions (modifies the original array)
function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Non-destructive functions (returns a new array, keeping the original intact)
function appendCat(name) {
    return [...cats, name]; // Creates a new array with the new cat added at the end
}


function prependCat(name) {
    return [name, ...cats]; // Creates a new array with the new cat added at the beginning
}

function removeLastCat() {
    return cats.slice(0, -1); // Creates a new array excluding the last cat
}

function removeFirstCat() {
    return cats.slice(1); // Creates a new array excluding the first cat
}