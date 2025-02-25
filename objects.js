// bad
const obj = new Object();

// good 
const item = {};

function getKey(k) {
    return `a key named ${k}`;
}

// bad 
const newObj = {
    id: 5,
    name: 'San Francisco',
};

obj[getKey('enabled')] = true;

// good 
const goodObj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
}

// bad 
const atom = {
    value: 1,

    addValue: function (value) {
        return atom.value + value;
    },
};

// good 
const atomObj = {
    value: 1,

    addValue(value) {
        return atomObj.value + value;
    }
}

const lukeSkywalker = 'Luke Skywalker';

// bad
const badObj = {
    lukeSkywalker: lukeSkywalker,
};

// good
const goodObject = {
    lukeSkywalker,
};

// Group your shorthand properties at the beginning of your object declaration.

const anakinSkywalker1 = 'Anakin Skywalker';
const lukeSkywalker1 = 'Luke Skywalker';

// bad
const objectBad = {
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    lukeSkywalker1,
    episodeThree: 3,
    mayTheFourth: 4,
    anakinSkywalker1,
};

// good
const objectGood = {
    lukeSkywalker1,
    anakinSkywalker1,
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    episodeThree: 3,
    mayTheFourth: 4,
};


const original = { a: 1, b: 2 };
const copyWithC = { ...original, c: 3 };
const {b, ...noB} = copyWithC; 

console.log(copyWithC);
console.log(noB); 
