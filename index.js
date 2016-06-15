function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function named() {
    console.log("The girl is Arya.")
  }
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log('The girl has no name.')
  }
}
