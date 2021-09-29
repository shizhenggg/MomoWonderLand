// -------------STORYNODES------------- //

const storyNode0 = new StoryNode(
    'You are an investigator following a case of possible child abduction in San Francisco. Police leads and your own research brought you to an abandoned prison in the middle of the sea with cold waters and strong currents, what used to be a maximum security federal prison on an island. You are here to gather leads as this prison is suspected to be the base of operation.',
    'Continue',
    'assets/Image/storynode0.jpg'
)


const storyNode1 = new StoryNodeWithVideo(
    'You have been in this prison for more than 8 hours, unable to find an exit. The entrace you came in from was nowhere to be found... You need to escape this abandoned prison and gather some evidence if you can... You feel a presence in here and it could be dangerous to linger here any longer...',
    'Explore prison and find a way out',
    'assets/video/storynode1.mp4'
)


const storyNode2 = new StoryNodeWithMoMoGen(
    'Something calls you to the left door and as you entered, you find yourself in a ward with two badly stained beds and an offensive rotting stench...There seems to be static sound coming from underneath the bed closer to yourself. You feel strangly compelled to look underneath the bed...',
    'Look underneath the bed',
    'assets/Image/storynode2.png')


// -------------GAMENODES------------- //


const gameNode1main = new GameNodeWithGameDeathNode(
    "You walked to a table full of newspaper cutouts and letters... There were reports of missing childrens and ghastly sighting...which all supposedly happened in this prison... You saw a chunk of morse code on an envelope… and a typewriter next to it… Is this a riddle? What could the morse code mean?",
    'assets/game/game1/game1.mp4',
    'alcatraz'
)

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
    'You ended up in a nuclear style bunker which was in stark contrast to the previous posh office room... You see the light at the end of the tunnel and quicken your pace as you hear footsteps behind you!',
    'Continue venturing',
    'assets/game/game1/game1tunnel.png'
)

const gameNode2 = new GameNodeWithGameDeathNode(
    'You held up the polaroid with care and stare into a ghoul-looking female, unsure of who she is...the light gave some illumination to the polaroid and you noticed a string of characters started appearing on the polaroid...c i ii..what could it mean?',
    'assets/game/game2/game2.mp4',
    'see eye to eye'
)

const gameNode3 = new GameNodeWithGameDeathNode(
    'You looked around and see a whiteboard...a clue! The key to unlocking the safe lies in the code word RUN... How do I get the 6 digit safe code from the word RUN?',
    'assets/game/game3/gamenode3.mp4',
    '182114'
)

const gameNode3a= new StoryNodeWithItemsUpdates(
    '1..8.2…1..1..4 you carefully turned the dial on the safety box…',
    'Unlock',
    'assets/game/game3/gamenode3a.jpeg',
    'flashlight',
    false
)

const gameNode3b= new StoryNodeWithItemsUpdates(
    'The safe opened up and you see some medicine and a first aid kit… Evidence! You found stacks of photos of victims whose faces you recognized. You took the evidences and tucked it in your jacket…These will be helpful in your case…There seems to be a papyrus map of some sort as well… ',
    'Unroll map',
    'assets/game/game3/gamenode3b.jpg',
    'girlphoto',
    true,
    'assets/Image/girlphoto.png'
)

const gameNode3c= new StoryNodeWithItemsUpdates(
    'A map of the island! On the map there is a prominent area marked X somewhere in this building which leads to a tunnel and an exit where ships could dock... this could be your way out! ',
    'Follow map',
    'assets/game/game3/gamenode3c.jpg',
    'map',
    true,
    'assets/Image/map.png'
)

const gameNode4 = new GameNodeWithGameDeathNode(
    'You held up the polaroid with care and stare into a ghoul-looking female, unsure of who she is...the light gave some illumination to the polaroid and you noticed a string of characters started appearing on the polaroid...c i ii..what could it mean?',
    'assets/game/game2/game2.mp4',
    'see eye to eye'
)

// -------------NODES------------- //

const node0 = new Node(
    'You entered into what seems like a warden office...there is a photo of a young man... You saw a matchbox under the lamp, do you want to take the matchbox?',
    'Pick up',
    'Leave it',
    'assets/Image/node0.jpg')


const node1 = new NodeWithItemsUpdates(
    'You picked up the matchbox thinking it could serve some use later on... You looked behind you and see two doors. One on the left and the other on the right. Where do you go?',
    'Left',
    'Right',
    'assets/Image/node1.jpeg',
    'matchbox',
    true,
    'assets/Image/matchbox.png')


