
//need a function to only add when it's true 
// remove when it's false
const updateInventory = (itemx,status) => {
    for(item in inventoryList){
        if(inventoryList[item]['name']==itemx){
            inventoryList[item]['holding']=status
        }
    }
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
    console.log(holdingList)
}

const node2 = () => {
    const ans2 = 5
    if(ans2){
        updateInventory('robodog',true)
        showInventory()
        console.log(inventoryList)
        // node3()
    
    }else if (ans2==='Leave it'){
        alert('You tripped and fell to your depth in a 10m pit...you die.')
    }
    else{alert('Please type take it or Leave it')}
}

node2()

