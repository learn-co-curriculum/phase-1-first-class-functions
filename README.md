First-Class Functions
---

## Objectives

1. Practice writing inline functions
2. Practice writing functions to use as callbacks
3. Explain what a "first-class function" is

## TODO (delete this section when finished)

- [ ] Add steps for completing code-along
- [ ] Add solution branch

## Introduction

Sometimes in life, we need to take a first step. Since life isn't scripted like a reality TV show, anything can happen
after that initial step. We need to be able to adjust accordingly.

Imagine an exercise routine: every morning, we run 5 miles. But afterwards — depending on the day — we might lift
weights, go for a swim, or run an extra 5 miles.

In programming-speak, we could write out a function for every day (follow along!):

```js
function Monday() {
  console.log('Go for a five-mile run');
  console.log('Pump iron');
}

function Tuesday() {
  console.log('Go for a five-mile run');
  console.log('Swim 40 laps');
}

function Wednesday() {
  console.log('Go for a five-mile run');
  console.log('Go for a five-mile run');
}

function Thursday() {
  console.log('Go for a five-mile run');
  console.log('Pump iron');
}

function Friday() {
  console.log('Go for a five-mile run');
  console.log('Swim 40 laps');
}
```

But that's pretty tedious. And we already know that functions are supposed to help us _reduce_ this kind of repetition.

What if we pull all of our five-mile runs into their own function?

```js
function runFiveMiles() {
  console.log('Go for a five-mile run');
}
```

Okay, that cuts down _slightly_ on how much code we need to write. Let's do the same thing for lifting weights and swimming:

```js
function liftWeights() {
  console.log('Pump iron');
}

function swimFortyLaps() {
  console.log('Swim 40 laps');
}
```

Awesome! We've cut down a little bit more: `Monday()` could now look like


```js
function Monday() {
  runFiveMiles();
  liftWeights();
}
```

While it is a tiny bit shorter than before, there is definitely still room for improvement. We know that every day,
our routine includes two activities. We also know that the first activity is always a run. That means that the
second activity can be variable. What if we created a function that took the second activity as a parameter?

```js
function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}
```

Notice that, in `exerciseRoutine()`, the `postRunActivity` parameter is actually a _function_ — we call it after
we call `runFiveMiles()`. Now let's try to use this new function we created in our `Monday()` function:

```js
function Monday() {
  exerciseRoutine(liftWeights);
}
```

Notice that we aren't _calling_ `liftWeights`. When we want to pass a function as a value, we pass it by _reference_. We
do this by omitting the parentheses. We're not running the function at this point. It's up to `exerciseRoutine()` to
call the function when it is needed.

If we call `Monday()`, we'll see that we run five miles, and then we lift weights — awesome!

Functions in JavaScript are **first-class functions**. Among other things, this means that we can pass them as values to
other functions, just like we did above. They're super useful, as you can see — they even help us exercise in the mornings!

Note: you'll often see functions used in this way referred to as "callbacks." That's because they're _called back_ after
the body of the function they're passed to completes! Callbacks are mostly used for asynchronous operations, like
requesting a JSON file from a server, or in the case of Node.js, accessing the file system, a database, etc.

## Inline functions

What if, though, we want to have a one-off day of Pilates in our exercise routine? Keep in mind that our
`exerciseRoutine()` function requires a function as its first (and only) parameter. However, that function doesn't have
to be defined beforehand! We can pass what's called an _anonymous function_ to `exerciseRoutine()`.

To start with, let's use the full function syntax we've come to know and love:

```js
exerciseRoutine(function() {
  console.log('Stretch! Work that core!');
});

// "Go for a five-mile run"
// "Stretch! Work that core!"
```

We can rewrite this to be more concise by using an arrow function:

```js
exerciseRoutine(() => {
  console.log('Stretch! Work that core!');
});

// Or even shorter:
exerciseRoutine(() => console.log('Stretch! Work that core!'));
```

Notice how neither of these functions have a name — we can't refer to it elsewhere, we just pass it in as an argument
to `exerciseRoutine()`. Functions that don't have names are, for obvious reasons, known as **anonymous functions**.

## Returning functions

Functions can also return other functions. This is useful when we want to package up a function and its environment, but
when we don't want to call it _just yet_.

For example, let's say our morning routine involves drinking a cup of coffee, exercising immediately, and then at some
point later (depending on how we feel), eating breakfast. What we'll have for breakfast depends on what kind of exercise
we're doing.

Let's translate this to a function:

```js
function morningRoutine(exercise) {
  var breakfast = null;

  if (exercise === liftWeights) {
    breakfast = 'protein bar';
  } else if (exercise === swimFortyLaps) {
    breakfast = 'kale smoothie';
  } else {
    breakfast = 'granola';
  }

  exerciseRoutine(exercise);

  // we could give this function a name if we wanted to,
  // but since it's only available _inside_ morningRoutine(),
  // we don't need to
  return function() {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  }
}
```

Now when we call `morningRoutine()`, we'll get a function back:

```js
var afterExercise = morningRoutine(liftWeights);
```

And we can call that function later:

```js
afterExercise();
```

![first-class functions in action](https://curriculum-content.s3.amazonaws.com/skills-based-js/first-class_functions_example.png)

If you haven't been following along, it's vitally important that you go back and do so. First-class functions are one
of JavaScript's most powerful features, but it takes some practice for them to sink in.

## Your turn

You'll also, of course, get some practice from this lab! Remember, run the tests, read the errors, write some code in
`index.js`, run the tests, read the output — repeat until finished.

## Resources

- [Wikipedia](https://en.wikipedia.org/wiki/First-class_function): [First-class function](https://en.wikipedia.org/wiki/First-class_function)
- [JavaScript is Sexy](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/#more-1037): [Higher-order functions](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/#more-1037)
