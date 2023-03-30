# First-Class Functions

## Learning Goals

- Define "first-class function"
- Use inline functions
- Use functions as return values
- Define "higher-order function"

## Introduction

Functions are a powerful, fundamental programming tool. We've learned how to
write them, and the many different ways there are to write them, and yet we've
still only scratched the surface. In this lesson, we'll dive deeper into the
kind of functions JavaScript supports, allowing us to further understand the
many ways in which we can use them.

## JavaScript Functions are First-Class

In JavaScript, **functions are considered first-class**. Being first-class means
they are treated like any other variable. The primary benefits of this are as
follows:

- Functions can be assigned as a value to any variable.
- Functions can be passed as an argument to another function.
- Functions can be returned by another function.

That first point is nothing we haven't seen before, but the last two sound a bit
wild, don't they? Let's see some examples to help wrap our heads around it all!

## Assigning Functions to a Variable

Again, this isn't anything new. We've _been_ doing this, whether through
function declaration, function expression, or arrow functions. Let's review all
three of those again:

Function declaration:

```js
function iDoDeclare() {
  console.log("Well then!");
}

iDoDeclare(); // => Well then!
```

We created a function that logs `Well then!`, and assigned it to a
variable called `iDoDeclare`.

Function expression:

```js
const expressYourself = function () {
  console.log("You've got to!");
};

expressYourself(); // => You've got to!
```

Again, we've created a function that logs something and saved it to a variable,
in this case `expressYourself`.

Lastly, an arrow function:

```js
const likeAnArrow = () => {
  console.log("Time flies!");
};

likeAnArrow(); // => Time flies!
```

Your turn, what have we done here?

If you said we created a function that logs `Time flies!` and assigned it to the
`likeAnArrow` variable, you are correct.

Being able to assign functions to variables is important. It's what makes us
able to invoke them, and invoke them again, and again, and again. It also makes
them easier to pass around, even as an argument to another function.

## Passing Functions as Arguments

## Conclusion

Anything variables can do, functions can too.
