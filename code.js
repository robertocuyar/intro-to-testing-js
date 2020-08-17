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
//isFive function
function isFive(input) {
    return input == 5;
}
//isEven function
function isEven(input){
return input % 2 === 0 && input !== false;
}
//isVowel function
function isVowel(input) {
    if (input === "a" || input ==="e" || input ==="i" || input ==="o" || input === "u") {
        return true
    } else if (input === "A" || input ==="E" || input ==="I" || input ==="O" || input === "U") {
        return true
    } else {
        return false
    }
}
// add function
function add(x, y) {
        return Number(x) + Number(y);
}
console.log(add("banana", "split"));
