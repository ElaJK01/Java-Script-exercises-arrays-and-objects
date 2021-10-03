function evenIndexes(txt) {
  let tab = txt.split("")
  let tab2 = tab.filter((value, index, arr)=> {
    return index % 2 === 0
      
  }); return tab2
};




console.log(evenIndexes("lol")) // [ 'l', 'l' ]
console.log(evenIndexes("You're weird")) // [ 'Y', 'u', 'r', ' ', 'e', 'r' ]
console.log(evenIndexes("")) // [ ]
