/* function declaration,  all the three declarations are the same
 var addition = ()=>{}; 
 var addition =function(){};
 function addition(){} */ //terminate only when your are assigning an expression

var addition = () => {
  console.log(7 + 8); //function definition
};
addition(); //call the function-also refered to as invoking the function


// imediately invoking a function
(() => {
    console.log(7 + 8); 
  })()      //calling the function immediately-

// function modification

var addition = () => {
    let x = 3
    let y = 5
    console.log(x+y); //function definition
  }
  addition()

  // parametrised function

  var addition = (x,y) => {
        console.log(x+y); //function definition
  }
  addition(8,45)

  // return concept
  var addition = (x,y) => {
    let sum =x+y //function definition
    return sum              // sum is stored and used by another function
}
//addition(8,7)

let myadd = addition(8,7)*2 // using the returned function
console.log(myadd)

