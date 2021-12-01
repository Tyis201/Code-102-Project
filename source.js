console.log('Hello world')

function go() { 
    let numb = prompt ('You wake up not knowing where you or how you got there, you are in what seems like a little hut. You get up and start walking around exploring the place not finding anything but a random ice-cream scooper a few chairs and a oven. For some reason you think that it would be a good idea to pick up the ice-cream scooper. Should you pick it up 1 for yes 2 for no')

if (numb === "1") {
   alert('You chose to pick up the spoon and continue on your journey. After exploring the whole hut you choose to walk outside. As soon as you walk outside a super spikey spider lunges out from the depths. With the ice-cream scooper in hand your somehow able to hit the spider mid air and escape to saftey.');
    goagain();
}
else if (numb === "2"){
   alert('You chose to ignore the spoon and continue on your journey. After exploring the whole hut you choose to walk outside. As soon as you walk outside a super spikey spider lunges out from the depths. Without something to hit it away with, it sticks to you and bites you. You get extremly sick from the poison and die a slow painful death');
   document.write('<h1>You got ending 1/10. "Better luck next time"</h1>')
}
else if (numb > 2){
    document.write('<h1>Idiot, we said 1 or 2</h1>')
}
}

function goagain() {
    let secondthird = prompt ('After escaping to saftey you look around and realize you are more lost then you already were. After exploring for a little bit you find a rather larger trail that seems to follow somewhere, but you dont know where. You have two options you can either keep looking around and hope to find something new or you could hop on the trail and follow that 1 for keep looking around 2 for hop on the trail')

if (secondthird === "1") {
   // prompt ('You decide to keep looking around for a while. To your suprise you find a abandon airplane in the middle of a large field. Out of pure curiosity you decide to walk in the plane and start looking around for any possible supplies that could be of use. After looking for a little bit you start to get a little claustrophobic due to all the seats being so close together. You want to keep looking around for supplies but you dont know if you should. 1 for keep looking around 2 for leave the plane')
    airplane();
}
else if (secondthird === "2") {
   // prompt ('You decide to hop on the trail and follow it for a while. A little ways down the trail you see a little bridge crossing a creek. Right when you get close to the bridge a troll jumps up from under the bridge and says "Answer this riddle and ill let you pass but get it wrong and youll regret your decision. The riddle is What can you catch but not throw')
    troll();
}
else if (numb > 2){
    document.write('<h1>Idiot, we said 1 or 2</h1>')
}
}

function airplane() {
    let airplane = prompt ('You decide to keep looking around for a while. To your suprise you find a abandon airplane in the middle of a large field. Out of pure curiosity you decide to walk in the plane and start looking around for any possible supplies that could be of use. After looking for a little bit you start to get a little claustrophobic due to all the seats being so close together. You want to keep looking around for supplies but you dont know if you should. 1 for keep looking around 2 for leave the plane')

if (airplane === "1"){
    lookaround();
   }
else if (airplane === "2"){
    leaveplane();
}
    else if (numb > 2){
        document.write('<h1>Idiot, we said 1 or 2</h1>')
}
}


function troll() {
  let troll = prompt ('You decide to hop on the trail and follow it for a while. A little ways down the trail you see a little bridge crossing a creek. Right when you get close to the bridge a troll jumps up from under the bridge and says "Answer this riddle and ill let you pass but get it wrong and youll regret your decision. The riddle is What can you catch but not throw')
  
  if (troll = "cold") {
      alert('troll: "You got it right... but i hungry"')
      document.write('<h1>You got ending 2/10. "Dang he really did you like that... smh"</h1>')
  }
else if (troll === "null") { 
    alert('troll: "WRONGGGGG you got it wrong so i get to eat you"')
    document.write('<h1>You got ending 3/10. "Cmon now that was just sad"</h1>')
}
else if (numb > 2){
    document.write('<h1>Idiot, we said 1 or 2</h1>')
}
}

function lookaround() {
let lookaround = prompt ('You keep looking around the plane for supplies that you may need to use in the future the only thing you end up finding is a old radio that seems to be in good use, but it is a little heavy for your liking. You decide to take it anyways and leave the plane. After leaving the plane you have too options left or right. 1 for left 2 for right')
    
if (lookaround === "1"){
    alert('You decide to head to the left. After heading to the left and walking that way for a while you end up stepping into a huge hole in the ground covered by leaves and falling to your doom')
    document.write('<h1>You got ending 4/10 "wow you fell"</h1>')
}
else if (lookaround === "2"){
    alert('You decide to head to the right. After walking to the right for a little bit you hear footsteps behind you. You turn around to see a huge tall weird creature standing behind you. You start sprinting to run away but the radio slows you down and you cant get away.')
    document.write('<h1>You got ending 5/10. "To slow bro"</h1>')
}
else if (numb > 2){
    document.write('<h1>Idiot, we said 1 or 2</h1>')
}
}

