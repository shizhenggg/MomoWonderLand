// do up statements for all 22 nodes first before setting the individual notes via accessing the setNode() method. 
// that way you dont have to worry about the order of nodes if it haven't been created yet
// can do the same for inventory with method 


// common problems:
// undefined start: remember to setNode for the new node to eradicate this bug

//problem to solve


const gameDeathNode = new StoryNodeWithVideo(
    'Game Death Node',
    'Return to home page',
    'assets/video/gamedeathnode.mp4'
)

const node13 = new NodewithMoMoGen2(
    'You stumbled upon a locked door with a keyhole. You instinctively pulled out the key you got from your backpocket, it is still smiley and you almost puked from the scent when you brought it close to the keyhole. Knowing full well that in a prison, using the wrong key could set off an alarm… what do you want to do? ',
    'Look into keyhole',
    'Insert key'
    
)


const node20 = new Node(
    'The ______. You reached out and opened up the papyrus map... on the map marks an X spot as well as a blacked out area... The blacked out area seems like an exit, you thought to yourself... Where do you go?',
    'Spot marked X',
    'Blacked out area'
)

const node19 = new NodeWithItemsUpdates(
    'You exited the room with your robodog following you... there is a whiff of a pleasant smell coming from down the corridor... You thought it would be a good idea to follow the scent. Do you want to use your robodog to navigate or do you trust your olfactory system?',
    'Use the robodog',
    'Use my nose',
    'robodog',
    true,
    'assets/Image/robodoginventory.png'
)


const node18 = new Node(
    'You knocked on the door with three thumps and nothing happens...then the door slowly swung open... You took peanut steps, cautiously entering the room and observing the surrounding...it seems to be a sort of... children\'s playroom? There were toys scattered on the floor and as you look up to the only source of light, a window, you noticed a robodog that is producing a whirring noise.',
    'Take the Robodog',
    'Take the Robodog'
)

const node17 = new Node(
    'You probably won\'t need the matchbox, you thought to yourself... you walked away from the matchbox and heard a strange whirrling sound coming from within a room... the door is ajar but you can\'t seem to see what is inside. Do you want to knock on the door or sneak in quietly?',
    'Knock',
    'Sneak In'
)

const node15 = new NodeWithItemsUpdates(
    'A certain fear crept over you and you decided to not lay hands on that rotting carcass. You take a step back...As you glanced around the rest of the bathroom, you caught your own reflection in the mirror... The longer you look at yourself, the amissed you feel about the mirror. Do you want to move closer and check out the mirror?',
    'Inspect mirror',
    'Leave it',
    'key',
    false
)

const node8 = new Node(

)

const node5 = new Node(
    'You clumsily fiddled with the matchbox and after much struggle in the darkness, managed to get one started. As small as it was, the warm flame calmed you down... Out of the blue, at the right corner of your eyes, you see a black figure darted into a small corner down the corridor 10 feet away from you. That\`s weird, you thought to yourself. There was no signs of any humans in this dilapilated place. Do you want to follow the figure?',
    'Follow',
    'Ignore and explore someplace else'
)


const node6 = new Node(
    'You find a buzzing satellite phone under the dusty bed, do you want to keep it?',
    'Keep radio',
    'Leave it',
    'assets/Image/toilet%20bathtub.jpeg')

const testNode = new NodeWithItemsUpdates(
    'test',
    'used matchbox',
    'used matchbox',
    'assets/Image/hospitalbedroomdarkimg.png',
    'matchbox',
    false,
    'assets/Image/matchbox.png'
)

const node7 = new NodeWithItemsUpdates(
    'You found a walkie talkie and kept it. You leave the room and the room suddenly gets colder drastically and your thin sweater does not keep you warm enough. You start to shiver almost immediately. Do you want to use your match as a source of heat to keep yourself warm?',
    'Use Matchbox',
    `Don't use`,
    'assets/Image/hospitalbedroomdarkimg.png',
    'satellitephone',
    true,
    'assets/Image/satellitephone.png')

    
const node4 = new Node(
    'As you inched closer, the rotting smell got unbearable. There were maggots and crawlies on the rat. You see what seems to be a golden key stucked into the rat... Do you want to take and keep the key?',
    'Take key',
    'Leave it'
)

const node3 = new Node(
    'Something calls you to the right door and as you entered, you find yourself in what seemed to be the bathroom with a rotting stench...you noticed an abnormally sized rat that has half rotten. There seems to be something shiny protruding out of the abdomen of it. Do you want to move closer to inspect the rate?',
    'Inspect rat',
    'Leave the rat alone'

    )




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


const deathNode = new Node(
    'you died'
)
const gameNode = new Node(
    'insert game here'
)

const escapeNode = new Node(
    'you escaped',
    'a',
    'b',
    'assets/Image/map.jpeg'
)



const storyNode1 = new StoryNode(
    'You opened your eyes, feeling extremely disoriented about where you were or even what you were doing here… what were you doing on the floor? Did you pass out? Possibly, you thought to yourself as you remember that you were the lead investigator on the case of a possible serial child abduction which led you to this abandoned prison…',
    'Stand up and explore the prison',
    'assets/storyNodeImg/storyNode1.jpeg'
)

const storyNode2 = new StoryNodeWithMoMoGen(
    'Something calls you to the left door and as you entered, you find yourself in a ward with a badly stained bed with a rotting stench...There seems to be static sound coming from underneath the bed. You feel strangly compelled to look underneath the bed...',
    'Look underneath the bed',
    'assets/Image/hospitalbed.png')


const gameNode3 = new GameNodeWithGameDeathNode(
    'Game3',
    'assets/game/game1/game1.mp4',
    'alcatraz'
)

const homePageScreen = new HomePage(
    '/assets/video/homepagevideo.mp4'
)

const escapeNode1 = new EscapeNode(
    'You escaped!',
    'Return to home page',
    'assets/Image/escapenode.jpg'
)


node13.setSurviveNode(homePageScreen)
node13.setNode(gameNode3)
node20.setNode(escapeNode,node0)
node7.setNode(testNode,node0)
node6.setNode(node7,node5)
node5.setNode(node8,deathNode)
node4.setNode(node15,node5)
node3.setNode(node4,node5)
// node2.setSurviveNode(node6)
// need to have a storynode with momogen 
node1.setNode(storyNode2,node3)
node0.setNode(node1,node17)
testNode.setNode(homePageScreen,homePageScreen)

storyNode1.setNode(node0)
storyNode2.setSurviveNode(node6)

gameNode3.setSurviveNode(escapeNode1)
gameDeathNode.setNode(homePageScreen)








// you need to setNode for each node else the node will be undefined


$(() => {
    node13.start()
    allUIFunctions()
})
    
    






