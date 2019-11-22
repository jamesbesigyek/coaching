//scoping Var, Let and const
 function myfun1(){
    var a =1;
    if (true){
        var c =3                        //changing const, let and var for declaration of c gives different results
        console.log("it is one")
        //console.log(b)
    }
    console.log(c)
} 
 myfun1() 
