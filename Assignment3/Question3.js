var name1 = "eric williams";
console.log("Lowercase: " + name1.toLowerCase());
console.log('Lowercase :' + name1.toUpperCase());
console.log('Titlecase :' + name1);
var titlecase = name1.toLowerCase().split(' ')
    .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
    .join(' ');
console.log("Titlecase:", titlecase);
