// Question43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
//of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names 
//and one array with the Great added to each magician’s name.


const magicians: string[] = ["Magician1", "Magician2", "Magician3", "Magician4"];

function show_magicians(names: string[]): void {
  for (const name of names) {
    console.log(name);
  }
}

function make_great(names: string[]): string[] {
  const greatMagicians: string[] = [];
  for (const name of names) {
    greatMagicians.push(`${name} the Great`);
  }
  return greatMagicians;
}

const modifiedMagicians = make_great([...magicians]); 

console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);