// do up statements for all 22 nodes first before setting the individual notes via accessing the setNode() method. 
// that way you dont have to worry about the order of nodes if it haven't been created yet
// can do the same for inventory with method 


// common problems:
// undefined start: remember to setNode for the new node to eradicate this bug

//problem to solve
// github failed to load resources


// -------------StoryNodes------------- //


const storyNode0 = new StoryNode(
    'You are an investigator following a case of possible child abduction in San Francisco. Police leads and your own research brought you to abandoned prison in the middle of the sea with cold waters and strong currents, what used to be a maximum security federal prison on an island. You are here to gather leads as this prison is suspected to be the base of operation.',
    'Continue',
    'assets/image/storynode0.jpg'
)


const storyNode1 = new StoryNodeWithVideo(
    'You opened your eyes, feeling extremely disoriented about where you were or even what you were doing here… what were you doing on the floor? Did you pass out? Possibly, you thought to yourself as you remember that you were the lead investigator on the case of a possible serial child abduction which led you to this abandoned prison…',
    'Stand up and explore the prison',
    'assets/video/storynode1.mp4'
)



const storyNode2 = new StoryNodeWithMoMoGen(
    'Something calls you to the left door and as you entered, you find yourself in a ward with a badly stained bed with a rotting stench...There seems to be static sound coming from underneath the bed. You feel strangly compelled to look underneath the bed...',
    'Look underneath the bed',
    'assets/Image/storynode2.png')


const gameNode1a = new StoryNode(
    'You explored and reached an intersection which indicated ‘Basement Level’. You placed your fingers on the wall and carefully follow along the long corridor… you eventually reached the end of the corridor with its door ajar…',
    'Enter Room',
    'assets/game/game1/game1door.jpeg'
)

const gameNode1b = new StoryNodeWithVideo(
    'You carefully typed in a l c a t r a z on the typewriter... nothing happens... suddenly, you hear a low rumbling behind you...',
    'Turn your head',
    'assets/game/game1/game1b.mp4'
)


const gameNode1c = new StoryNode(
    'A trap door opens up from a wall of book shelves...Seems like there is a way out of here...',
    'Follow the light',
    'assets/game/game1/game1trapdoor.jpeg'
)

const gameNode1d = new StoryNode(
    'You ended up in a nuclear style bunker which was in stark contrast to the previous posh office room... You see the light at the end of the tunnel and quicken your space as you hear footsteps behind you!',
    'Continue venturing',
    'assets/game/game1/game1tunnel.png'
)


// -------------Nodes------------- //


const node0 = new Node(
    'You entered into what seems like a warden office...there is a photo of a young man... You saw a matchbox under the lamp, do you want to take the matchbox?',
    'Pick up',
    'Leave it',
    'assets/Image/node0.jpg')



const node1 = new NodeWithItemsUpdates(
    'You picked up the matchbox thinking it could serve some use later on... Your leg is injured and you limped for about a minute and see two doors. One on the left and the other on the right. Where do you go?',
    'Left',
    'Right',
    'assets/Image/node1.jpeg',
    'matchbox',
    true,
    'assets/Image/matchbox.png')



const node13 = new NodewithMoMoGen2(
    'You stumbled upon a locked door with a keyhole. You instinctively pulled out the key you got from your backpocket, it is still smiley and you almost puked from the scent when you brought it close to the keyhole. Knowing full well that in a prison, using the wrong key could set off an alarm… what do you want to do? ',
    'Look into keyhole',
    'Insert key',
    'assets/Image/node13.jpeg'
)

const node13a = new StoryNodeWithItemsUpdates(
    'You see a warmly lit room which seems like an office, peculiarly poshed in this abandoned prison… it felt like someone had been here not long ago…',
    'Explore the office',
    'assets/Image/node13a.jpg',
    'key',
    false
)

const node9 = new NodeWithVideo(
    'You wondered around the corridor and they started to look the same. Your head starts to spin… Do you want to use your walkie talkie to call for help?',
    'Yes',
    'No',
    'assets/video/node9.mp4'

)

