// audio not playing on first load even though unmute button is clicked, a refresh is required. 


// variables that classes will use
// momogennum is used to set probability of momo appearing in momogen (10 is 100%, 0 is 0%)
const momogennum = 4
// speed determines the time in ms between each typed character for the .questionbox
let speed = 40


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
         // Also clears option-buttons from previous nodes
        this.displayQns()
    }
    displayQns(){
    $('.questionbox').typedText(this.qns,speed,()=>{this.displayBoptions()})

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


}

// class with only 1 option that leads to momogen
class NodewithMoMoGen extends Node {
    constructor(qns,b1option,b2option,imageurl){
    super(qns,b1option,b2option,imageurl)
    this.momogen = this.momogen.bind(this)
    this.setNode = this.setNode.bind(this)
    this.setSurviveNode = this.setSurviveNode.bind(this)
    this.momogenJumpScare = this.momogenJumpScare.bind(this)
    this.start = this.start.bind(this)
    // you need to bind because if you don't, when you invoke momogen and reference this.surviveNode, it only reference momogen itself and can't find this.surviveNode
    // by binding it, you allow the momogen to search through the whole class instead 
    // to bind method, you have to do this like this -> this.method = this.method.bind(this), you have to do 'this.method' after the = sign because that's how you reference functions in a class 
    }

    start(){
        $('.startingphoto').attr('src',this.imageurl)
        $('#option-buttons').empty()
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

    momogenJumpScare(){

        $('#option-buttons').empty()
        let audio = new Audio('assets/sound/momojumpscare.mp3')
        if($("audio").prop('muted')===false){
            audio.play()}

        function wait(ms){
            return new Promise(resolve=>{
                setTimeout(()=>{resolve('')},ms)
            })
        }
        //async await to set time on certain actions 
        async function momoJumpScare(){
        $('.startingphoto').attr('src','assets/Image/momojumpscare.png')
        $('.startingphoto').addClass('shake')
        $('.questionbox').hide()
        $('.homebtn').hide()
        $('.items').hide()
        $('#option-buttons').hide()
        // hiding divs to have momo in full view
        await wait(2000)
        $('.startingphoto').removeClass('shake')
        $('.startingphoto').attr('src','assets/Image/youdied.png')
        await wait(3000)
        $('.startingphoto').attr('src','')
        $('.questionbox').show()
        $('#option-buttons').show()
        $('.homebtn').show()
        // showing divs after hiding previously
        homePageScreen.start()
        }

        momoJumpScare() 
    
    }

    momogen(){
    let randomGen = Math.ceil(Math.random()*10)
    if(randomGen<=momogennum){
       this.momogenJumpScare()
    }
    else{
        this.surviveNode.start() 
    }
    }  
}

// class with 2 options, 1 of which leads to momogen
class NodewithMoMoGen2 extends NodewithMoMoGen{
    start(){
        $('.startingphoto').attr('src',this.imageurl)
        $('#option-buttons').empty()
        this.displayQns()
    }
    setNode(btn2nn){
        this.btn1nn = this.momogen
        this.btn2nn = btn2nn
    }
    nextNode(){
        $('#button1').click(this.btn1nn)
        $('#button2').click(this.btn2nn.start)
        }

}

class NodewithMoMoGen2WithItemsUpdates extends NodewithMoMoGen2 {
    constructor(qns,b1option,b2option,imageurl,itemx,stat,itemUrl){
        super(qns,b1option,b2option,imageurl)
        this.itemx = itemx
        this.stat = stat
        this.itemUrl = itemUrl
        this.updateItem = this.updateItem.bind(this)

    }

    start(){
        $('.startingphoto').attr('src',this.imageurl)
        $('#option-buttons').empty()
        this.displayQns()
        this.updateItem()
    }

    updateItem(){
        if(this.stat === true){
        let $item = $('<div>').addClass('inventory').append(`<img class="items" id="${this.itemx}" src="${this.itemUrl}"/>`)
        $('.container').prepend($item)}
        if(this.stat === false){
        $(`#${this.itemx}`).closest('.inventory').remove()
    }
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
        // Also clears option-buttons from previous nodes
        this.displayQns()
        this.updateItem()
        // redefining start function with added updateItem method
    }


