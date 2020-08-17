// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
//Unit tests for sayHello function
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe("string");
    });
    it("should return 'Hello, Jane!' with an input of 'Jane'", function(){
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it("should return 'Hello, Alex!' with an input of 'Alex'", function(){
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it("should return 'Hello, Pat!' with an input of 'Pat'", function(){
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it("should return 'Hello, World!' with an undefined input", function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return 'Hello, World! with an input of true", function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return 'Hello, World! with an input of false", function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should return 'Hello, World! with an input of null", function(){
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it("should return 'Hello, World! with an input of \"\"", function(){
        expect(sayHello("")).toBe("Hello, World!");
    });
    it("should return 'Hello, World! with an input of 2.3", function() {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it("should return 'Hello, World! with an input of '5'", function() {
        expect(sayHello("5")).toBe("Hello, World!");
    });
    it("should return 'Hello, World! with an input that is an array, object or function", function() {
        expect(sayHello([1, 2, 3])).toBe("Hello, World!");
    });
});
// Unit Tests isFive Function
describe('isFive', function () {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return a false for an input of null', function() {
        expect(isFive(null)).toBe(false);
    });
    it('should return a true for an input of 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return a true for an input of "5"', function() {
        expect(isFive('5')).toBe(true);
    });
    it('should return a false for an input of -5', function() {
        expect(isFive(-5)).toBe(false);
    });
});
// Unit tests for isEven function
describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return a true for an input of 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return a true for an input of -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return a false for an input of 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return a false for an input of "banana"', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return a true for an input of "8"', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return a false for an input of "Infinity"', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return a false for an input of true', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return a false for an input of false', function() {
        expect(isEven(false)).toBe(false);
    });
    it('should return a false for an input of ()', function() {
        expect(isEven()).toBe(false);
    });
});
//isVowel Unit Tests
describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean value', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return a true for an input of "a"', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return a true for an input of "A"', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return a false for an input of "y"', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return a false for an input of 4', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return a false for an input of true', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return a false for an input of false', function() {
        expect(isVowel(false)).toBe(false);
    });
    it('should return a false for an input of "banana"', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return a false for an input of ()', function() {
        expect(isVowel()).toBe(false);
    });
});
// add function
describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return 5 from 2 and 3', function (){
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 from -3 and -9', function (){
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 from "5" and 6', function (){
        expect(add("5", 6)).toBe(11);
    });
    it('should return -6 from 4 and "-10"', function (){
        expect(add(4, "-10")).toBe(-6);
    });
    it('should return NaN from "banana" and "split"', function (){
        expect(add("banana", "split")).toBeNaN();
    });
    it('should return NaN from 2 and "apples"', function (){
        expect(add(2, "apples")).toBeNaN();
    });
    it('should return NaN from ()', function (){
        expect(add()).toBeNaN();
    });
});
