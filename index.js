function scuberGreetingForFeet(distance){
// Write your code here!
if (distance <=400){
return "This one is on me!";
}
else if(distance >2000 && distance <2500){
return "I will gladly take your thirty bucks.";
}
else if(distance >2500){
return "No can do.";
}
}
let city = 'NYC'
function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';

}


let tipAmount = '08';
function switchOnCharmFromTip(tipAmount){

  switch (tipAmount) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
   
 
 }
  
  // Write your code here!