const node3 = new StoryNodeWithVideoAndItemsUpdates(
    'Something calls you to the right door and as you entered, the walkie talkie in your backpocket sounded ‘…bathroom…spotted’… which sent shivers down your spine. You did not remember bringing a walkie talkie with you..where did it come from?',
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

const node5 = new NodeWithVideo(
    'You leave it. There wouldn’t be anything useful about it anyway… The bulb hanging on the ceiling suddenly dims and it goes out. You’re surrounded by darkness. Do you want to use your matches to lit the room or wait till your eyes adjust to the darkness before moving as the matches could prove useful later…',
    'Wait for your eyes to adjust',
    'Light Matches',
    'assets/video/node5.mp4'
    
)

const node5a = new StoryNodeWithVideoAndItemsUpdates(
    'You fumbled with the matches and broke the first two as your hands were unstable. You tried striking another match and this time a small, flickering flame burned… You calmed down… ',
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
    'You picked up a walkie talkie from underneath the bed, which was the source of the static sound. The temperature of the room immediately dropped, you quickly exited the room and start shivering… why is it so cold? Do you want to lit your match to warm yourself with the flame?',
    'Use Matchbox',
    `Don't use`,
    'assets/Image/node7.png',
    'walkietalkie',
    true,
    'assets/Image/walkietalkie.png')
    

const node8 = new NodeWithVideoAndItemsUpdates(
    'You fumbled with the matches and broke the first two as your hands were unstable. You tried striking another match and this time a small, flickering flame burned… You calmed down… You jolted in shock as you thought you saw a black shadow darted into an unlit area 30 feet in front of yourself! Do you want to follow the figure? ',
    'Follow',
    'Ignore',
    'assets/video/node8.mp4',
    'matchbox',
    false
)

const node8a = new StoryNode(
    'You followed the figure into the unlit area… your eyes couldn’t adjust to the darkness but you see a room with its door ajar.. You entered the room but there was nothing in it.. Except for a piece of polaroid photo on the floor.',
    'Pick up photo',
    'assets/Image/node8a.jpg'
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


const node10 = new NodeWithVideoAndItemsUpdates(
    'A certain fear crept over you as you held the key in your hands…You dropped the key and stood up. The reflection in the stained mirror caught your attention. You can’t seem to figure out why but the reflection in the mirror looks really odd… Do you want to inspect the mirror?',
    'Inspect mirror',
    'ignore',
    'assets/video/node10.mp4',
    'key',
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

const node12 = new StoryNodeWithVideoAndItemsUpdates(
    'You quickly leave the bathroom as the air got thick without warning and you found it increasingly hard to breathe. You got paranoid as your surroundings got darker… You use your match and managed to start a small flame… You calmed down… ',
    'Continue exploring',
    'assets/video/node8.mp4',
    'key',
    true,
    'assets/Image/key.png'
)

const node13 = new NodewithMoMoGen2WithItemsUpdates(
    'You stumbled upon a locked door with a keyhole. You instinctively pulled out the key you got from your backpocket, it is still slimy and you almost puked from the scent when you brought it close to the keyhole. Knowing full well that in a prison, using the wrong key could set off an alarm… what do you want to do? ',
    'Look into keyhole',
    'Insert key',
    'assets/Image/node13.jpeg',
    'matchbox',
    false
)

const node13a = new StoryNodeWithItemsUpdates(
    'You see a warmly lit room which seems like an office, peculiarly poshed in this abandoned prison… it felt like someone had been here not long ago…',
    'Explore the office',
    'assets/Image/node13a.jpg',
    'key',
    false
)

const node15 = new NodewithMoMoGen2(
    'You inspected the rat and there seems to be a shiny object stuck inside its mouth… You pulled out a silver key that has been forcibly jammed into the rat’s mouth… Do you want to keep the key?',
    'Keep',
    'Drop',
    'assets/Image/node15.png'
)


const node18 = new StoryNodeWithVideo(
    'You knocked on the door with three thumps and nothing happens...then the door slowly swings open... You took peanut steps, cautiously entering the room and observing the surrounding...it seems to be a sort of... children\'s playroom? There were toys scattered on the floor and as you look up to the only source of light, a window, you noticed a robodog that is producing a whirring noise.',
    'Take Robodog',
    'assets/video/node18.mp4'
)

const node17 = new Node(
    'You probably won\'t need the matchbox, you thought to yourself... you walked away from the matchbox and heard a strange whirrling sound coming from within a room... the door is ajar but you can\'t seem to see what is inside. Do you want to knock on the door or sneak in quietly?',
    'Knock',
    'Sneak In',
    'assets/Image/node13.jpeg'
)

const node17a = new StoryNodeWithVideo(
    'You sneaked in and the door let out a small creak . You slowly close the door behind you. You hear a quick rufflings of feather closing in on you, you ransack your backpack to find a light source for protection. Do you have a matchbox?',
    'No',
    'assets/video/node9.mp4'
)

const node18a = new StoryNodeWithItemsUpdates(
    'Where the robodog stood,there is also a piece of polaroid… You leaned forward and pick up the polaroid, bringing it close to your face…',
    'Look at polaroid',
    'assets/Image/node18a.jpg',
    'robodog',
    true,
    'assets/Image/robodog.png'

)

const node19 = new NodeWithVideo(
    'Dep..osit..box... seems like you have to find a safe deposit box somewhere in the prison... Do you want to use your robodog or try to find it by yourself, saving your robodog for later?',
    'Use the robodog',
    'Find it yourself',
    'assets/video/node19.mp4'
)

const node19a = new StoryNodeWithVideoAndItemsUpdates(
    'Your robodog went out for a recce looking for a room with a safety deposit box... 5 minutes later, it came back with a 3D mapped footage of a room nearby with a safe in it',
    'Explore the discovered room',
    'assets/video/gamenode3a.mp4',
    'robodog',
    false
)

const node19b = new StoryNodeWithItemsUpdates(
    'You followed the robodog into the room and there is indeed a safe deposit box... you picked up a flashlight on the table and you inspected it... the safe seems to be locked...How do I unlock this?',
    'Look around for clues',
    'assets/game/game3/node19b.jpeg',
    'flashlight',
    true,
    'assets/Image/flashlight.png'
)


const node24 = new StoryNodeWithVideo(
    'The face in the polaroid changes to a word…’basement’… Is there a basement in this prison?',
    'Find basement',
    'assets/game/game2/game2basement.mp4'
)


// -------------GAMEDEATHNODES------------- //

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


// -------------MOMODEATHNODES------------- //

const MomoDNode4 = new MoMoDeathNode(
    'MoMo found you! How dare you try to steal her treasure from the safe!'
)

const momoDNode5 = new MoMoDeathNode(
    'Darkness attracts MoMo and unlucky for you, MoMo sniffed you out without any light for protection.'
)

const momoDNode6 = new MoMoDeathNode(
    'How dare you sneak around in MoMo\'s territory without any light source for protection?!'
)



// -------------HOMEPAGESCREEN------------- //
const homePageScreen = new HomePage(
)



// -------------ESCAPENODE------------- //
const escapeNode1 = new EscapeNode(
    'You escaped! Congratulations, you managed to escape MoMo and survived to hunt her another day...',
    'Return to home page',
    'assets/Image/escapenode.jpg'
)




// -------------NEXT NODES SETTING------------- //

//storynodes
storyNode0.setNode(storyNode1)
storyNode1.setNode(node0)

//gamenodes
gameNode1a.setNode(gameNode1main)
gameNode1b.setNode(gameNode1c)
gameNode1c.setNode(gameNode1d)
gameNode1d.setNode(escapeNode1)
gameNode3.setSurviveNode(gameNode3a)
gameNode3a.setNode(gameNode3b)
gameNode3b.setNode(gameNode3c)
gameNode3c.setNode(gameNode1a)
gameNode4.setSurviveNode(node19)

//nodes
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
node17.setNode(node18,node17a)
node17a.setNode(momoDNode6)
node18a.setNode(gameNode4)
node18.setNode(node18a)
node19.setNode(node19a,MomoDNode4)
node19a.setNode(node19b)
node19b.setNode(gameNode3)
node24.setNode(gameNode1a)


//gamedeathnotes
gameDeathNode1.setNode(homePageScreen)
gameDeathNode2.setNode(homePageScreen)



// -------------SURVIVE NODE SETTING------------- //

storyNode2.setSurviveNode(node7)
gameNode1main.setSurviveNode(gameNode1b)
gameNode2.setSurviveNode(node24)
node13.setSurviveNode(node13a)
node15.setSurviveNode(node12)














    
    






