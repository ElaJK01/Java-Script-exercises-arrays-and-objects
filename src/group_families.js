function groupFamilies(tab){
let familie = new Object()

for (let i=0; i<tab.length; i++) {
    surname = tab[i]["surname"]
    familie[surname] = new Array() 
    
}
for (let j=0; j<tab.length; j++){
    surname = tab[j]["surname"]
    familie[surname].push(tab[j]["name"])

}
  
    return familie
} 

console.log(groupFamilies([
    {"name": "Barack",   "surname": "Obama"},
    {"name": "Michelle", "surname": "Obama"}]
)) // { Obama: [ 'Barack', 'Michelle' ] } 

console.log(groupFamilies([
    {"name": "Barack",   "surname": "Obama"},
    {"name": "Michelle", "surname": "Obama"},
    {"name": "Donald",   "surname": "Trump"}]
)) // { Obama: [ 'Barack', 'Michelle' ], Trump: [ 'Donald' ] }
