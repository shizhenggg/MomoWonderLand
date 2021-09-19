
const updateInventory = (itemx,stat) => {
    for(item in inventoryList){
        if(inventoryList[item]['name']==itemx){
            inventoryList[item]['holding']=stat
        }
    }
    showInventory()
    // console.log(inventoryList)
}



const inventoryList = {
    item1: {
    name: 'robodog',
    holding:false,
    space: 4
    },
    item2: {
    name: 'matchbox',
    holding:false,
    space: 1
    },
    item3: {
    name: 'radio',
    holding:false,
    space: 3
    },
    item4: {
    name: 'pouch',
    holding:false,
    space: 0
    },
    item5: {
    name: 'thermometer',
    holding:false,
    space: 1
    }
}

let holdingList = []
let holdingSpace = 5 

const showInventory = () => {
 for(item in inventoryList){
     // add items tagged with true
     if(inventoryList[item]['holding']===true && holdingList.indexOf(inventoryList[item]['name'])=== -1)
     holdingList.push(inventoryList[item]['name'])

     //remove items tagged with false
     if(inventoryList[item]['holding']===false && holdingList.indexOf(inventoryList[item]['name'])!== -1){
     let indexFound = holdingList.indexOf(inventoryList[item]['name'])
     holdingList.splice(indexFound,1)

 }
}
    // console.log(holdingList)
    // maybe can have popup that said, *item* added to backpack or maybe add a sound 
}

