function receivesAFunction(callback) {
  callback();
}
function driving() {
  return function turnleft() {};
}

function returnsANamedFunction() {
  return driving();
}

function returnsAnAnonymousFunction() {
  return function () {};
}
