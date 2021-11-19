console.log('Hello world')

function go() { 
    let numb = prompt ('You wake up not knowing where you or how you got there, you are in what seems like a little hut. You get up and start walking around exploring the place not finding anything but a random ice-cream scooper a few chairs and a oven. For some reason you think that it would be a good idea to pick up the ice-cream scooper. Should you pick it up 1 for yes 2 for no')

if (numb === "1") {
   alert('You chose to pick up the spoon and continue on your journey. After exploring the whole hut you choose to walk outside. As soon as you walk outside a super spicky spider lunges out from the depths. With the ice-cream scooper in hand your somehow able to hit the spider mid air and escape to saftey.');
}
else if (numb === "2"){
   alert('You chose to ignore the spoon and continue on your journey. After exploring the whole hut you choose to walk outside. As soon as you walk outside a super spicky spider lunges out from the depths. Without something to hit it away with, it sticks to you and bites you. You get extremly sick from the poison and die a slow painful death');
   document.write('<h1>You got ending 1 of 10</h1>')

}

 prompt ('After escaping to saftey you look around and realize you are more lost then you already were. After exploring for a little bit you find a rather larger trail that seems to follow somewhere, but you dont know where. You have two options you can either keep looking around and hope to find something new or you could hop on the trail and follow that 1 for keep looking around 2 for hop on the trail')
