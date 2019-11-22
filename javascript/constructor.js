function person(givenName){
    this.name = givenName 
    this.age = undefined        //used to instantiate at a latter stage
    this.other =undefined
}
let james = new person("besgye")
console.log(james.name)
james.name = "besigye"
james["other"] = "kiguuya"      //bracket notation in use to assign.-very powerful--research how to use it.
console.log(james.name)
james.age = 25
console.log(james)