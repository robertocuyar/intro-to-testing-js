// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
// sayHello function
function sayHello(name) {
   if (name && name !== true && isNaN(name) === true && typeof name ==='string') {
       return "Hello, " + name + "!"
   } else {
       return "Hello, World!"
   }
}