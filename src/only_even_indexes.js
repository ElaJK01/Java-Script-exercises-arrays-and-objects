/* eslint-disable no-console */
function evenIndexes(txt) {
  const tab = txt.split('');
  const tab2 = tab.filter((value, index) => index % 2 === 0);
  return tab2;
}

console.log(evenIndexes('lol')); // [ 'l', 'l' ]
console.log(evenIndexes("You're weird")); // [ 'Y', 'u', 'r', ' ', 'e', 'r' ]
console.log(evenIndexes('')); // [ ]
