let firstQ = prompt("please enter a list of froyo flavors seperated by commmas")

let onlineOrder = firstQ.split(",")
console.log(onlineOrder)


function froyo (flavorsOrdered){
    const HowManyFlavors = {}
    for (let i = 0; i < flavorsOrdered.length; i++)
   

    if (HowManyFlavors [currentFlavor] === undefined){
            HowManyFlavors[currentFlavor] = 1;
    }
    console.log(HowManyFlavors)
}


