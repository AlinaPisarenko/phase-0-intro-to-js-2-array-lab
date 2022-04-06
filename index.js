const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push("Ralph");
}
function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name) {
  const catsCopy = cats.slice();
  catsCopy.push("Broom");
  return catsCopy;
}
function prependCat(name) {
  const catsCopy = cats.slice();
  catsCopy.unshift("Arnold");
  return catsCopy;
}
function removeLastCat(name) {
  const catsCopy = cats.slice();
  catsCopy.pop();
  return catsCopy;
}
function removeFirstCat(name) {
  const catsCopy = cats.slice();
  catsCopy.shift();
  return catsCopy;
}
