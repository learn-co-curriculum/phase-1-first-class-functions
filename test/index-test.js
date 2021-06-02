const expect = require("expect");
const fs = require("fs");
const jsdom = require("mocha-jsdom");
const path = require("path");

describe("index", () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, "..", "index.js"), "utf-8"),
  });

  describe("receivesAFunction(callback)", () => {
    it("receives a function and calls it", () => {
      // in the context of this test, 'spy' is the callback function
      const spy = expect.createSpy();

      // your function should take a callback function as an argument
      receivesAFunction(spy);

      // and it should call the callback function
      expect(spy).toHaveBeenCalled();
    });
  });

  describe("returnsANamedFunction()", () => {
    let fn;

    before(() => {
      // before running each test, we call your 'returnsANamedFunction' function
      // and save its return value to a variable called 'fn'
      fn = returnsANamedFunction();
    });

    it("returns a function", () => {
      expect(fn).toBeA("function");
    });

    it("returns a named function", () => {
      // if you declare a function with the syntax:
      // function myFunction() {}
      // it will have a name "myFunction" assigned to its name property

      // this checks that the function returned from 'returnsANamedFunction'
      // has a name assigned
      expect(fn.name).toNotEqual("");
    });
  });

  describe("returnsAnAnonymousFunction()", () => {
    let fn;

    before(() => {
      fn = returnsAnAnonymousFunction();
    });

    it("returns a function", () => {
      expect(fn).toBeA("function");
    });

    it("returns an anonymous function", () => {
      expect(fn.name).toEqual("");
    });
  });
});
