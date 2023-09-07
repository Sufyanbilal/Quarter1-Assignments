// // Question42.
// // Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
//  that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//  Call show_magicians() to see that the list has actually been modified.

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
const greatMagicians = make_great(magicians);

show_magicians(greatMagicians);

