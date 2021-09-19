// do up statements for all 22 nodes first before setting the individual notes via accessing the setNode() method. 
// that way you dont have to worry about the order of nodes if it haven't been created yet
// can do the same for inventory with method 

const node3 = new NodeWithItemsUpdates(
    'node3qn',
    'Take it',
    'Leave it',
    'assets/Image/toilet%20bathtub.jpeg',
    'matchbox',
    true)

const node17 = new Node(

)

const node6 = new Node(
    'You find a buzzing satellite phone under the dusty bed, do you want to keep it?',
    'Keep radio',
    'Leave it, the buzzing sound might attract something lurking in this place',
    'assets/Image/toilet%20bathtub.jpeg')


const node2 = new NodewithMoMoGen(
    'Something calls you to the left door and as you entered, you find yourself in a ward with a badly stained bed with a rotting stench...There seems to be static sound coming from underneath the bed. You feel strangly compelled to look underneath the bed...',
    'Look underneath the bed',
    'Look underneath the bed',
    'assets/Image/hospitalbed.png')


const node1 = new NodeWithItemsUpdates(
    'You picked up the matchbox thinking it could serve some use later on... Your leg is injured and you limped for about a minute and see two doors. One on the left and the other on the right. Where do you go?',
    'Left',
    'Right',
    'assets/Image/toilet%20bathtub.jpeg',
    'matchbox',
    true,
    'assets/Image/matchbox.png')


const node0 = new Node(
    'You wake up on the cold hard gravel floor...the room is dark,very dark...You look around and your eyes can\'t seem to figure out where exactly you are...you see a matchbox 10 feet infront of you. Do you want to pick up the matchbox?',
    'Pick up',
    'Leave it',
    'assets/Image/wallpaperflare.com_wallpaper.jpg')

node0.setNode(node1,node17)
node1.setNode(node2,node3)
node2.setSurviveNode(node6)
node6.setNode(node0,node0)


$(() => {
    node0.start()
    })
    
    






