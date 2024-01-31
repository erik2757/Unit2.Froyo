 /*
 3 vanilla
 1 strawberry
 2 coffee
 */ 

 const order = prompt("enter flavors here seperated by commas")

 console.log(typeof order)

 const orderArray = order.split(',')

 console.log(orderArray)
 // I have an array of flavors at this point 

/*
{
'vanilla': 3,
'coffee': 2, 
'strawberry': 1,
}
*/

let flavorObj = { }

/* HOW TO ADD OBJECTS 
//adding vanilla 
// dot notation is preferred when you know the key
flavorObj.vanilla = 'value'
flavorObj['vanilla'] = 7 

// dot notation does not work with variable key values 
// use bracket notation instead 
flavorObj[MysteryVar] = 'with brackets' 
flavorObj.MysteryVar = 'with dot'
*/

// loop to go thru every flavor 
for(let i = 0; i < orderArray.length; i++) {
    let currentFlavor = orderArray[i].toLowerCase().trim()
//   console.log(i, currentFlavor)

    if(flavorObj[currentFlavor] === undefined){
//if i havent seen it before set to 1 
//setting it to 1 
    flavorObj[currentFlavor] = 1 
} else { 
// or adding 1 to whats already there
    flavorObj[currentFlavor] += 1 
}
}



console.log(flavorObj)