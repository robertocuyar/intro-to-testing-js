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