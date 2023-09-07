// // Question42.
// // Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
//  that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//  Call show_magicians() to see that the list has actually been modified.
var magicians = ["Magician1", "Magician2", "Magician3", "Magician4"];
function show_magicians(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
}
function make_great(names) {
    var greatMagicians = [];
    for (var _i = 0, names_2 = names; _i < names_2.length; _i++) {
        var name_2 = names_2[_i];
        greatMagicians.push("".concat(name_2, " the Great"));
    }
    return greatMagicians;
}
var greatMagicians = make_great(magicians);
show_magicians(greatMagicians);
