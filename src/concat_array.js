function concatArray(tab) {
  str = tab.join(" ")
  str = str + "."
  return str
  
};


console.log(concatArray(["Hello", "this", "is", "dog"])) // 'Hello this is dog.'
console.log(concatArray(["All", "I", "want", "for", "christmas", "is", "you"])) // 'All I want for christmas is you.'
console.log(concatArray([])) // '.'