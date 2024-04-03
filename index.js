// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


function destructivelyAppendCat(name) {
cats.push("Ralph")
return cats;
};

function destructivelyPrependCat(name) {

cats.unshift("Bob");
return cats;

};

function destructivelyRemoveLastCat() {
cats.pop();
return cats;
}

function destructivelyRemoveFirstCat() {

cats.shift();
return cats;

}

function appendCat(name) {
const copyOfCats = [...cats];

copyOfCats.push("Broom");
return copyOfCats;

}

function prependCat(name) {
const copyOfCats = [...cats];
copyOfCats.unshift("Arnold");
return copyOfCats;

}

function removeLastCat() {
const copyOfCats = [...cats];
copyOfCats.pop();
return copyOfCats;

}

function removeFirstCat() {
const copyOfCats = [...cats];
copyOfCats.shift();
return copyOfCats
}