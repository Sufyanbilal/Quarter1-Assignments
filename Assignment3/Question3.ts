let name1 = "eric williams";
console.log("Lowercase: " + name1.toLowerCase());
console.log('Lowercase :' + name1.toUpperCase());
console.log('Titlecase :' + name1);

let titlecase: string = name1.toLowerCase().split(' ')
  .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');
console.log("Titlecase:", titlecase);

