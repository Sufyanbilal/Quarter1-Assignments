// Question41.
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.

let magicians = ["Magician1", "Magician2", "Magician3", "Magician4"];


function show_magicians(names: string[]): void {
  for (const name of names) {
    console.log(name);
  }
}

show_magicians(magicians);