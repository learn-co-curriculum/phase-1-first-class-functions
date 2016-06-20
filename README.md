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

Sometimes in life, we need to take a known first step, but we want to be able to adjust a subsequent step in a process.

Imagine an exercise routine: every morning, we run 5 miles. But then afterwards, depending on the day, we might lift weights, go for a swim, or run an extra 5 miles.

In programming-speak, we could write out a function for every day (follow along!):

``` javascript
function Monday() {
  console.log('Go for a five-mile run')
  console.log('Pump iron')
}

function Tuesday() {
  console.log('Go for a five-mile run')
  console.log('Swim 40 laps')
}

function Wednesday() {
  console.log('Go for a five-mile run')
  console.log('Go for a five-mile run')
}

function Thursday() {
  console.log('Go for a five-mile run')
  console.log('Pump iron')
}

function Friday() {
  console.log('Go for a five-mile run')
  console.log('Swim 40 laps')
}
```

But that's pretty tedious. And we already know that functions are supposed to help us _reduce_ this kind of repetition.

What if we pull all of our five-mile runs into their own function?

``` javascript
function runFiveMiles() {
  console.log('Go for a five-mile run')
}
```

Okay, that cuts down _slightly_ on how much code we need to write. What if we do the same for lifting weights and swimming?

``` javascript
function liftWeights() {
  console.log('Pump iron')
}

function swimFortyLaps() {
  console.log('Swim 40 laps')
}
```

Okay, we've cut down a little bit more: `Monday()` could now look like


``` javascript
function Monday() {
  runFiveMiles()
  liftWeights()
}
```

which, sure, is a tiny bit shorter than before. But again, we know that every day, our routine includes two activities; and the first activity is always a run. What if ... hm, let's try this:

``` javascript
function exerciseRoutine(postRunActivity) {
  runFiveMiles()
  postRunActivity()
}
```

Notice that, in `exerciseRoutine()`, `postRunActivity` is actually a _function_ — we call it it after we call `runFiveMiles()`. Now let's try to change `Monday()` to

``` javascript
function Monday() {
  exerciseRoutine(liftWeights)
}
```

Notice that we aren't _calling_ `liftWeights` when we pass it as an argument to `exerciseRoutine()`; we omit the parentheses when it's just an argument. But inside `exerciseRoutine()`, the function will be called.

If we call `Monday()`, we'll see that we run five miles, and then we lift weights — awesome!

Functions that can be used as arguments to other functions are known as **first-class functions**. They're super useful, as you can see — they even help us exercise in the mornings!

Note: you'll often see functions used in this way referred to as "callbacks." That's because they're _called back_ after the body of the function their passed to completes!

## Inline functions

What if, though, we want to have a one-off day of pilates in our exercise routines?

We can pass what's called an _anonymous function_ to `exerciseRoutine()`. We can either use the full function syntax:

``` javascript
exerciseRoutine(function() {
  console.log('Stretch! Work that core!')
})

// "Go for a five-mile run"
// "Stretch! Work that core!"
```

We can use an arrow function to make this even more concise:

``` javascript
exerciseRoutine(() => {
  console.log('Stretch! Work that core!')
})
```

Notice how neither of these functions has a name — we can't refer to it to call it elsewhere, we just pass it in as an argument to `exerciseRoutine()`. Functions that don't have names are, for obvious reasons, known as **anonymous functions**.

## Returning functions

Functions can also return other functions. This is useful when we want to package up a function and its environment (including any variables that can be declared in its closure — remember those!?), but we don't want to call it _just yet_.

For example, let's say our morning routine involves drinking a cup of coffee, exercising immediately, and then at some point later (depending on how we feel), eating breakfast — and breakfast depends on what kind of exercise we're doing.

Let's translate this to a function:

``` javascript
function morningRoutine(exercise) {
  var breakfast = null

  if (exercise === liftWeights) {
    breakfast = 'protein bar'
  } else if (exercise === swimFortyLaps) {
    breakfast = 'kale smoothie'
  } else {
    breakfast = 'granola'
  }

  exerciseRoutine(exercise)

  // we could give this function a name if we wanted to,
  // but since it's only available _inside_ morningRoutine(),
  // we don't need to
  return function() {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`)
  }
}
```

Now when we call `morningRoutine()`, we'll get a function back:

``` javascript
var afterExercise = morningRoutine(liftWeights)
```

And we can call that function later:

``` javascript
afterExercise()
```

![first-class functions in action](https://curriculum-content.s3.amazonaws.com/skills-based-js/first-class_functions_example.png)

If you haven't been following along, it's vitally important that you go back and do so. First-class functions are one of JavaScript's most powerful features, but it takes some practice for using them to sink in.

## Your turn

You'll also, of course, get some practice from this lab! Remember, run the tests, read the errors, write some code in `index.js`, run the tests, read the output — repeat until finished.

## Resources

- [Wikipedia](https://en.wikipedia.org/wiki/First-class_function): [First-class function](https://en.wikipedia.org/wiki/First-class_function)
- [JavaScript is Sexy](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/#more-1037): [Higher-order functions](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/#more-1037)
