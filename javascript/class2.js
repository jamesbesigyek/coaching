class Dog{
    constructor(color,age){
        this.color=color    // this key word allows public access
        this.age=age

    }
    move(){
        console.log("the dog is moving")
    }
    bark(){
        console.log("barking dog is dangerous")
    }
}

const chiwawa = new Dog ()
const bulldog = new Dog ("green",3)
chiwawa.move()
//console.log(chiwawa("black",2))
chiwawa.bark()
chiwawa.color="black"
chiwawa.age=2
console.log(chiwawa)
console.log(bulldog)
bulldog.move()
