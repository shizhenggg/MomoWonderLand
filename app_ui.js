const volumeFunctions = () => {
    let $volumebtn = $('.volumebtn')
    $volumebtn.click(()=>{
        if( $("audio").prop('muted') ) {
                $("audio").prop('muted', false)
                $(".volumebtn").css("background-image","url(/assets/icon/volume.png)")
        } else {
            $("audio").prop('muted', true)
            $(".volumebtn").css("background-image","url(/assets/icon/mute.png)")
            }}
        )}

const goBackHomeFunction = () => {
    let $homebtn = $('.homebtn')
    $homebtn.click(()=>{
        $('video').remove()
        // remove video from gameNode (if any) else it will block homepagescreen video
        homePageScreen.start()
    })
}
    
const homeScreenFunction = () => {
    //show instruction modal content
    $('#instructionbtn').click(()=>{$('#instructioncontent').show()})
    //hide instruction modal content 
    $('#instructionclosebtn').click(()=>{$('#instructioncontent').hide()})
    //show credits modal content
    $('#creditsbtn').click(()=>{$('#creditscontent').show()})
    //hide credits modal content
    $('#creditsclosebtn').click(()=>{$('#creditscontent').hide()})
}


const allUIFunctions = () =>{
    volumeFunctions()
    goBackHomeFunction()
    homeScreenFunction()
}