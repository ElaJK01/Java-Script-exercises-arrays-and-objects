/* eslint-disable no-console */
function displayFullName(name) {
  const array = name.split(' ');
  return `My name is ${array[array.length - 1]}, ${name}.`;
}

console.log(displayFullName('James Bond'));
console.log(displayFullName('Ada Lovelace')); // My name is Lovelace, Ada Lovelace
console.log(displayFullName('Salvador Felipe Jacinto Dalí')); // My name is Dalí, Salvador Felipe Jacinto Dalí
