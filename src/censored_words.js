function rmCensored(wordsObject) {
    //tworze dwie listy składające się z kluczy i wartości
    const keysTable = Object.keys(wordsObject)
    const valuesTable = Object.values(wordsObject)
    //sprawdzam czy w tablicy z kluczami znajduje się słowo z "*"
    for (let i=0; i<keysTable.length; i++){
        if (keysTable[i].includes("*")){
            let todeleteKey = keysTable[i]
            delete wordsObject[todeleteKey] //usuwa z obiektu properties z kluczami zawierającymi "*"
        } 
    //sprawdzam czy w tablicy z wartościami są słowa z "*"    
    for (let j=0; j< valuesTable.length; j++){
        if (valuesTable[j].includes("*")){
            const keyOfValue = Object.keys(wordsObject).find((key) => wordsObject[key]=== valuesTable[j] ) //dla wartości z "*" szuka odpowiadającego klucza
            delete wordsObject[keyOfValue] //usuwa z obiektu prperties z kluczem, którego wartość zawiera "*"
        }
    }    
    } return wordsObject
    

}


const swearWords = {"s*it": "m*rde", "sweet jesus": "doux jesus", "f***": "", "omg": "w*sh"};
console.log(rmCensored(swearWords))
console.log(swearWords) // { 'sweet jesus': 'doux jesus' }

const veggies = {"potato": "starch", "spin*ch": "green", "collard": "green", "tomato": "fr*it"}
console.log(rmCensored(veggies))
console.log(veggies) // { potato: 'starch', collard: 'green' } 

