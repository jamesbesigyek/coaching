/* function Mobile(brand,model,color,bateryLife,category){
    return{
        brand:brand,
        model:model,
        color:color,
        baterLife:bateryLife,
        category:category,
    }
   
}

let techno = Mobile("techno","x5","blue",12,"smart")
console.log(techno) */

function laptop(disksize,speed,color,extras,screensize){
    this.disksize=disksize,
    this.speed=speed,
    this.color=color,
    this.extras=extras,
    this.screensize=screensize
}
let hp = new laptop("20GB","8GH","blue","wifi",4)
console.log(hp)