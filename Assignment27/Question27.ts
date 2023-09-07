//Question27

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.


let alien_color = [ 'green', 'yellow', 'red']; // Change to 'yellow' or 'red' to test different cases

// Check if the alien's color is green
if (alien_color[0] ) 
{
  console.log("Color is green : Congratulations! You just earned 5 points.");
} else if (alien_color[1]) 
{
        console.log("Color is yellow :  print the player just earned 10 points.");
   
}else if(alien_color[2]){
        console.log(" color is red : the player just earned 15 points.");
}else{
    console.log("NOTHING");
}