    updateItem(){
        if(this.stat === true){
        let $item = $('<div>').addClass('inventory').append(`<img class="items" id="${this.itemx}" src="${this.itemUrl}"/>`)
        $('.container').prepend($item)}
        if(this.stat === false){
        $(`#${this.itemx}`).closest('.inventory').remove()
        // if you just use remove() on this.itemx, there will be the parents div of class inventory left thats why there will be empty space
        // .closest('.inventory').remove() starts with current element and climbs up and searches for the element with class of inventory and remove the whole div, making sure there will not be empty spaces between items when the middle item is removed
    }
    }

}

class NodeWithVideo {
    constructor(story,btn1option,btn2option,videourl){
        this.story = story
        this.btn1option = btn1option
        this.btn2option = btn2option
        this.videourl = videourl
        this.removeVideo = this.removeVideo.bind(this)
        this.start = this.start.bind(this)
    }

    start(){
        $('.startingphoto').hide()
        let $video = $('<source>').attr('src',this.videourl).attr('type','video/mp4').addClass('video')
        let $gameVideo = $('<video autoplay loop id=gamevideo>').append($video)
        $('.gamewindow').prepend($gameVideo)
        $('#option-buttons').empty()
        this.displayQns()
    }

    displayQns(){
    $('.questionbox').typedText(this.story,speed,()=>{this.displayBoptions()})


    }
  
    displayBoptions(){
    let $btn1 = $('<button>').attr('id','button1').addClass('button')
    let $btn2 = $('<button>').attr('id','button2').addClass('button')
    $('#option-buttons').addClass('option-buttons')
    $('#option-buttons').append($btn1)
    $btn1.typedText(this.btn1option)
    $('#option-buttons').append($btn2)
    $btn2.typedText(this.btn2option)
    this.nextNode()
    }

    setNode(btn1nn,btn2nn){
        this.btn1nn = btn1nn
        this.btn2nn = btn2nn
    }

    nextNode(){
    $('#button1').click(()=>{
        this.removeVideo()
        this.btn1nn.start()
        //need parenthesis as the .start() is inside a callback function and not directly in .click()
    })
       
    $('#button2').click(()=>{
        this.removeVideo()
        this.btn2nn.start()
    })
    
    }

    removeVideo(){
        $('video').remove()
        $('.startingphoto').attr('src','')
        $('.startingphoto').show()
    }

}

class NodeWithVideoAndItemsUpdates {
    constructor(story,btn1option,btn2option,videourl,itemx,stat,itemUrl){
        this.story = story
        this.btn1option = btn1option
        this.btn2option = btn2option
        this.videourl = videourl
        this.itemx = itemx
        this.stat = stat
        this.itemUrl = itemUrl 
        this.removeVideo = this.removeVideo.bind(this)
        this.updateItem = this.updateItem.bind(this)
        this.start = this.start.bind(this)
    }

    start(){
        $('.startingphoto').hide()
        let $video = $('<source>').attr('src',this.videourl).attr('type','video/mp4').addClass('video')
        let $gameVideo = $('<video autoplay loop id=gamevideo>').append($video)
        $('.gamewindow').prepend($gameVideo)
        $('#option-buttons').empty()
        this.displayQns()
        this.updateItem()
    }

    displayQns(){
    $('.questionbox').typedText(this.story,speed,()=>{this.displayBoptions()})

    }
  
    displayBoptions(){
    let $btn1 = $('<button>').attr('id','button1').addClass('button')
    let $btn2 = $('<button>').attr('id','button2').addClass('button')
    $('#option-buttons').addClass('option-buttons')
    $('#option-buttons').append($btn1)
    $btn1.typedText(this.btn1option)
    $('#option-buttons').append($btn2)
    $btn2.typedText(this.btn2option)
    this.nextNode()
    }

    setNode(btn1nn,btn2nn){
        this.btn1nn = btn1nn
        this.btn2nn = btn2nn
    }

    nextNode(){
    $('#button1').click(()=>{
        this.removeVideo()
        this.btn1nn.start()
    })
       
    $('#button2').click(()=>{
        this.removeVideo()
        this.btn2nn.start()
    })
    
    }

    removeVideo(){
        $('video').remove()
        $('.startingphoto').attr('src','')
        $('.startingphoto').show()
    }

    updateItem(){
        if(this.stat === true){
        let $item = $('<div>').addClass('inventory').append(`<img class="items" id="${this.itemx}" src="${this.itemUrl}"/>`)
        $('.container').prepend($item)}
        if(this.stat === false){
        $(`#${this.itemx}`).closest('.inventory').remove()
    }
    }

}

//also used to make GameDeathNode
class StoryNode {
    constructor(story,option,imageurl){
        this.story = story
        this.option = option
        this.imageurl = imageurl
        this.start = this.start.bind(this)
    }

