// Write your code in this file!
//const currentUser = 'Grace Hopper';
//const welcomeMessage = 'Welcome to Flatbook';
//const welcomeMessage = "welcome to Flatbook," + currentUser;
/*


const myString = 'template Literal';
const myNumber = 10;
const myBoolean = false;
?/*
Saying that interpolation with ${myString}s is better than concatenation ${90 + myNumber}% of the time is simply ${myBoolean}. But it is pretty cool!

Beware that new lines inside of a ${myString} will be preserved as new lines in the resulting ${typeof myString}!`;
*/

const currentUser = 'Grace Hopper';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)} !`;


