// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  console.log(drivers.push(name));
}
// destructivelyAppendDriver("Brenda");

function destructivelyPrependDriver(name) {
  console.log(drivers.unshift(name));
}
// destructivelyPrependDriver("Carolina");

function destructivelyRemoveLastDriver() {
  console.log(drivers.pop());
}
// destructivelyRemoveLastDriver();

function destructivelyRemoveFirstDriver() {
  console.log(drivers.shift());
}
// destructivelyRemoveFirstDriver();

function appendDriver(name) {
  const newArr = [...drivers, name];
  return newArr;
}
// console.log(appendDriver("Brenda"));

function prependDriver(name) {
  const newArr = [name, ...drivers];
  return newArr;
}
// console.log(prependDriver("Brenda"));

function removeLastDriver() {
  const newArr = drivers.slice(0, -1);
  return newArr;
}
// console.log(removeLastDriver());

function removeFirstDriver() {
  const newArr = drivers.slice(1);
  return newArr;
}
// console.log(removeFirstDriver());
