// Question37.
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
//that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
//and a shirt of any size with a different message.

function make_shirt (size = "large" , message = "I love Javascript"){
    console.log(`Your ${size} T-shirt with the message: ${message}`);

}
make_shirt();
make_shirt("Medium","I love typescript");
make_shirt("small","Hello");