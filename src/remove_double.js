function removeDouble(arr) {
  return arr.filter((value, index) => {
    return arr.indexOf(value) === index
  })
   
};



let stuff = ["suit", "clock", "butter", "suit"];
console.log(stuff)
console.log(removeDouble(stuff))
console.log(stuff)

// [ 'clock', 'butter', 'suit' ] 


let mixed = ["hello", "hello", 23, -3, 23, "hello"]
console.log(removeDouble(mixed))
console.log(mixed)
// [ -3, 23, 'hello' ]  

let someStuff = ["kot", "dog", "kot", "pies"]
console.log(removeDouble(someStuff))
console.log(someStuff)