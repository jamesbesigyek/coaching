/* //3 methods for creating objects
//object literals
//factory
//constructors


//created object James using object literal.
// CREATE every object yourself
var jamesb = { 
    firstName:"james",
    lastName:"bes",
    age:32,
    gender:"male",
};
var daniel ={ 
    firstName:"daniel",
    lastName:"kalibwa",
    age:32,
    gender:"male",
}

var premio = {
    color:"grey",
    speed:180,
    capacity:5,
    model:2015,
}

/* console.log(premio)
console.log(premio.color) */

// factory, constructor and class
//factory manufacture and give out - function is a factory... must begin with a capital letter

function Student(givenFirst,givenLast,givenAge,givenGender) {   //pass attributes as parameters
    return {
        firstName:givenFirst,
        lastName:givenLast,
        age:givenAge,
        gender:givenGender,
    }
}

let james = Student("james","besig",120,"male");
let jack = Student("jack","bower",100,"35");
console.log (james)
console.log(jack.lastName,jack.age)


//constructor -create what looks like you.
// this keyword is used to create constructor objects

function car(brand,color,speed){
    this.brand = brand;
    this.color = color;
    this.speed = speed;
}

var myToyota = new car("toyota","green",200)
var myBenz = new car("benze","black",240)

console.log(myBenz) 


