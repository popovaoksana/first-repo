function multiplayer(element) {
    return element * 10;
}

const array = [0, 1, 2, 3];

const bigArray = array.map(multiplayer);

console.log({ bigArray });