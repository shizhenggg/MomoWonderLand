// allows player to turn on and off background music which applies to momojumpscare audio too

const volumeFunctions = () => {
    let $volumebtn = $('.volumebtn')
    $volumebtn.click(()=>{
        // function only works if audio file is defined
        if( $("audio").prop('muted')) {
            $("audio").prop('muted', false)
            $(".volumebtn").css("background-image","url(assets/icon/volume.png)")} 
        else {
            $("audio").prop('muted', true)
            $(".volumebtn").css("background-image","url(assets/icon/mute.png)")
            }
        }
        )}

// allows player to speed up the typing text animation in .questionbox
const speedUp = () => {
    let $speedBtn = $('#speedupbtn')
    let $slowBtn = $('#slowdownbtn')
    $speedBtn.click(()=>{
        $speedBtn.hide()
        $slowBtn.show()
        speed = 0
    })
    $slowBtn.click(()=>{
        $speedBtn.show()
        $slowBtn.hide()
        speed = 40
    })
    }

// allows player to go back to homepage 
const goBackHomeFunction = () => {
    let $homebtn = $('.homebtn')
    $homebtn.click(()=>{
        $('video').remove()
        // remove video from gameNode (if any) else it will block homepagescreen video
        homePageScreen.start()
        location.reload()
        // Reload the homescreen to clear any running Typedtext function which will continue typing the .questionbox after you click start which is a bug
    })
}
    
const allUIFunctions = () =>{
    volumeFunctions()
    goBackHomeFunction()
    speedUp()
}