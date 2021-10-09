/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
function countOccurences(phrase) {
  const phraseToStr = phrase.split(' ');
  const phraseObj = {};

  // tworzy obiekt do którego dodaje ile razy występują te same wartości
  const count = {};
  phraseToStr.forEach((element) => { count[element] = (count[element] || 0) + 1; });

  // pętla po obiekcie w którym pary: słowo - ile razy występuje.
  for (key in count) {
    const newKey = count[key];
    phraseObj[newKey] = [];
  }

  for (key in count) {
    const newKey = count[key];
    phraseObj[newKey].push(key);
  }

  return phraseObj;
}

console.log(countOccurences('hello is it you hello hello')); // {
// '1': [ 'is', 'it', 'you' ],
// '3': [ 'hello' ]
// }

console.log(countOccurences('hey mama hey mama')); // {
// '2': [ 'hey', 'mama' ]
// }