function leaveplane() {
    let leaveplane = prompt ('You decide to leave the plane without looking around for supplies. After leaving the plane you have too options left or right. 1 for left 2 for right')
    
if (leaveplane === "1"){
    alert('You decide to head to the left. After heading to the left and walking that way for a while you end up stepping into a huge hole in the ground covered by leaves and falling to your doom')
    document.write('<h1>You got ending 4/10 "wow you fell"</h1>')
}
else if (leaveplane === "2"){
    alert('You decide to head to the right. After walking to the right for a little bit you hear footsteps behind you. You turn around to see a huge tall weird creature standing behind you. You start sprinting to run away and luckily your able to get away')
    rightway();
}
}

function rightway(){
let rightway = prompt('After escaping to saftey and catching your breathe you turn around and notice a split in the path both look exactly the same. Your given an option 1 for left 2 for right ')

if (rightway === "1"){
    leftway();
}
else if (rightway === "2"){
rightrightway();
}
}

function leftway(){
    let leftway = prompt('You went down the left path and followed it for a while, till you found another split in the road that looked exactly like the last. 1 for left 2 for right')

if (leftway === "1"){
    alert('You went down the left path and followed it for a while till you found another split in the road that looked exactly like the last. You keep repeating this over and over again no matter what path you take you end up at the exact same spot')
document.write('<h1>You got ending 6/10. "The infinite loop"</h1>')
}
else if (leftway === "2"){
    alert('You go down the right and followed it for a while. You end up slipping on a banana in the middle of the road and hit your head on a rock.')
    document.write('<h1>You get ending 7/10. "This aint Mario Cart... cmon now"</h1>')
}
}

function rightrightway(){
  let rightrightway = prompt('You decide to go down the right path. As you follow the path for a while, it comes to a end. At the end of the trail there stands a hut with smoke coming out of the chimney. You start to get close to the hut and debate going in or not. 1 for go in 2 for stay outside and debate for longer')

if (rightrightway === "1"){
    cardmaster();
    }
else if (rightrightway === "2"){
    alert('As you stand there and procrastinate going in or not a tree falls down and lands on top of you')
    document.write('<h1> You got ending 8/10. "Heads up"</h1>')
}
}

function cardmaster(){
    alert('As soon as you walk in the hut you are greeted by a strange looking man. He calls himself the cardmaster and tells you to take a seat and play his game. He explains the rules of the game to you " im going to split the deck in 2. You will then pick up the top card of one of the 2 decks. After you pull that card you will then be given the choice of choosing another card from either of the 2 decks, you must then hope the card you draw is greater than the first card you chose. Ace is the highest and 1 is the lowest')
    let cardmaster = prompt('let the game begin... Choose the deck you must pick your card from 1 for left 2 for right')

    if (cardmaster === "1"){
        alert('You pull the top card from the left deck and reveal a 2 of diamonds')
        twoofdiamonds();
    }
    else if(cardmaster === "2"){
        alert('You pull the top card of the right deck and reveal a 8 of diamonds')
        eightofdiamonds();
    }
}
function eightofdiamonds(){
let eightofdiamonds = prompt('After pulling the eight of diamonds you are glad it wasnt higher, but you still dont like the card. You must choose your next card the cardmaster says 1 for left 2 for right ')

if (eightofdiamonds === "1"){
    alert('After picking up the top card of the left deck you are discouraged to see a 3 of clovers staring back at you')
    document.write('<h1>You got ending 9/10. "Wrong choice"</h1>')
}
else if (eightofdiamonds === "2"){
    alert(' After picking up the top card of the right deck you are discourged to see a 5 of spades staring back at you')
    document.write('<h1>You got ending 9/10. "Wrong choice"</h1>')
}
}

function twoofdiamonds(){
    let twoofdiamonds = prompt('After pulling a 2 of diamonds you are very relieved that the only way to lose is if you pull a 1 this next draw. You must choose your next card the cardmaster says 1 for left 2 for right')

if (twoofdiamonds === "1"){
    alert('After picking up the top card on the left deck you are discouraged to see a 1 of hearts staring back at you')
    document.write('<h1>You got ending 9/10. "Wrong choice"</h1>')
}
else if (twoofdiamonds === "2"){
    alert('After picking up the top card on the right deck you are filled with joy to see that you pulled the Ace of Spades. The Cardmaster then tells you that this whole time you have been dreaming and since you won you must "WAKE UP"')
    document.write('<h1>"Congrats You Won" ending 10/10</h1>')
}
}