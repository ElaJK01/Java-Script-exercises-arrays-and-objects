function hasValue(object, value){
    const valuesArray = Object.values(object)
    for (let i=0; i< valuesArray.length; i++){
        if (valuesArray[i] === value ) {
            return true
        } else {
            return false
        }
    }

}


console.log(hasValue({"hello": "bonjour", "my": "mon"}, "bonjour")) // true
console.log(hasValue({"hello": "bonjour", "my": "mon"}, "hello"))   // false
console.log(hasValue({"hello": "bonjour", "my": "mon"}, "tasty"))   // false
