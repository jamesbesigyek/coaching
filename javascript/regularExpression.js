//example@domain.tld  -top level domain
//. it must contain the @ character
//let email = "jerome.com"
// let myChar =email.charAt(1)
// console.log(myChar)             //prints letter "e"

//let email = document.getElementById
/* let email = "brenda@gmail.com";

console.log(/e/.test(email))
console.log(email.replace(/brenda/i,"john")) */
//flags - 
//"i" - dont mind about the case
//"g" - global, check through the entire doc
//console.log(email)
    

//let emailvalidator = /^$/;// regular expression literal //; anything in between is a regular expression

//let names ="john, james, maria, patrick"
//let pattern=/\w/

//"\w" is a special flag equivalent to [A-Za-z0-9]
//let allnames=names.match(pattern)
//console.log(allnames)

let names ="jamesbesigyek@gmail.com"
//let pattern=/Jackson/ //strictly matches the name "Jackson"
let pattern =/^[a-zA-Z0-9]+@[A-Za-z]+.[a-zA-Z]+$/ //matches "a-z and A-Z and 0-9"
//flags- 
//"$" flag for end of file
//"^" flag for begining of file
//"+" flag for iterating-charcters before the "+" can repeat
//"{2-3}" range of inputs
let answer =pattern.test(names)
console.log(answer)