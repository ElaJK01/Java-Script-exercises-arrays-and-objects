/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
function translate(dict, phrase) {
  const keysTab = phrase.split(' ');
  const translation = [];
  for (let i = 0; i < keysTab.length; i++) {
    if (Object.keys(dict).includes(keysTab[i])) {
      translation.push(dict[keysTab[i]]);
    } else {
      throw new Error(`missing value: ${keysTab[i]}`);
    }
  } return translation.join(' ');
}

try {
  console.log(translate({
    je: 'I',
    suis: 'am',
    pere: 'father',
    ton: 'your' }, 'je suis ton pere')); // 'I am your father'

  console.log(translate({
    the: 'le',
    cute: 'mignon',
    your: 'ton',
    dog: 'chien',
    is: 'est' }, 'the dog is cute')); // 'le chien est mignon'
  console.log(translate({
    the: 'le',
    cute: 'mignon',
    your: 'ton',
    dog: 'chien',
    is: 'est' }, 'the dog is fluffy')); // 'Error: missing value'
} catch (err) {
  console.error(err);
}
