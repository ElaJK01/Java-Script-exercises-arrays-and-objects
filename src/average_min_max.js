function averageMinMax(tab) {
  let average = ([...tab].reduce((a, b) => { return a+b}))/ tab.length
  console.log(`Wartość maksymalna tablicy: ${Math.max(...tab)}, wartość minimalna tablicy: ${Math.min(...tab)}, średnia tablicy: ${average}`)
};



averageMinMax([-42, 0, 42])   // Min: -42 Max: 42 Average: 0
averageMinMax([30, 20, 100])  // Min: 20 Max: 100 Average: 50
averageMinMax([-23, -4, -12]) // Min: -23 Max: -4 Average: -13

