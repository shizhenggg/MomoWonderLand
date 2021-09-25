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
