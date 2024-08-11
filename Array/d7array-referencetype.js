// reference type

var o1 = {value:10};
var o2 = o1
var o3 = {value:10}

o1 == o3 //fales
o1 == o2 //true

o1.value == 15
o2 // {value:15}

// but if you use let will be totally different


// context vs scope

const object4 = {
    a: function(){
        console.log(this)
    }
}
// object4.a() 
//instantiation

class Wizard extends Player{
    constructor(name, type){
        super(name, type)
    }
    play(){
        console.log(`WEEEE I'm a ${this.type}`)
    }
}

const wizarad1 = new Wizard("shelly","Healer")
const wizarad2 = new Wizard("karen","Dark Magic")