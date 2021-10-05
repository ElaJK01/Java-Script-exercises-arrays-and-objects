function hasValueDepth(obj, str){
    let valuesArray = Object.values(obj)

    for (let i=0; i< valuesArray.length; i++){
        if (valuesArray[i] === str ) {
            return true
        } else if (typeof valuesArray[i] === "object" && valuesArray[i] !== null){
            return hasValueDepth(valuesArray[i], str)
        } 
         
    } return false
}


const obj = {
    "hello": "world",
    "goDeeper": {
        1961: "Barack Obama",
        1964: "Michelle Obama",
        1935: "Elvis Presley",
        1984: {
                "author": "George Orwell",
                "genre": "dystopia",
        }
    }
}

console.log(hasValueDepth(obj, "hello"))         // false 
console.log(hasValueDepth(obj, "Elvis Presley")) // true
console.log(hasValueDepth(obj, "author"))        // false
console.log(hasValueDepth(obj, "dystopia"))      // true 

