function sortWords (wordsTab) {
    const wordsObject = new Object()
    wordsObject["odd"] =[]
    wordsObject["even"] = []
    for (let i=0; i < wordsTab.length; i++) {
        if (wordsTab[i].length % 2 === 0){
            wordsObject["even"].push(wordsTab[i])
        } else {
            wordsObject["odd"].push(wordsTab[i])
        } 
    } return wordsObject


}


console.log(sortWords([])) // {
// odd:  [],
// even: []
// }

console.log(sortWords(["work", "hard", "mommy"])) // {
// odd:  [ 'mommy' ],
// even: [ 'work', 'hard' ]
// }

console.log(sortWords(["oh!", "ah!", "hi", "my"])) // {
// odd:  [ 'oh!', 'ah!' ],
// even: [ 'hi', 'my' ] 
// }
