function scuberGreetingForFeet(distance) {
  // Write your code here!

let response
if (distance <= 400) {
  response = 'This one is on me!'
  return response

}
if (distance > 400 && distance <= 2000 ) {
  response = 'That will be twenty bucks.'
  return response

}
if (distance > 2000 && distance < 2500) {
  response = 'I will gladly take your thirty bucks.'
  return response
}

if (distance > 2500) {
  response = 'No can do.'
  return response

}
}

function ternaryCheckCity(someCity){
  let isNyc = 'NYC'
  return someCity === isNyc ? 'Ok, sounds good.' : 'No go.'
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  // Write your code here!
switch (tip) {
case 'generous' : return "Thank you so much."
break
case 'not as generous' : return "Thank you."
break
default : return "Bye."

}
}