var add = (x,y)=>{
    sum = x + y
    return sum
}
var sub =(z,d) =>{
    sub = z-d
    return sub
}
var mult =(x,y,z,d) => {
    result = add(x,y)*sub(z,d)
    console.log(result)
}


mult(2,4,6,3)