//refactory rural development bank
class Account{
    constructor(name,acNumber,type,balance){
        this.name = name
        this.acNumber   = acNumber
       // this.min = 50000
        this.type = type
        this.balance =  balance
    }
    create(name, acNumber,balance,min){
        /* this.name       = name
        this.acNumber    = acNumber
        this.balance    =   balance
        this.type   =   type */


    }
    credit(deposit){
        console.log(`crediting account by${deposit}`)
        this.balance =  this.balance + deposit
    }
    
    debt(withdraw){
        console.log(`debiting account by${withdraw}`)
        if (withdraw >this.balance ){
        
        console.log("cannot withdraw more than your balance")
        return false
        }
        if ((this.balance - withdraw)<50000){
        console.log("balance cannot fall below 50000")
        return false
        }
        this.balance= this.balance - withdraw
        console.log(`your account has been debited by${withdraw}. your balance is ${this.balance}`)
    }

    close(balance){
        console.log("closing account")
     this.balance= this.balance - balance
    }   

    checkBal(){
    console.log(Number.parseFloat(this.balance))
    }
}
const JamesAC = new Account("james",0001, "fixed", 100000,50000)
JamesAC.credit(200000)
JamesAC.checkBal()
JamesAC.debt(50000)
JamesAC.checkBal()
JamesAC.debt(60000)
JamesAC.checkBal()
JamesAC.debt(100000)
JamesAC.checkBal()