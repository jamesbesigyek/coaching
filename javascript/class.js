class Person{
    // put attributes inside the constructor
    constructor(name,age,gender){
        this.name = name
        this.age = age
        this.gender = gender
    }

    digestion() {
        console.log ("i am digesting")
       
    }
    talk(){
        console.log("lets talk")
    }
    walk(){
        console.log("I am walking")
    }
}

let shayo = new Person("Shayo Ahmed",25,"male")
console.log(shayo)


shayo.age = 30
console.log(shayo)

shayo.talk()
shayo.walk()