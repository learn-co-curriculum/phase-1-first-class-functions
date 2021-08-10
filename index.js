function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  return function namedF() {

  };
}

function returnsAnAnonymousFunction(){
    return function(){
    };
}
