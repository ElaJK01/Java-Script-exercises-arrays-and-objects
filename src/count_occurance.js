function countOccurences(phrase){
    let phraseToStr = phrase.split(" ")
    let phraseObj =new Object()

    //tworzy obiekt do którego dodaje ile razy występują te same wartości
    let count = {}
    phraseToStr.forEach((element) => { count[element] = (count[element] || 0) +1 });
    
    
    //pętla po obiekcie w tórym w parach słowo - ile razy występuje. 
    for (key in count) {
        newKey = count[key]
        phraseObj[newKey] = new Array() 
           
    }

    
    for (key in count){
        newKey = count[key]
        phraseObj[newKey].push(key)
    
    }
   
 return phraseObj

}



console.log(countOccurences("hello is it you hello hello")) // {
// '1': [ 'is', 'it', 'you' ],
// '3': [ 'hello' ] 
// }

console.log(countOccurences("hey mama hey mama")) // {
// '2': [ 'hey', 'mama' ]
// } 
