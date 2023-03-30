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

**Being able to assign functions to variables is important**. It's what makes us
able to invoke them, and invoke them again, and again, and again. It also makes
them easier to pass around, even as an argument to another function.

## Passing Functions as Arguments

Before we dive right into it, let's review what an argument is. When we define a
function, we can tell it to expect something will be passed to it when invoked.
To do so, we set up _parameters_.

```js
function findBook(genre) {
  return "Found you a book in the genre: ", genre;
}
```

In the above example, we set up a parameter called `genre`. When we invoke this
`findBook` function, we can pass it an _argument_ for that parameter. That
argument becomes the value of that parameter within the function body.

```js
findBook("fantasy");
// => Found you a book in the genre: fantasy
```

We can also pass in a variable as an argument instead of directly passing the
value. It would work the same:

```js
const wantedGenre = "fantasy";
findBook(wantedGenre);
// => Found you a book in the genre: fantasy
```

When writing a function with a parameter, we usually have a good idea of what
type of argument will be passed in for it. For example, we knew `genre` would
have to be some sort of string. If we were to write some sort of calculation
function...

```js
function discountByThirtyPercent(price) {
  return price - price * 0.3;
}

discountByThirtyPercent(100); // => 70
```

...we could reasonably expect that any argument passed to `price` will be a
number. This sort of expectation is needed because it informs how we use the
parameter variable within our function body. Our calculation in the above
wouldn't make sense if we thought `price` could ever be a string instead.

This kind of expectation is especially needed when we start passing in
_functions_ as arguments. Let's look at an example. First, let's write two
different functions that console log different greetings.

```js
function welcome() {
  console.log("Welcome to Bookish Mart!");
}

function bye() {
  console.log("Thanks for shopping at Bookish Mart!");
}
```

Next, let's create a `cashier` function. Depending on whether the cashier is
welcoming or saying goodbye to a customer, they should be able to say a
different greeting. Let's create a parameter called `sayGreeting` to allow that
variability.

```js
function cashier(sayGreeting) {}
```

Theoretically, we _could_ expect different greeting strings to be passed in as
arguments. However, we already made two different greeting functions - we might as
well use them.

So, instead, we can expect that one of the two greeting functions will be passed
in as the argument for `sayGreeting`. Assuming that `sayGreeting` will be a
function allows us to _invoke_ the parameter inside the `cashier` function's
body.

```js
function cashier(sayGreeting) {
  sayGreeting();
}
```

Whichever greeting function gets passed in as the argument for that parameter,
will then be the function that gets invoked inside `cashier`'s function body.

Let's invoke our `cashier` to say our `bye` greeting. Just as we're able to pass
in a variable that holds a string or number value, we can pass in variables that
hold a _function_ too. In our case, we want to pass in our `bye` function.

```js
cashier(bye);
// => Thanks for shopping at Bookish Mart!
```

When invoking `cashier` and passing `bye` as the argument for `sayGreeting`,
`sayGreeting` becomes a reference to the `bye` function. Thus, when
`sayGreeting` is invoked inside of `cashier`, we're actually invoking `bye`.

The same would be true if we passed in `welcome` instead.

```js
cashier(welcome);
// => Welcome to Bookish Mart!
```

Whoa. _That's a lot going on._ If you're having trouble grasping what's happening,
that is OK. This is a difficult topic, and it takes time and practice to sink
in. It is a vital concept that will open up a lot of doors for what you can do
with JavaScript. It's so important that we will cover it in more detail in the
next lesson.

For now, it is enough to understand that **JavaScript functions are all
first-class, and therefore can be passed as arguments to other functions**.

## Returning Functions

## Conclusion

Anything variables can do, functions can too.