    start(){
        $('.startingphoto').attr('src',this.imageurl)
        $('#option-buttons').empty()
        this.displayStory()
    }
    displayStory(){
    $('.questionbox').typedText(this.story,speed,()=>{this.displayBoptions()})
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

class StoryNodeWithItemsUpdates extends StoryNode {
    constructor(story,option,imageurl,itemx,stat,itemUrl){
    super(story,option,imageurl);
        this.story = story
        this.option = option
        this.imageurl = imageurl
        this.itemx = itemx
        this.stat = stat
        this.itemUrl = itemUrl 
        this.updateItem = this.updateItem.bind(this)
        this.start = this.start.bind(this)
    }

    start(){
        $('.startingphoto').attr('src',this.imageurl)
        $('#option-buttons').empty()
        this.displayStory()
        this.updateItem()
    }

    updateItem(){
        if(this.stat === true){
        let $item = $('<div>').addClass('inventory').append(`<img class="items" id="${this.itemx}" src="${this.itemUrl}"/>`)
        $('.container').prepend($item)}
        if(this.stat === false){
        $(`#${this.itemx}`).closest('.inventory').remove()
    }
    }

}

class StoryNodeWithVideo {
    constructor(story,option,videourl){
        this.story = story
        this.option = option
        this.videourl = videourl
        this.start = this.start.bind(this)
    }

    start(){
        $('.startingphoto').hide()
        let $video = $('<source>').attr('src',this.videourl).attr('type','video/mp4').addClass('video')
        let $gameVideo = $('<video autoplay loop id=gamevideo>').append($video)
        $('.gamewindow').prepend($gameVideo)
        $('#option-buttons').empty()
        this.displayStory()
    }
    displayStory(){
    $('.questionbox').typedText(this.story,speed,()=>{this.displayBoptions()})
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
    $('#storybutton').click(()=>{
        $('video').remove()
        $('.startingphoto').attr('src',"") // setting photo to blank so it wont flicker in color
        $('.startingphoto').show()
        this.storynn.start()
        }
    )}
}

class StoryNodeWithVideoAndItemsUpdates extends StoryNodeWithVideo {
    constructor(story,option,videourl,itemx,stat,itemUrl){
       super(story,option,videourl)
            this.story = story
            this.option = option
            this.videourl = videourl
            this.itemx = itemx
            this.stat = stat
            this.itemUrl = itemUrl 
            this.updateItem = this.updateItem.bind(this)
            this.start = this.start.bind(this)
    }

    start(){
        $('.startingphoto').hide()
        let $video = $('<source>').attr('src',this.videourl).attr('type','video/mp4').addClass('video')
        let $gameVideo = $('<video autoplay loop id=gamevideo>').append($video)
        $('.gamewindow').prepend($gameVideo)
        $('#option-buttons').empty()
        this.displayStory()
        this.updateItem()
    }

    updateItem(){
        if(this.stat === true){
        let $item = $('<div>').addClass('inventory').append(`<img class="items" id="${this.itemx}" src="${this.itemUrl}"/>`)
        $('.container').prepend($item)}
        if(this.stat === false){
        $(`#${this.itemx}`).closest('.inventory').remove()
    }
    }
}

class StoryNodeWithMoMoGen {
    constructor(story,option,imageurl){
        this.story = story
        this.option = option
        this.imageurl = imageurl
        this.start = this.start.bind(this)
        this.momogen = this.momogen.bind(this)
        this.setSurviveNode = this.setSurviveNode.bind(this)
        this.momogenJumpScare = this.momogenJumpScare.bind(this)
    }

    start(){
        $('.startingphoto').attr('src',this.imageurl)
        $('#option-buttons').empty()
        this.displayStory()
    }
    displayStory(){
    $('.questionbox').typedText(this.story,speed,()=>{this.displayBoptions()})
    }

    displayBoptions(){
        let $storybtn = $('<button>').attr('id','storybutton').addClass('story-button')
        $('#option-buttons').addClass('option-buttons')
        $('#option-buttons').append($storybtn)
        $storybtn.typedText(this.option)
        this.nextNode()
        }


    nextNode(){
    $('#storybutton').click(this.momogen)
    }

    setSurviveNode(surviveNode){
        this.surviveNode = surviveNode
    }


    momogenJumpScare(){

        $('#option-buttons').empty()
        let audio = new Audio('assets/sound/momojumpscare.mp3')
        if($("audio").prop('muted')===false){
            audio.play()}

        function wait(ms){
            return new Promise(resolve=>{
                setTimeout(()=>{resolve('')},ms)
            })
        }
        async function momoJumpScare(){
            $('.startingphoto').attr('src','assets/Image/momojumpscare.png')
            $('.startingphoto').addClass('shake')
            $('.questionbox').hide()
            $('.homebtn').hide()
            $('.items').hide()
            $('#option-buttons').hide()
            await wait(2000)
            $('.startingphoto').removeClass('shake')
            $('.startingphoto').attr('src','assets/Image/youdied.png')
            await wait(3000)
            $('.startingphoto').attr('src','')
            $('.questionbox').show()
            $('#option-buttons').show()
            $('.homebtn').show()
            homePageScreen.start()
            }
    
            momoJumpScare() 
    
    }


    momogen(){
    let randomGen = Math.ceil(Math.random()*10)
    if(randomGen<=momogennum){
        this.momogenJumpScare()
    }
    else{
        this.surviveNode.start() 
    }
    }  
}

class GameNodeWithMoMo {
    constructor(desc,videourl,answer){
        this.desc = desc
        this.videourl = videourl
        this.answer = answer
        this.start = this.start.bind(this)
        this.checkAnswer = this.checkAnswer.bind(this)
        this.momogen = this.momogen.bind(this)
        this.setSurviveNode = this.setSurviveNode.bind(this)
        this.momogenJumpScare = this.momogenJumpScare.bind(this)
    }

    start(){
        let $video = $('<source>').attr('src',this.videourl).attr('type','video/mp4').addClass('video')
        let $gameVideo = $('<video autoplay id=gamevideo>').append($video)
        $('.gamewindow').prepend($gameVideo)
        $('#option-buttons').empty()
        this.displayStory()
    }

    displayStory(){
    $('.questionbox').typedText(this.desc,speed,()=>{this.displayBoptions()})
    }

    displayBoptions(){
        let $gameinputbox = $('<input autocomplete="off">').attr('id','gameinput').addClass('game-input')
        $('#option-buttons').addClass('option-buttons')
        $('#option-buttons').append($gameinputbox)
        $('#gameinput').keyup((e)=>{
            if(e.key === 'Enter'){
            let $gameanswer = $('#gameinput').val().toLowerCase()
            this.checkAnswer($gameanswer)
            $('#gameinput').val("")
            e.preventDefault()
            }
        })
    }

    checkAnswer($gameanswer){
    if($gameanswer == this.answer){
        this.surviveNode.start()
        $('video').remove()
    }
    else{
        this.momogenJumpScare()
    }
    }

    setSurviveNode(surviveNode){
        this.surviveNode = surviveNode
    }


    momogenJumpScare(){

        $('#game-input').empty()
        let audio = new Audio('assets/sound/momojumpscare.mp3');
        if($("audio").prop('muted')===false){
            audio.play()}
        // momogen will have no sound if main audio is muted

        function wait(ms){
            return new Promise(resolve=>{
                setTimeout(()=>{resolve('')},ms)
            })
        }
        async function momoJumpScare(){
            $('.startingphoto').attr('src','assets/Image/momojumpscare.png')
            $('.startingphoto').addClass('shake')
            $('.questionbox').hide()
            $('.homebtn').hide()
            $('.items').hide()
            $('#option-buttons').hide()
            await wait(2000)
            $('.startingphoto').removeClass('shake')
            $('.startingphoto').attr('src','assets/Image/youdied.png')
            await wait(3000)
            $('.startingphoto').attr('src','')
            $('.questionbox').show()
            $('#option-buttons').show()
            $('.homebtn').show()
            homePageScreen.start()
            }
    
            momoJumpScare() 
    }


    momogen(){
    let randomGen = Math.ceil(Math.random()*10)
    if(randomGen<=momogennum){
        this.momogenJumpScare()
    }
    else{
        this.surviveNode.start() 
    }
    }  
}

class GameNodeWithGameDeathNode {
    constructor(desc,videourl,answer){
        this.desc = desc
        this.videourl = videourl
        this.answer = answer
        this.start = this.start.bind(this)
        this.checkAnswer = this.checkAnswer.bind(this)
        this.setSurviveNode = this.setSurviveNode.bind(this)
    }

    start(){
        let $video = $('<source>').attr('src',this.videourl).attr('type','video/mp4').addClass('video')
        let $gameVideo = $('<video autoplay loop id=gamevideo>').append($video)
        $('.gamewindow').prepend($gameVideo)
        $('#option-buttons').empty()
        this.displayStory()
    }

    displayStory(){
    $('.questionbox').typedText(this.desc,speed,()=>{this.displayBoptions()})
    }

    displayBoptions(){
        let $gameinputbox = $('<input autocomplete="off">').attr('id','gameinput').addClass('game-input')
        $('#option-buttons').addClass('option-buttons')
        $('#option-buttons').append($gameinputbox)
        $('#gameinput').keyup((e)=>{
            if(e.key === 'Enter'){
            let $gameanswer = $('#gameinput').val().toLowerCase()
            this.checkAnswer($gameanswer)
            $('#gameinput').val("")
            e.preventDefault()
            }
        })
    }

    checkAnswer($gameanswer){
    if($gameanswer == this.answer){
        $('video').remove()
        this.surviveNode.start()  
        

    }
    else{
        $('video').remove()
        gameDeathNode1.start()
    }
    }

    setSurviveNode(surviveNode){
        this.surviveNode = surviveNode}
    

}

class HomePage {
    constructor(videourl){
        this.videourl = videourl || 'assets/video/homepagevideo.mp4'
        this.start = this.start.bind(this)
    }

    start(){
        let $video = $('<source>').attr('src',`${this.videourl}`).attr('type','video/mp4').addClass('video')
        let $homePageVideo = $('<video autoplay muted loop id=homepagevideo>').append($video)
        // video must be muted to autoplay
        $('.gamewindow').prepend($homePageVideo)
        $('#option-buttons').empty()
        // Empty option buttons from previous nodes (if any)
        this.displayBoptions()
    }
 
    displayBoptions(){
    //cleanup previous div
    $('.questionbox').hide()
    $('#option-buttons').hide()
    $('.inventory').remove()
    $('.homebtn').hide()
    //append homescreen buttons
    let $startbtn = $('<button>').attr('id','startbtn').addClass('homepagebutton').text('START')
    let $instructionbtn = $('<button>').attr('id','instructionbtn').addClass('homepagebutton').text('INSTRUCTIONS')
    $('#homepage-buttons').append($startbtn)
    $('#homepage-buttons').append($instructionbtn)
    this.nextNode()
    }

    nextNode(){
    //next node is start btn
    $('#startbtn').click(()=>{
        $('#homepagevideo').remove()
        $('#homepage-buttons').empty()
        $('#option-buttons').show()
        $('.questionbox').show()
        $('.homebtn').show()
        storyNode0.start()
        })
    
    //next node is instructions
    //show instruction modal content
    $('#instructionbtn').click(()=>{$('#instructioncontent').show()})
    //hide instruction modal content 
    $('#instructionclosebtn').click(()=>{$('#instructioncontent').hide()})
    }
}

class EscapeNode {
    constructor(story,option,imageurl){
        this.story = story
        this.option = option
        this.imageurl = imageurl
        this.start = this.start.bind(this)
    }

    start(){
        $('.startingphoto').attr('src',this.imageurl)
        $('#option-buttons').empty()
        this.displayStory()
    }
    displayStory(){
    $('.questionbox').typedText(this.story,speed,()=>{this.displayBoptions()})
    }

    displayBoptions(){
    let $storybtn = $('<button>').attr('id','storybutton').addClass('story-button')
    $('#option-buttons').addClass('option-buttons')
    $('#option-buttons').append($storybtn)
    $storybtn.typedText(this.option)
    this.nextNode()
    }

    nextNode(){
    $('#storybutton').click(homePageScreen.start)
    }
}

// MoMo jumpscare with customized text
class MoMoDeathNode {
    constructor(story){
        this.story = story
        this.start = this.start.bind(this)
        this.momogenJumpScare = this.momogenJumpScare.bind(this)
    }

    start(){
        $('#option-buttons').empty()
        this.momogenJumpScare()
    }

    momogenJumpScare(){

        $('#option-buttons').empty()
        let audio = new Audio('assets/sound/momojumpscare.mp3')
        if($("audio").prop('muted')===false){
            audio.play()}

        const wait = (ms) => {
            return new Promise(resolve=>{
                setTimeout(()=>{resolve('')},ms)
            })
        }
        const momoJumpScare = async () => {
        $('.startingphoto').attr('src','assets/Image/momojumpscare.png')
        $('.startingphoto').addClass('shake')
        $('.items').hide()
        $('.homebtn').hide()
        $('.questionbox').hide()
        $('#option-buttons').hide()
        await wait(2000)
        $('.startingphoto').removeClass('shake')
        $('.questionbox').show()
        $('.startingphoto').attr('src','assets/Image/youdied.png')
        $('.questionbox').typedText(`${this.story}`,speed)
        // cannot read properties of undefined (reading 'story') at momoJumpScare if you use regular function notion. 
        // have to use arrow notion for momoJumpScare & wait function
        await wait(8000)
        $('#option-buttons').show()
        $('.startingphoto').attr('src','')
        $('.homebtn').show()
        homePageScreen.start()
        }
        momoJumpScare()
    }
}