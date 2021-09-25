const volumeFunctions = () => {
    let $volumebtn = $('.volumebtn')
    $volumebtn.click(()=>{
        // function only works if audio file is defined
        if( $("audio").prop('muted')) {
                $("audio").prop('muted', false)
                $(".volumebtn").css("background-image","url(/assets/icon/volume.png)")} 
        else {
            $("audio").prop('muted', true)
            $(".volumebtn").css("background-image","url(/assets/icon/mute.png)")
            }
        }
        )}

const goBackHomeFunction = () => {
    let $homebtn = $('.homebtn')
    $homebtn.click(()=>{
        $('video').remove()
        // remove video from gameNode (if any) else it will block homepagescreen video
        homePageScreen.start()
    })
}
    



const allUIFunctions = () =>{
    volumeFunctions()
    goBackHomeFunction()
}