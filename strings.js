// bad
const name1 = "Capt. Janeway";

// bad - template literals should contain interpolation or newlines
const name2 = `Capt. Janeway`;

// good
const name3 = 'Capt. Janeway';

// bad
function sayHi(name) {
    return 'How are you, ' + name + '?';
}

// bad
function sayHi(name) {
    return ['How are you, ', name, '?'].join();
}

// bad
function sayHi(name) {
    return `How are you, ${name}?`;
}

// good
function sayHi(name) {
    return `How are you, ${name}?`;
}