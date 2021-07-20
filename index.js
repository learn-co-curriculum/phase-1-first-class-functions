function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
    return function Yeehaw(){}

}
function returnsAnAnonymousFunction(){
    return function(){}
}