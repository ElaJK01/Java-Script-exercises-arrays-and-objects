function translate(dict, phrase) {
    const keysTab = phrase.split(" ")
    let translation = []
    for (let i=0; i <keysTab.length; i++) {
        if (Object.keys(dict).includes(keysTab[i])) {
            translation.push(dict[keysTab[i]])
        } else {
            return `Error: missing value: ${keysTab[i]}`
        } 
    } return translation.join(" ")



}



console.log(translate({
    "je": "I",
    "suis": "am",
    "pere": "father",
    "ton": "your"}, "je suis ton pere"
)) // 'I am your father'

console.log(translate({
    "the": "le",
    "cute": "mignon",
    "your": "ton",
    "dog": "chien",
    "is": "est"}, "the dog is cute"
)) // 'le chien est mignon'

console.log(translate({
    "the": "le",
    "cute": "mignon",
    "your": "ton",
    "dog": "chien",
    "is": "est"}, "the dog is fluffy"
)) // 'Error: missing value'
