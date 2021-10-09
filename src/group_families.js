/* eslint-disable quote-props */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
function groupFamilies(tab) {
  const familie = {};

  for (let i = 0; i < tab.length; i++) {
    const surname = tab[i].surname;
    familie[surname] = [];
  }
  for (let j = 0; j < tab.length; j++) {
    const surname = tab[j].surname;
    familie[surname].push(tab[j].name);
  }

  return familie;
}

console.log(groupFamilies([
  { 'name': 'Barack', 'surname': 'Obama' },
  { 'name': 'Michelle', 'surname': 'Obama' }])); // { Obama: [ 'Barack', 'Michelle' ] }

console.log(groupFamilies([
  { 'name': 'Barack', 'surname': 'Obama' },
  { 'name': 'Michelle', 'surname': 'Obama' },
  { 'name': 'Donald', 'surname': 'Trump' }])); // { Obama: [ 'Barack', 'Michelle' ], Trump: [ 'Donald' ] }
