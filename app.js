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
        this.nextNode = this.nextNode.bind(this)
        this.setNode = this.setNode.bind(this)
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
        let $item = $('<div>').addClass('inventory').append(`<img class="items" src="${this.itemUrl}"/>`)
        $('.container').append($item)
    }

}
class NodewithMoMoGen extends Node {
    constructor(qns,b1option,b2option,imageurl){
    super(qns,b1option,b2option,imageurl)
    this.momogen = this.momogen.bind(this)
    this.setNode = this.setNode.bind(this)
    this.setSurviveNode = this.setSurviveNode.bind(this)
    // you need to bind because if you don't, when you invoke momogen and reference this.surviveNode, it only reference momogen itself and can't find this.surviveNode
    // by binding it, you allow the momogen to search through the whole class instead 
    // to bind method, you have to do this like this -> this.method = this.method.bind(this), you have to do 'this.method' after the = sign because that's how you reference functions in a class 
    }

    start(){
        $('.startingphoto').attr('src',this.imageurl)
        // Set new image
        $('#option-buttons').empty()
        // Empty option buttons in case user clicks on it before question finishes loading -> causes a bug
        // redefining start function with added updateItem method
        this.setNode()
        this.displayQns()
    }

    setNode(){
        this.btn1nn = this.momogen
        this.btn2nn = this.momogen
    }

    nextNode(){
        $('#button1').click(this.btn1nn)
        $('#button2').click(this.btn2nn)
        }


    setSurviveNode(surviveNode){
        this.surviveNode = surviveNode
    }

    momogen(){
    let randomGen = Math.ceil(Math.random()*10)
    console.log('this.surviveNode:',this.surviveNode)//undefined
    console.log(randomGen)
    if(randomGen<=1){
        alert('MOMO APPEARED, YOU DIE')
        // cue game over screen
        // go back to game screen
    }
    else{
        this.surviveNode.start() 
        //is undefined even tho it was declared previously in nodelist.js
    }
        //cannot read properties of undefined (reading 'start')
    }  
    }
class NodewithMoMoGen2 extends NodewithMoMoGen{
    setNode(){
        this.btn1nn = this.momogen
        this.btn2nn = this.surviveNode.start
    }
}

class StoryNode {
    constructor(story,option,imageurl){
        this.story = story
        this.option = option
        this.imageurl = imageurl
        this.start = this.start.bind(this)
    }

    start(){
        $('.startingphoto').attr('src',this.imageurl)
        // Set new image
        $('#option-buttons').empty()
        // Empty option buttons in case user clicks on it before question finishes loading -> causes a bug
        this.displayStory()
    }
    displayStory(){
    $('.questionbox').typedText(this.story,()=>{this.displayBoptions()})
    // $('.questionbox').text(this.story)
    // this.displayBoptions()
    }

    displayBoptions(){
    let $storybtn = $('<button>').attr('id','storybutton').addClass('story-button')
    $('#option-buttons').addClass('option-buttons')
    $('#option-buttons').append($storybtn)
    $storybtn.typedText(this.option)
    this.nextNode()
    }

    setNode(storynn){
        this.storynn = storynn
    }

    nextNode(){
    $('#storybutton').click(this.storynn.start)
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

