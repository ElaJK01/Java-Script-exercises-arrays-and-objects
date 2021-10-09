/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-multiple-empty-lines */

function replaceArray(tab) {
  for (let i = 0; i < tab.length; i++) {
    if (tab[i][0] === 'h' || tab[i][0] === 'H') {
      const newTabElement = tab[i].toUpperCase();
      // eslint-disable-next-line no-param-reassign
      tab[i] = newTabElement;
    }
  } return tab;
}


console.log(replaceArray(['banana', 'suit', 'hammer'])); // [ 'banana', 'suit', 'HAMMER' ]
console.log(replaceArray(['Hello', 'there'])); // [ 'HELLO', 'there' ]
console.log(replaceArray(['Hey!', 'hey...'])); // [ 'HEY!', 'HEY...' ]
