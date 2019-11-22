let userName = "Daniel94.dan1@gmail.com";
let myValidator =/^[a-zA-Z0-9]+[0-9]+([a-zA-Z0-9._-]+)?[@][a-zAZ]+.[a-zAZ]{2,3}$/
console.log(myValidator.test(userName))

//flags
//"?"- sets the expression to optional- this is used after the plus
// good practise is to put the expression in a group brackets"()"
//"{2,3}" - specifies a range