const node9a = new StoryNodeWithVideoAndItemsUpdates(
    '“bzzzz” the radio in your backpocket sounded, breaking the silence of the place. “base…men..t..” a choppy transmission was heard…”basement?” you thought to yourself… You weren’t sure who was on the other end of the radio but you decided to go down to the basement…',
    'Head to basement',
    'assets/video/node9a.mp4',
    'walkietalkie',
    false,
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

const node10 = new NodeWithVideoAndItemsUpdates(
    'A certain fear crept over you as you held the key in your hands…You dropped the key and stood up. The reflection in the stained mirror caught your attention. Somehow, you can’t seem to figure out but the reflection in the mirror looks odd… Do you want to inspect the mirror?',
    'Inspect mirror',
    'ignore',
    'assets/video/node10.mp4',
    'key',
    false
)

const node8 = new NodeWithVideoAndItemsUpdates(
    'You fumbled with the matches and accidentally broke one of the matches. You tried a few more times before you successfully lit up a match… You calmed down… You jolted in shock as you thought you saw a black shadow darted into an unlit area about 30 feet away from you… Do you want to follow the figure? ',
    'Follow',
    'Ignore',
    'assets/video/node8.mp4',
    'matchbox',
    false
)

const node11 = new NodeWithVideoAndItemsUpdates(
    '‘Hello, is anyone here?’ You repeated your message while holding down on the broadcast button. There doesn’t seem to be any response at all… You noticed a shadowy corner 30 feet away from you, it’s eerily unlit even though there is a florescent tube right above it… Do you want to explore the unlit area?',
    'Explore',
    'Ignore',
    'assets/video/node11.mp4',
    'walkietalkie',
    false
)



const node5 = new NodeWithVideo(
    'You leave it. There wouldn’t be anything useful about it anyway… The fluorescent light tube on the ceiling suddenly dims and it goes out. You’re surrounded by darkness. Do you want to use your matches to lit the room or wait till your eyes adjust to the darkness before moving as the matches could prove useful later…',
    'Wait for your eyes to adjust',
    'Light Matches',
    'assets/video/node5.mp4'
    
)

const node5a = new StoryNodeWithVideoAndItemsUpdates(
   'You fumbled with the matches and accidentally broke one of the matches. You tried a few more times before you successfully lit up a match… You calmed down… ',
   'Continue',
   'assets/video/node8.mp4' ,
   'matchbox',
   false
)

const node6 = new StoryNode(
    'As you walked towards the mirror, the mirror starting shaking and swing outwards, revealing a cabinet behind it… You see a piece of polaroid inside the cabinet…',
    'Inspect polaroid',
    'assets/Image/node6.jpeg')



const node7 = new NodeWithItemsUpdates(
    'You picked up a walkie talkie from underneath a bed, which was the source of the static sound. The temperature of the room immediately dropped, you quickly exited the room and start shivering… why is it so cold? Do you want to lit your match to warm yourself with the flame?',
    'Use Matchbox',
    `Don't use`,
    'assets/Image/node7.png',
    'walkietalkie',
    true,
    'assets/Image/walkietalkie.png')

    
const ratnode = new Node(
    'As you inched closer, the rotting smell got unbearable. There were maggots and crawlies on the rat. You see what seems to be a golden key stucked into the rat... Do you want to take and keep the key?',
    'Take key',
    'Leave it'
)

const node3 = new StoryNodeWithVideoAndItemsUpdates(
    'Something calls you to the right door and as you entered, the walkie talkie in your backpocket sounded ‘…bathroom…spotted’… which sent shivers up your spine. You did not remember bringing a walkie talkie with you..where did it come from?',
    'Continue',
    'assets/video/node11.mp4',
    'walkietalkie',
    true,
    'assets/Image/walkietalkie.png'
)


const node4 = new Node(
    'You noticed that in the bathroom that you stepped into, there is a flattened rat on the floor which seems to have fused into the floor. Do you want to inspect the rat? ',
    'Inspect rat',
    'Leave the rat alone',
    'assets/Image/node3.png'
)

const node15 = new NodewithMoMoGen2(
    'You inspected the rat and there seems to be a shiny object stuck inside its mouth… You pulled out a silver key that has been forcibly jammed into the rat’s mouth… Do you want to keep the key?',
    'Keep',
    'Drop',
    'assets/Image/node15.png'


)

const node8a = new StoryNode(
    'You followed the figure into the unlit area… your eyes couldn’t adjust to the darkness but you see a room with its door ajar.. You entered the room but there was nothing in it.. Except for a piece of polaroid photo on the floor.',
    'Pick up photo',
    'assets/Image/node8a.jpg'
)




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

const node24 = new StoryNodeWithVideo(
    'The face in the polaroid changes to a word…’basement’… Is there a basement in this prison?',
    'Find basement',
    'assets/game/game2/game2basement.mp4'
)


const node12 = new StoryNodeWithVideoAndItemsUpdates(
    'You quickly leave the bathroom as the air got thick without warning and you found it increasingly hard to breathe. You got paranoid as your surroundings got darker… You use your match and managed to start a small flame… You calmed down… ',
    'Continue exploring',
    'assets/video/node8.mp4',
    'key',
    true,
    'assets/Image/key.png'
)


const gameDeathNode = new StoryNodeWithVideo(
    'Game Death Node',
    'Return to home page',
    'assets/video/gamedeathnode.mp4'
)


const gameDeathNode1 = new StoryNodeWithVideo(
    'You couldn\'t figure out what was the correct answer... You went outside to the corridor and continued finding a way out...You wondered around the corridor and they started to look the same. Your head starts to spin…your vision fades as your surroundings fades into darkness…',
    'Return to home page',
    'assets/video/gamedeathnode.mp4'
)


const gameDeathNode2 = new StoryNodeWithVideo(
    'You went outside to the corridor and continued finding a way out...You wondered around the corridor and they started to look the same. Your head starts to spin…your vision fades as your surroundings fades into darkness…',
    'Return to home page',
    'assets/video/gamedeathnode.mp4'
)


const gameNode1main = new GameNodeWithGameDeathNode(
    "You walked to a table full of newspaper cutouts and letters... There were reports of missing childrens and ghastly sighting...which all supposedly happened in this prison...' You saw a chunk of morse code on an envelope… and a typewriter next to it… Is this a riddle? What could the morse code mean?",

    'assets/game/game1/game1.mp4',
    'alcatraz'
)

const gameNode2 = new GameNodeWithGameDeathNode(
    'You held up the polaroid with care and stare into a ghoul-looking female, unsure of who she is...the light gave some illumination to the polaroid and you noticed a string of characters started appearing on the polaroid...c i ii..what could it mean?',
    'assets/game/game2/game2.mp4',
    'see eye to eye'
)

const homePageScreen = new HomePage(
    'assets/video/homepagevideo.mp4'
)

const escapeNode1 = new EscapeNode(
    'You escaped!',
    'Return to home page',
    'assets/Image/escapenode.jpg'
)

// -------------MoMoDeathNode------------- //


const momoDNode5 = new MoMoDeathNode(
    'Darkness attracts MoMo and unlucky for you, MoMo sniffed you out without any light for protection.'
)



//SET NODE

node0.setNode(node1,node17)
node1.setNode(storyNode2,node3)
node3.setNode(node4)
node4.setNode(node15,node5)
node5.setNode(momoDNode5,node5a)
node5a.setNode(node9a)
node6.setNode(gameNode2)
node7.setNode(node8,node9)
node8.setNode(node8a,gameDeathNode1) 
node8a.setNode(gameNode2)
node9.setNode(node11,node9a)
node9a.setNode(gameNode1a)
node10.setNode(node6,node5)
node11.setNode(gameNode1a,gameDeathNode2)
node12.setNode(node13)
node13.setNode(node13a)
node13a.setNode(gameNode1main)
node15.setNode(node10)
node20.setNode(escapeNode,node0)
node24.setNode(gameNode1a)

storyNode0.setNode(storyNode1)
storyNode1.setNode(node0)

gameDeathNode.setNode(homePageScreen)
gameDeathNode1.setNode(homePageScreen)
gameDeathNode2.setNode(homePageScreen)
gameNode1a.setNode(gameNode1main)
gameNode1b.setNode(gameNode1c)
gameNode1c.setNode(gameNode1d)
gameNode1d.setNode(escapeNode1)


//SET SURVIVE NODE


storyNode2.setSurviveNode(node7)
node13.setSurviveNode(node13a)
gameNode1main.setSurviveNode(gameNode1b)
gameNode2.setSurviveNode(node24)
node15.setSurviveNode(node12)



$(() => {
    homePageScreen.start()
    allUIFunctions()
})













// you need to setNode for each node else the node will be undefined



    
    






