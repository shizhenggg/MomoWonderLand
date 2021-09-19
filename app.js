// check health function 
// check item function 
// check storage function 
    // show name 
    // show storage space taken (optional)
// function to display questions, image, option to front-end at every node (callback)


class Node {
    constructor(qns,b1option,b2option,imageurl){
        this.qns = qns
        this.b1option = b1option
        this.b2option = b2option
        this.imageurl = imageurl
        this.start = this.start.bind(this)
    }

    start(){
        $('.startingphoto').attr('src',this.imageurl)
        // Set new image
        $('#option-buttons').empty()
        // Empty option buttons in case user clicks on it before question finishes loading -> causes a bug
        this.displayQns()
    }
    displayQns(){
    // $('.questionbox').typedText(this.qns,()=>{this.displayBoptions()})
    $('.questionbox').text(this.qns)
    this.displayBoptions()
    }

    displayBoptions(){
    let $btn1 = $('<button>').attr('id','button1').addClass('button')
    let $btn2 = $('<button>').attr('id','button2').addClass('button')
    $('#option-buttons').addClass('option-buttons')
    $('#option-buttons').append($btn1)
    $btn1.typedText(this.b1option)
    $('#option-buttons').append($btn2)
    $btn2.typedText(this.b2option)
    this.nextNode()
    }

    setNode(btn1nn,btn2nn){
        this.btn1nn = btn1nn
        this.btn2nn = btn2nn
    }

    nextNode(){
    $('#button1').click(this.btn1nn.start)
    $('#button2').click(this.btn2nn.start)
    }

    showInventory(){
    // Check inventory with globally defined inventory list and display inventory on UI
    }
}

class NodeWithItemsUpdates extends Node {
    constructor(qns,b1option,b2option,imageurl,itemx,stat,itemUrl){
        super(qns,b1option,b2option,imageurl);
        this.itemx = itemx
        this.stat = stat
        this.itemUrl = itemUrl
        this.updateItem = this.updateItem.bind(this)

    
    }

    start(){
        $('.startingphoto').attr('src',this.imageurl)
        // Set new image
        $('#option-buttons').empty()
        // Empty option buttons in case user clicks on it before question finishes loading -> causes a bug
        this.displayQns()
        this.updateItem()
        // redefining start function with added updateItem method
    }

    updateItem(){
    updateInventory(this.itemx,this.stat)
    this.showItem()
    }

    showItem(){
        let $item = $('<div>').addClass('inventory').append(`<img id="${this.itemx}" src=${this.itemUrl}/>`)
        $('.container').append($item)
    }

}

class NodewithMoMoGen extends Node {
    constructor(qns,b1option,b2option,imageurl){
    super(qns,b1option,b2option,imageurl)
    }

    nextNode(){
        $('#button1').click(this.momogen)
        $('#button2').click(this.momogen)
        }

    setSurviveNode(surviveNode){
        this.surviveNode = surviveNode
    }

    momogen(){
    let randomGen = Math.ceil(Math.random()*10)
    console.log(this.surviveNode)
    console.log(node2)
    if(randomGen<=1){
        alert('MOMO APPEARED, YOU DIE')
    }else{
        this.surviveNode.start()
    }
        //cannot read properties of undefined (reading 'start')
    }  
    }



    


    // if(ans2==='take it'){
    //     updateInventory('matchbox',true)
    //     // updateInventory('robodog',true)
    //     showInventory()
    //     console.log(inventoryList)
    //     const $holdinglistDiv = $('<div class="holdinglist">').append('<img id="matchstick" src="https://previews.123rf.com/images/nikiteev/nikiteev1706/nikiteev170600027/80570006-vector-cartoon-open-matchbox-on-white-background.jpg" />')
    //     $('.container').append($holdinglistDiv)
        // prompt('changing image to robot dog')
        // $('#matchstick').attr("src","https://thumbs.dreamstime.com/z/spot-robot-dog-vector-flat-graphic-illustration-industrial-sensing-remote-operation-needs-mini-guard-robo-arm-200826649.jpg")



// Inventory ==backpack
// function to tick true after node 

