
/// var function scope
function test() {
    console.log(i);
    //Var's value is undefined, this means the var is declared (but how?)
    if ("5" === "5") {
        var i = 100;
        var i = 150;
    }
    console.log(i); //Var's value is 100, but i'm out of the if statement!
}

test()
