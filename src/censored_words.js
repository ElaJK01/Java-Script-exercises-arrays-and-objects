/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
function rmCensored(wordsObject) {
  // tworze dwie listy składające się z kluczy i wartości
  const keysTable = Object.keys(wordsObject);
  const valuesTable = Object.values(wordsObject);
  // sprawdzam czy w tablicy z kluczami znajduje się słowo z "*"
  for (let i = 0; i < keysTable.length; i++) {
    if (keysTable[i].includes('*')) {
      const todeleteKey = keysTable[i];
      delete wordsObject[todeleteKey]; // usuwa z obiektu properties z kluczami zawierającymi "*"
    }
    // sprawdzam czy w tablicy z wartościami są słowa z "*"
    for (let j = 0; j < valuesTable.length; j++) {
      if (valuesTable[j].includes('*')) {
        // dla wartości z "*" szuka odpowiadającego klucza
        const keyOfValue = Object.keys(wordsObject).find((key) => wordsObject[key] === valuesTable[j]);
        delete wordsObject[keyOfValue]; // usuwa z obiektu prperties z kluczem, którego wartość zawiera "*"
      }
    }
  } return wordsObject;
}

const swearWords = {
  's*it': 'm*rde', 'sweet jesus': 'doux jesus', 'f***': '', omg: 'w*sh',
};
console.log(rmCensored(swearWords));
console.log(swearWords); // { 'sweet jesus': 'doux jesus' }

const veggies = {
  potato: 'starch', 'spin*ch': 'green', collard: 'green', tomato: 'fr*it',
};
console.log(rmCensored(veggies));
console.log(veggies); // { potato: 'starch', collard: 'green' }
