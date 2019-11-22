class Car{
    constructor(color,speed){
        this.color=color
        this.speed=speed

    }
    ignite(){
        console.log("i am igniting")
    }
    Start(){
        console.log("i am starting")
    }
};

const benz = new Car("silver",180)
console.log(benz.color);
console.log(benz.speed);
benz.ignite();
benz.Start();